import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  items: { [id: string]: CartItem };
  totalPrice: number;
  clearedItems: { [id: string]: CartItem };
}

const initialState: CartState = {
  items: {},
  totalPrice: 0,
  clearedItems: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, name, price } = action.payload;
      if (state.items[id]) {
        state.items[id].qty++;
      } else {
        state.items[id] = { id, name, price, qty: 1 };
      }
      state.totalPrice += price;
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      if (state.items[id]) {
        const item = state.items[id];
        if (item.qty > 1) {
          item.qty -= 1;
          state.totalPrice -= item.price; 
        } else {
          state.totalPrice -= item.price; 
          delete state.items[id];
        }
      }
      // If the cart becomes empty, set totalPrice to 0
      if (Object.keys(state.items).length === 0) {
        state.totalPrice = 0;
      }
    },
    clearCart(state) {
      state.clearedItems = { ...state.items };
      state.items = {};
      state.totalPrice = 0;
    },
    emptyCartItems(state) {
      state.clearedItems = {}; 
    },
  },
});

export const { addToCart, removeFromCart, clearCart,emptyCartItems } = cartSlice.actions;
export default cartSlice.reducer;
