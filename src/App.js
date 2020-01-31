import React from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={ProductsList}></Route>
          <Route exact path="/products/new" component={NewProduct}></Route>
          <Route
            exact
            path="/products/edit/:id"
            component={EditProduct}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
