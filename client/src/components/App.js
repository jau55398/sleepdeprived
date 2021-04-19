import React from "react";
import "./App.css";
import AppButtons from "./AppButtons";
// images
import Sleepdeprived from "./images/sd_logo.png";
import Temp from "./images/temp_photos.png";
import Temp1 from "./images/temp_photos1.png";
// pages
import Shop from "./views/ShopPage/Shop";
import About from "./views/AboutPage/About";
import Contact from "./views/ContactPage/Contact";
import Terms from "./views/TermsPage/Terms";
import Tracking from "./views/TrackingPage/Tracking";
import Cart from "./views/CartPage/Cart";
import { Link } from 'react-router-dom';
import UploadProductPage from './views/UploadProductPage/UploadProduct'
import Auth from "../hoc/auth";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ProductPage from "./views/ProductPage/ProductPage"
// admin dashboard
import Dashboard from './views/Dashboard/Dashboard'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*Currently contains the Search, Currency, logo,
log in, create account, cart, and calls all the buttons
that are in the AppButtons.js file*/
function App() {
  return (

    <Router>
      <Dashboard />
      <div className="app">
        <div className="toppadding">
          

          {/*Buttons for login, create account, and cart*/}
          
          {/*End of code for the login, create account, and cart buttons*/}

          {/*Logo that is located on the top left of the screen*/}
          <div className="logopadding">
            <Link to='/'>
              <img src={Sleepdeprived} alt="Logo" width="350" height="auto" />
            </Link>
          </div>
          {/*End of code*/}

        </div> {/*End of div for toppadding class*/}

        <AppButtons /> {/*Calls AppButtons.js*/}

        {/*Part of the code for making the all the buttons to go to links*/}

        <Switch>
          <Route exact path="/" component={Auth(Home, null)} /> 
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/tracking" component={Tracking} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, null)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/:productId" component={Auth(ProductPage, null)} />
          <Route exact path="/cart" component={Auth(Cart, true)} />
        </Switch>
        
        {/*End of code*/}

      </div> {/*End div for app class*/}

    </Router>
  );
}

/*What is displayed in the homescreen*/
const Home = () => (
  <div>
    <div className="homeimg">
      <img src={Temp} alt="temp_photo1" />
      <img src={Temp1} alt="temp_photo1" />
    </div>
  </div>
  /*End of code*/

);

export default App;
