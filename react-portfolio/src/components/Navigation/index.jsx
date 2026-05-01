import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

function Navigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav className="navbar">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="About Me" href="#about" component="a" />
        <Tab label="Portfolio" href="#portfolio" component="a" />
        <Tab label="Contact" href="#contact" component="a" />
        <Tab label="Resume" href="#resume" component="a" />
      </Tabs>
    </nav>
  );
}

export { Navigation };
