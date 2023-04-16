import { createSlice } from "@reduxjs/toolkit";

const constantSlice = createSlice({
  name: "constant",
  initialState: {
    logo: { nav: "", browserTab: "" },
    companyTitle: "jumbo.com",
    currentPageTitle: "",
    currentPage: "",
    data: {
      products: [
        {
          _id: "124",
          title: "Acer Aspire R3",
          category: "",
          description: "Premuim Quad Core 4th Gen14 GB/500 GB HDD/Win00 ",
          assets: {
            url: "ankush-minda-B5x5AyOV3XA-unsplash-removebg-preview.png",
            images: [],
          },
          rating: 5,
          price: "$ 2,050",
        },
      ],
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
