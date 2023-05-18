import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomeV1 from "../components/home-v1";
import Property from "../components/property";
import PropertyDetails from "../components/property-details";
import About from "../components/about";
import Advisor from "../components/advisor";
import Pricing from "../components/pricing";
import UserList from "../components/user-list";
import Registraion from "../components/registration";
import Error from "../components/error";
import Faq from "../components/faq";
import News from "../components/news";
import NewsDetails from "../components/news-details";
import Contact from "../components/contact";
import SearchMap from "../components/search-map";
import SearchGrid from "../components/search-grid";
import SearchList from "../components/search-list";
import AddNew from "../components/add-property";
import { useSelector } from "react-redux";

const Index = () => {
  const isLoggedIn = useSelector((state) => state.customer.data.isLoggedIn);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeV1} />
          <Route path="/property" component={Property} />
          <Route path="/property-details/:slug" component={PropertyDetails} />
          <Route path="/about" component={About} />
          <Route path="/advisor" component={Advisor} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/user-list" component={UserList} />
          <Route path="/registration" component={Registraion}>
            {isLoggedIn ? <Redirect to="/" /> : <Registraion />}
          </Route>
          <Route path="/faq" component={Faq} />
          <Route path="/news" component={News} />
          <Route path="/news-details" component={NewsDetails} />
          <Route path="/contact" component={Contact} />
          <Route path="/search-map" component={SearchMap} />
          <Route path="/search-grid" component={SearchGrid} />
          <Route path="/search-list" component={SearchList} />
          <Route path="/add-property" component={AddNew} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default Index;
