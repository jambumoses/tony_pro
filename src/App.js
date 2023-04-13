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

function App() {
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
