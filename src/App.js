import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddItem from "./screens/AddItem";
import LoginPage from "./pages/LoginPage";
import Settings from "./components/Settings";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./pages/RegisterPage";
import SearchScreen from "./screens/SearchScreen";
import AccountScreen from "./screens/AccountScreen";
import ForgotPassword from "./pages/ForgotPassword";
import ShoppingCardScreen from "./screens/ShoppingCardScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/search" component={SearchScreen} />
        <Route path="/addItem" exact component={AddItem} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/item/:id" exact component={ProductDetailScreen} />
        <Route path="/account" exact component={AccountScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        <Route path="/cart/:id?" exact component={ShoppingCardScreen} />
        <Route path="/settings/id?" exact component={Settings} />
      </Switch>
    </Router>
  );
}
