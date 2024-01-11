import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

function findIndex(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) return i;
    }
    return null;
  }

export const BlogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    saveAllBlogs: (state, action) => {
      return action.payload;
    },
    incrementQuantity: (state, action) => {
      let { id } = action.payload;
      let index = findIndex(state, id);
      if (index !== null) {
        state[index].quantity = (state[index].quantity || 1) + 1;
      }
    },
    decrementQuantity: (state, action) => {
      let { id } = action.payload;
      let index = findIndex(state, id);
      if (index !== null && state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },
    removeProduct: (state, action) => {
  const { id } = action.payload;
  return state.filter((product) => product.id !== id);
},
  },
});

export const { saveAllBlogs, incrementQuantity, decrementQuantity,removeProduct} = BlogSlice.actions;
export default BlogSlice.reducer;
