import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PizzaItem {
  id: number;
  title: string;
  img: string;
  price: number;
  count: number;
}

interface BasketState {
  basket: PizzaItem[];
}

const initialState: BasketState = {
  basket: [],
};

const basketSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<PizzaItem>) {
      state.basket.push(action.payload);
    },
    setReset(state) {
      state.basket = [];
    },
    setRemove(state, action: PayloadAction<number>) {
      state.basket = state.basket.filter(e => e.id !== action.payload);
    },
    setCountPlus(state, action: PayloadAction<number>) {
      state.basket = state.basket.map(e =>
        e.id === action.payload ? {...e, count: e.count + 1} : e,
      );
    },
    setCountMinus(state, action: PayloadAction<number>) {
      state.basket = state.basket.map(e =>
        e.id === action.payload
          ? {...e, count: e.count < 1 ? 0 : e.count - 1}
          : e,
      );
    },
  },
});

export const {setBasket, setReset, setRemove, setCountPlus, setCountMinus} =
  basketSlice.actions;

export default basketSlice.reducer;
