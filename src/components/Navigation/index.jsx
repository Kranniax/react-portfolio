import React from "react";
import { Tabs, Tab } from "@mui/material";

function Navigation(props) {
  const { navItem, setNavItem } = props;

  return (
    <nav className="navbar">
      <Tabs
        value={navItem}
        onChange={(e, newItem) => setNavItem(newItem)}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#f5b700',
            height: 3,
          },
          '& .MuiTab-root': {
            color: '#e5e7eb',
            borderRadius: 1,
            mx: 0.5,
            textTransform: 'none',
            fontWeight: 600,
          },
          '& .Mui-selected': {
            color: '#fff',
            backgroundColor: 'rgba(245, 183, 0, 0.18)',
            boxShadow: 'inset 0 -2px 0 #f5b700',
          },
        }}
      >
        <Tab label="About Me" component="a" />
        <Tab label="Portfolio" component="a" />
        <Tab label="Contact" component="a" />
        <Tab label="Resume" component="a" />
      </Tabs>
    </nav>
  );
}

export { Navigation };
