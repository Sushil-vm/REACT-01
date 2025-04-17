import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: { 

    // Vanialla(older)(in Background BTS ) Redux => Don't Mutate State , returning was mandatory
    // Redux Uses this "IMMER LIBRARY"- it is a small librart created to help developers with 
    // immutable state based on a copy-on-write-mechanism.
    // const newState =[...state];
    // newState.items.push(action.payload);
    // return newState;

    // Redux Toolkit(IMMER LIBRARY-it is a tiny Package that allows you to work with immutable state in a more convenient way)
    // We HAVE to return the new state

    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // state.items.length = 0;
      // Redux ToolKit => Either Mutate the state or return a NEW State

      return{items:[]}; {/*this new object [] will be replaced inside originalState= {items:[]} */}
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
