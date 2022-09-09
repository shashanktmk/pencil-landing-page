import React from "react";
export function SideNav() {
  return (
    <header>
      <nav>
        <div className="links">
          <li className="link-items">Logo</li>
          <li className="link-items">Pencil Communities</li>

          <li className="link-items">Search Communities</li>
          <li className="link-items">Login</li>
          {/* <li className="link-items"></li> */}
        </div>
      </nav>
    </header>
  );
}
