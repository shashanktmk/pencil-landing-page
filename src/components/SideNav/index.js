import React from "react";
import "./index.css";
export function SideNav() {
  return (
    <header>
      <nav>
        <div className="links">
          <li className="link-items">Logo</li>
          <li className="link-items">Pencil Communities</li>

          <li className="link-items search">
            &#x1F50E;&#xFE0E; Search Communities
          </li>
          <li className="link-items login">Login</li>
          {/* <li className="link-items"></li> */}
        </div>
      </nav>
    </header>
  );
}
