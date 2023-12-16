import React from "react";

import Searchbar from "./Searchbar";

function Topbar() {
  return (
    <nav className="topbar">
      <p className="capitalize text-dark-1 text-body-normal text-center max-xs:hidden">
        Inbox
      </p>
      <Searchbar />
    </nav>
  );
}

export default Topbar;
