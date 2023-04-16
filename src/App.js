/* imports */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* components */
import Footer from "./Components/Footer";
import Header from "./Components/Header";

/* pages */
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

/* styles */
import "./Styles/main.css";
import Shop from "./Pages/Shop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

function App() {
  const dispatch = useDispatch();

  const browserIcons = useSelector((state) => state.constant.logo.browserTab);
  //const currentPage = useSelector((state) => state.constant.currentPage);
  const PageTitles = useSelector((state) => state.constant.currentPageTitle);

  useEffect(() => {
    /* Browser icons */
    $("#browser-icons").attr("href", browserIcons);

    // updating page titles
    $("#app-title").text(PageTitles);
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
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          {/* 404 */}
          <Route path="*" component={Home} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
