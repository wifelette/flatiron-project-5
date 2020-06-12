import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import NavItem from "./NavItem";
import Logo from "./Logo";

export default function Nav() {
  return (
    <div>
      {/* Sidebar  */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand  */}
        <Logo />

        <Divider />

        <NavItem route="/" icon="tachometer-alt">
          Dashboard
        </NavItem>

        <Divider />

        <NavItem route="/activities" icon="bicycle">
          Activities
        </NavItem>

        <NavItem route="/materials" icon="shopping-cart">
          Materials
        </NavItem>

        <Divider />

        {/* Sidebar Toggler (Sidebar)  */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
      {/* End of Sidebar  */}
    </div>
  );
}
