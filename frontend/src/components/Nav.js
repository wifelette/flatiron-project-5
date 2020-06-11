import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      {/* Sidebar  */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand  */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Schedule</div>
        </a>

        {/* Divider  */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard  */}
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Divider  */}
        <hr className="sidebar-divider" />

        {/* Nav Item - Kiddos Collapse Menu  */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseKids"
            aria-expanded="true"
            aria-controls="collapseKids"
          >
            <i className="fas fa-fw fa-user"></i>
            <span>Kiddos</span>
          </a>
          <div
            id="collapseKids"
            className="collapse"
            aria-labelledby="headingKids"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Your Kiddos:</h6>  */}
              <a className="collapse-item" href="Kiddo1.html">
                Child 1
              </a>
              <a className="collapse-item" href="Kiddo2.html">
                Child 2
              </a>
            </div>
          </div>
        </li>

        {/* Nav Item - Activites  */}
        <li className="nav-item">
          <Link to="/activities" className="nav-link a">
            <i className="fas fa-fw fa-bicycle"></i>
            <span>Activities</span>
          </Link>
        </li>

        {/* Nav Item - Materials  */}
        <li className="nav-item">
          <Link to="/materials" className="nav-link a">
            <i className="fas fa-fw fa-shopping-cart"></i>
            <span>Materials</span>
          </Link>
        </li>

        {/* Divider  */}
        <hr className="sidebar-divider d-none d-md-block" />

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
