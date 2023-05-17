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
      login: true, // showing login or register page
      isLogedin: true, // dashboard
      dashboardData: { // dashboard data
        products: "",
        orders: "",
        adverts: "",
        banners: "",
        categories: "",
        trends: "",
        offers: "",
        emailList: "",
        FlashMesages: "",
        settings: "",
      },
      OfferMessages: OfferMessagesModel,
      banners: bannersModel,
      categories: categoriesModel,
      products: productsModel,
      onSearch: false,
      searchInputData: "",
      searchListing: [],
      shopFilter: {
        category: "",
        brand: "",
        color: "red",
        price: 0,
        rating: 0,
      },
      details_page: "",
      cart: {
        count: 0,
        products: [],
      },
      checkout: {
        subtotal: 0,
        taxation: 0,
        shipping_fee: 0,
        total: 0,
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
    updateShopFilter(state, action) {
      state.data.shopFilter = action.payload;
    },
    AddToCart(state, action) {
      state.data.cart.products.push(action.payload);
    },
    AddItemToCart(state, action) {
      state.data.cart.products.map(function (item) {
        if (item._id === action.payload._id) {
          item.quantity++;
          item.subprice = item.quantity * item.price;
        }
      });
    },
    updateCartPrices(state, action) {
      state.data.cart.products.map(function (item) {
        //item.quantity
      });
    },
    ReduceItemFromCart(state, action) {
      state.data.cart.products.map(function (item) {
        if (item._id === action.payload._id) {
          if (item.quantity != 1) {
            item.quantity--;
            item.subprice = item.quantity * item.price;
          }
        }
      });
    },
    RefeshCartCount(state) {
      state.data.cart.count = state.data.cart.products.length;
    },
    Cartsubtotal(state) {
      let newarray = [];

      state.data.cart.products.map(function (item) {
        newarray.push(item.subprice);
      });

      state.data.checkout.subtotal = newarray.reduce((total, current) => {
        return total + current;
      }, 0);
    },

    Carttotal(state) {
      state.data.checkout.total =
        state.data.checkout.subtotal +
        state.data.checkout.taxation +
        state.data.checkout.shipping_fee;
    },
    loginState(state, action) {
      state.data.login = action.payload;
    },
    isLogedinState(state, action) {
      state.data.isLogedin = action.payload;
    },
    searchInputData(state, action) {
      state.data.searchInputData = action.payload;
    },
    setOnSearch(state, action) {
      state.data.onSearch = action.payload;
    },
    updateSearchListing(state, action) {
      state.data.searchListing = action.payload;
    },
  },
});

export const constantActions = constantSlice.actions;
export default constantSlice;
