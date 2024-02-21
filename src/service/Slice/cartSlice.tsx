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
}

const initialState: CartState = {
  items: {},
  totalPrice: 0,
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
        if (state.items[id].qty > 1) {
          state.items[id].qty -= 1;
        } else {
          delete state.items[id];
        }
        state.totalPrice -= state.items[id].price;
      }
    },
    clearCart(state) {
      state.items = {};
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
