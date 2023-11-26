import React from "react";

import Searchbar from "./Searchbar";
import Location from "./Location";

function Topbar() {
  return (
    <nav className="topbar">
      <Location />
      <Searchbar />
    </nav>
  );
}

export default Topbar;
