import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "../store/constantSlice";

export default function ShopAside() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.constant.data.categories);
  const products = useSelector((state) => state.constant.data.products);
  const filter = useSelector((state) => state.constant.data.shopFilter);

  /* filters checkbox */
  //const [searchInput, setSearchInput] = useState("");
  const searchInputData = useSelector(state=>state.constant.data.searchInputData);

  const [categoryCheckBox, setCategoryCheckBox] = useState("on");
  const [brandsCheckBox, setBrandsCheckBox] = useState("");
  const [colorCheckBox, setColorCheckBox] = useState("");

  if (searchInputData === "") {
    dispatch(constantActions.setOnSearch(false));
  }

  function handleSearch(e) {
    if (searchInputData.length > 0) {
      dispatch(constantActions.setOnSearch(true));
    } else {
      dispatch(constantActions.setOnSearch(false));
    }

    // update search input
    dispatch(constantActions.searchInputData(e.target.value));
    //setSearchInput(e.target.value);
  }

  return (
    <>
      <aside>
        {/* search section */}
        <section className="aside-search-section">
          <span>
            <input
              value={searchInputData}
              onChange={handleSearch}
              type="search"
              placeholder="Search For Product"
            />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </span>
        </section>

        <section className="filter-container">
          <header>categories</header>
          <div className="filter-list">
            {categories.map(function (item) {
              return (
                <>
                  <span>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      /* onChange={(e) => setCategoryCheckBox(e.target.value)} */
                      checked={item.category === filter.category && "off"}
                    />
                    {item.category}
                    (21)
                  </span>
                </>
              );
            })}
          </div>
        </section>

        <section className="filter-container">
          <header>brands</header>
          <div className="filter-list">
            {/*
              display all brands by default
              picked from products
              if category is not set
          */}

            {filter.category === "" &&
              filter.brand === "" &&
              products.map(function (item) {
                return (
                  <>
                    <span>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={item.brand === filter.brand && true}
                      />{" "}
                      {item.brand}
                      (21)
                    </span>
                  </>
                );
              })}

            {/*
              display specific brands list
              from the specific category
              if filter is set
          */}

            {filter.category !== "" &&
              categories.map(function (item) {
                {
                  if (item.category === "headsets") {
                    item.subcategories.map(function (subitem) {
                      return (
                        <span key={subitem._id}>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={subitem.name === filter.brand && true}
                          />{" "}
                          {subitem.name}
                          (21)
                        </span>
                      );
                    });
                  }
                }
              })}
          </div>
        </section>

        <section className="filter-container">
          <header>colors</header>
          <div className="filter-list">
            {products.map(function (item) {
              return (
                <>
                  <span>
                    <input
                      key={item._id}
                      type="checkbox"
                      name=""
                      id=""
                      checked={item.color === filter.color && true}
                    />{" "}
                    {item.color}
                    (21)
                  </span>
                </>
              );
            })}
          </div>
        </section>
      </aside>
    </>
  );
}
