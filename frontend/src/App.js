import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import action1 from "./actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* Page Wrapper */}
      <div id="wrapper">
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
            <a className="nav-link" href="activities.html">
              <i className="fas fa-fw fa-bicycle"></i>
              <span>Activities</span>
            </a>
          </li>

          {/* Nav Item - Materials  */}
          <li className="nav-item">
            <a className="nav-link" href="materials.html">
              <i className="fas fa-fw fa-shopping-cart"></i>
              <span>Materials</span>
            </a>
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

        {/* Content Wrapper  */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content  */}
          <div id="content">
            {/* Topbar  */}
            <nav className="navbar navbar-expand mb-4 static-top"></nav>
            {/* End of Topbar  */}

            {/* Begin Page Content  */}
            <div
              className="container-fluid whole-page"
              style={{ paddingRight: "0px" }}
            >
              {/* Page Heading and New Button  */}
              <h1 className="h3 mb-4 text-gray-800 col-xl-10">
                {"options.name"}
                <button
                  type="button"
                  className="btn btn-outline-success float-right shadow"
                >
                  {"options.button"}
                </button>
                {/* TODO: Create the FilterButton component and turn this on */}
                {/* <FilterButton filter={"options.filter"} /> */}
              </h1>
            </div>

            {/* /.container-fluid  */}
            <template></template>
          </div>
          {/* End of Main Content  */}

          {/* Footer  */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Leah Silber 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer  */}
        </div>
        {/* End of Content Wrapper  */}
      </div>
      {/* End of Page Wrapper  */}

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;
