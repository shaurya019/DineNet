import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  tags: string[];
  nonVeg: boolean;
  campaignName: boolean;
  availability: boolean;
}

interface CartState {
  carts: {
    [clientId: string]: {
      [source: string]: {
        items: { [id: string]: CartItem };
        totalPrice: number;
        clearedItems: { [id: string]: CartItem };
        cartTags: string[];
        totalCartItems: number;
      };
    };
  };
}

const initialState: CartState = {
  carts: {}
};

const calculateTotalCartItems = (items: { [id: string]: CartItem }) => {
  let total = 0;
  for (const itemId in items) {
    total += items[itemId].qty;
  }
  return total;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ clientId: string; source: string; item: CartItem }>) {
      const { clientId, source, item } = action.payload;
      const { id, price, tags,availability } = item;

      if (!state.carts[clientId]) {
        state.carts[clientId] = {};
      }
    //  if(availability){
      if (!state.carts[clientId][source]) {
        state.carts[clientId][source] = {
          items: {},
          totalPrice: 0,
          clearedItems: {},
          cartTags: [],
          totalCartItems: 0
        };
      }

      const clientCart = state.carts[clientId][source];
      if (clientCart.items[id]) {
        clientCart.items[id].qty++;
      } else {
        clientCart.items[id] = { ...item, qty: 1 };
        if (tags && typeof tags !== "string") {
          tags.forEach((tag: string) => {
            clientCart.cartTags.push(tag);
          });
        }
      }
      clientCart.totalPrice += price;
      clientCart.totalCartItems = calculateTotalCartItems(clientCart.items);
    //  }
    },
    removeFromCart(state, action: PayloadAction<{ clientId: string; source: string; itemId: string }>) {
      const { clientId, source, itemId } = action.payload;
      const clientCart = state.carts[clientId]?.[source];
      if (clientCart && clientCart.items[itemId]) {
        const item = clientCart.items[itemId];
        if (item.qty > 1) {
          item.qty--;
          clientCart.totalPrice -= item.price;
        } else {
          if (typeof item.tags !== "string") {
            item.tags.forEach(tag => {
              const index = clientCart.cartTags.indexOf(tag);
              if (index !== -1) {
                clientCart.cartTags.splice(index, 1);
              }
            });
          }
          clientCart.totalPrice -= item.price;
          delete clientCart.items[itemId];
        }
      }
      if (clientCart) {
        clientCart.totalCartItems = calculateTotalCartItems(clientCart.items);
        if (Object.keys(clientCart.items).length === 0) {
          clientCart.totalPrice = 0;
        }
      }
    },
    removeItem(state, action: PayloadAction<{ clientId: string; source: string; itemId: string }>) {
      const { clientId, source, itemId } = action.payload;
      const clientCart = state.carts[clientId]?.[source];
      if (clientCart && clientCart.items[itemId]) {
        const item = clientCart.items[itemId];
        if (typeof item.tags !== "string") {
          item.tags.forEach(tag => {
            const index = clientCart.cartTags.indexOf(tag);
            if (index !== -1) {
              clientCart.cartTags.splice(index, 1);
            }
          });
        }
        clientCart.totalPrice -= item.price * item.qty;
        clientCart.totalCartItems -= item.qty;
        clientCart.items[itemId].qty = 0;
        delete clientCart.items[itemId];
        if (Object.keys(clientCart.items).length === 0) {
          clientCart.totalPrice = 0;
        }
      }
    },    
    clearCart(state, action: PayloadAction<{ clientId: string; source: string }>) {
      const { clientId, source } = action.payload;
      if (state.carts[clientId]?.[source]) {
        state.carts[clientId][source].clearedItems = { ...state.carts[clientId][source].items };
        state.carts[clientId][source].items = {};
        state.carts[clientId][source].totalPrice = 0;
        state.carts[clientId][source].cartTags = [];
        state.carts[clientId][source].totalCartItems = 0;
      }
    },
    emptyCartItems(state, action: PayloadAction<{ clientId: string; source: string }>) {
      const { clientId, source } = action.payload;
      if (state.carts[clientId]?.[source]) {
        state.carts[clientId][source].clearedItems = {};
      }
    },
  },
});

export const { addToCart, removeFromCart,removeItem, clearCart, emptyCartItems } = cartSlice.actions;
export default cartSlice.reducer;
