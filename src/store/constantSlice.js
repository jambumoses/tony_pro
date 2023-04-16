import { createSlice } from "@reduxjs/toolkit";
import productsModel from "../Assets/model/products.json";

const constantSlice = createSlice({
  name: "constant",
  initialState: {
    logo: { nav: "", browserTab: "" },
    companyTitle: "jumbo.com",
    currentPageTitle: "",
    currentPage: "",
    data: {
      products: productsModel,
    },
  },
  reducers: {
    updateConstants(state, action) {
      state.data = action.payload;
    },
    updatePageTitles(state, action) {
      state.currentPageTitle = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const constantActions = constantSlice.actions;
export default constantSlice;