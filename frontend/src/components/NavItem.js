import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.to
 */
export default function NavItem({ children, to }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link a">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>{children}</span>
      </Link>
    </li>
  );
}
