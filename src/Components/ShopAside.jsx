import React from "react";
import { useSelector } from "react-redux";

export default function ShopAside() {
  const categories = useSelector((state) => state.constant.data.categories);
  const products = useSelector((state) => state.constant.data.products);

  return (
    <>
      <aside>
        <section className="aside-search-section">
          <span>
            <input type="search" placeholder="Search For Product" />
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
                    <input type="checkbox" name="" id="" /> {item.category}
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
            {products.map(function (item) {
              return (
                <>
                  <span>
                    <input type="checkbox" name="" id="" /> {item.brand}
                    (21)
                  </span>
                </>
              );
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
                    <input key={item._id} type="checkbox" name="" id="" />{" "}
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
