import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  tags: string[];
}

interface CartState {
  items: { [id: string]: CartItem };
  totalPrice: number;
  clearedItems: { [id: string]: CartItem };
  cartTags: string[];
  totalCartItems: number;
}

const initialState: CartState = {
  items: {},
  totalPrice: 0,
  clearedItems: {},
  cartTags: [],
  totalCartItems: 0,
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
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, name, price,tags } = action.payload;
      if (state.items[id]) {
        state.items[id].qty++;
      } else {
        state.items[id] = { id, name, price, qty: 1,tags };
        if (tags && typeof tags !== "string") {
          console.log(typeof tags,tags);
          tags.forEach((tag: string) => state.cartTags.push(tag));
        }
      }
      state.totalPrice += price;
      state.totalCartItems = calculateTotalCartItems(state.items);
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      if (state.items[id]) {
        const item = state.items[id];
        if (item.qty > 1) {
          item.qty -= 1;
          state.totalPrice -= item.price; 
        } else {
          if(typeof item.tags !== "string"){
            item.tags.forEach(tag => {
              const index = state.cartTags.indexOf(tag);
              if (index !== -1) {
                state.cartTags.splice(index, 1); // Remove the tag at the found index
              }
            });
          }
          
          
          state.totalPrice -= item.price; 
          delete state.items[id];
        }
      }
      state.totalCartItems = calculateTotalCartItems(state.items);
      // If the cart becomes empty, set totalPrice to 0
      if (Object.keys(state.items).length === 0) {
        state.totalPrice = 0;
      }
    },
    clearCart(state) {
      state.clearedItems = { ...state.items };
      state.items = {};
      state.totalPrice = 0;
      state.cartTags = [];
      state.totalCartItems = 0;
    },
    emptyCartItems(state) {
      state.clearedItems = {}; 
    },
  },
});


export const { addToCart, removeFromCart, clearCart,emptyCartItems } = cartSlice.actions;
export default cartSlice.reducer;
