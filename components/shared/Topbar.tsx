import React from "react";

import Searchbar from "./Searchbar";

function Topbar() {
  return (
    <nav className="topbar  max-md:hidden">
      <p className="capitalize text-dark-1 text-body-normal text-center">
        Inbox
      </p>
      <Searchbar />
    </nav>
  );
}

export default Topbar;
