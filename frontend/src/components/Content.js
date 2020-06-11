import React from "react";
import Routes from "./Routes";
import HeaderBar from "./HeaderBar";
// import HeaderBar from "./HeaderBar";

export default function Content() {
  return (
    <div id="content">
      <nav className="navbar navbar-expand mb-4 static-top"></nav>
      <HeaderBar />
      <Routes />
    </div>
  );
}
