import { createSlice } from "@reduxjs/toolkit";
import productsModel from "../Assets/model/products.json";
import bannersModel from "../Assets/model/banners.json";
import categoriesModel from "../Assets/model/categories.json";
import OfferMessagesModel from "../Assets/model/OfferMessages.json";

const constantSlice = createSlice({
  name: "constant",
  initialState: {
    logo: { nav: "nav.png", browserTab: "" },
    companyTitle: "jumbo.com",
    currentPageTitle: "",
    currentPage: "",
    data: {
      OfferMessages: OfferMessagesModel,
      banners: bannersModel,
      categories: categoriesModel,
      products: productsModel,
      details_page: "",
      cart: {
        count: 0,
        products: [],
      },
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
    updateDetailsPage(state, action) {
      state.data.details_page = action.payload;
    },
    AddToCart(state, action) {
      console.log(action.payload);
    },
    RefeshCartCount(state) {
      state.data.cart.count = state.data.cart.products.length;
    },
  },
});

export const constantActions = constantSlice.actions;
export default constantSlice;
