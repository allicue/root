import React from "react";
import Footer from "../Footer/Footer";
import Burger from "../Header/Burger";
const Layout = (props) => (
  <div className="layout">
    <Burger />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
