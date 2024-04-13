import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  tags: string[];
  nonVeg: boolean;
}

interface CartState {
  carts: {
    [clientId: string]: {
      [sourceId: string]: {
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
    addToCart(state, action: PayloadAction<{ clientId: string; sourceId: string; item: CartItem }>) {
      const { clientId, sourceId, item } = action.payload;
      const { id, price, tags, nonVeg } = item;

      if (!state.carts[clientId]) {
        state.carts[clientId] = {};
      }
      if (!state.carts[clientId][sourceId]) {
        state.carts[clientId][sourceId] = {
          items: {},
          totalPrice: 0,
          clearedItems: {},
          cartTags: [],
          totalCartItems: 0
        };
      }

      const clientCart = state.carts[clientId][sourceId];
      if (clientCart.items[id]) {
        clientCart.items[id].qty++;
      } else {
        clientCart.items[id] = { ...item, qty: 1 };
        if (tags && typeof tags !== "string") {
          tags.forEach((tag: string) => {
            if (!clientCart.cartTags.includes(tag)) {
              clientCart.cartTags.push(tag);
            }
          });
        }
      }
      clientCart.totalPrice += price;
      clientCart.totalCartItems = calculateTotalCartItems(clientCart.items);
    },
    removeFromCart(state, action: PayloadAction<{ clientId: string; sourceId: string; itemId: string }>) {
      const { clientId, sourceId, itemId } = action.payload;
      const clientCart = state.carts[clientId]?.[sourceId];
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
    clearCart(state, action: PayloadAction<{ clientId: string; sourceId: string }>) {
      const { clientId, sourceId } = action.payload;
      if (state.carts[clientId]?.[sourceId]) {
        state.carts[clientId][sourceId].clearedItems = { ...state.carts[clientId][sourceId].items };
        state.carts[clientId][sourceId].items = {};
        state.carts[clientId][sourceId].totalPrice = 0;
        state.carts[clientId][sourceId].cartTags = [];
        state.carts[clientId][sourceId].totalCartItems = 0;
      }
    },
    emptyCartItems(state, action: PayloadAction<{ clientId: string; sourceId: string }>) {
      const { clientId, sourceId } = action.payload;
      if (state.carts[clientId]?.[sourceId]) {
        state.carts[clientId][sourceId].clearedItems = {};
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, emptyCartItems } = cartSlice.actions;
export default cartSlice.reducer;
