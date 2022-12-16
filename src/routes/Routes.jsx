import React from "react";

import { Route, Switch } from "react-router-dom";
import { Blog } from "../pages/Blog";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Post_1 from "../pages/Post/Post_1";
import Post_2 from "../pages/Post/Post_2";
import Post_3 from "../pages/Post/Post_3";
import BlogDetail  from "../pages/Blog/BlogDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/blog" component={Blog} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/post1" component={Post_1} />
      <Route path="/post2" component={Post_2} />
      <Route path="/post3" component={Post_3} />

      <Route path="/blogdetail" component={BlogDetail} />

    </Switch>
  );
};

export default Routes;
