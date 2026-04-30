// import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

function Navigation(props) {
  const { navItem, setNavItem } = props;

  return (
    <nav className="navbar">
      <Tabs value={navItem} onChange={(e, newItem) => setNavItem(newItem)}>
        <Tab label="About Me" component="a" />
        <Tab label="Portfolio" component="a" />
        <Tab label="Contact" component="a" />
        <Tab label="Resume" component="a" />
      </Tabs>
    </nav>
  );
}

export { Navigation };
