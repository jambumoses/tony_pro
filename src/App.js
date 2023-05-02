/* imports */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* components */
import Footer from "./Components/Footer";
import Header from "./Components/Header";

/* pages */
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
import Shop from "./Pages/Shop";

/* styles */
import "./Styles/main.css";

/* imports */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

/* react rudex store */
import { constantActions } from "./store/constantSlice";

function App() {
  const dispatch = useDispatch();

  const browserIcons = useSelector((state) => state.constant.logo.browserTab);
  const currentPage = useSelector((state) => state.constant.currentPage);
  const PageTitles = useSelector((state) => state.constant.currentPageTitle);

  useEffect(() => {
    /* Browser icons */
    $("#browser-icons").attr("href", browserIcons);

    // updating page titles
    $("#app-title").text(PageTitles);

    /* updating cart count */
    dispatch(constantActions.RefeshCartCount());
    /* update cart subtotals */
    dispatch(constantActions.Cartsubtotal());
    /* update cart total */
    dispatch(constantActions.Carttotal());
    /* update cart subtotals */
    dispatch(constantActions.Cartsubtotal());
  });

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/index" component={Home} />

          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={Account} />

          {/* 404 */}
          <Route path="*" component={Home} />
        </Switch>

        {
        currentPage !== "Dashboard" &&
        currentPage !== "dashboard" &&
        currentPage !== "dash-products" &&
        currentPage !== "dash-orders" &&
        currentPage !== "dash-adverts" &&
        currentPage !== "dash-banners" &&
        currentPage !== "dash-categories" &&
        currentPage !== "dash-trends" && 
        currentPage !== "dash-offers" &&
        currentPage !== "dash-emails" &&
        currentPage !== "dash-flash-messages" &&
        currentPage !== "dash-settings" 
        
        
        && <Footer />}
      </Router>
    </>
  );
}

export default App;
