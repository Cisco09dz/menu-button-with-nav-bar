import React, { useState } from "react";
import {
  AppBar,
  Button,
  MenuItem,
  Toolbar,
  Typography,
  rgbToHex,
  Tabs,
  Tab,
} from "@mui/material";
import { Menu } from "@mui/material";

function Test() {
  const [anchorElm, setanchorElm] = useState(null);
  const [open, setopen] = useState(false);
  const handelClose = () => {
    setanchorElm(null);
    setopen(false);
  };
  const afro = (e) => {
    setanchorElm(e.currentTarget);
    setopen(true);
  };
  return (
    <>
      <div>
        <AppBar>
          <Toolbar>
            <Button variant="contained" onClick={afro}>
              {" "}
              open list
            </Button>

            <Menu anchorEl={anchorElm} open={open} onClose={handelClose}>
              <MenuItem onClick={handelClose}>profile</MenuItem>
              <MenuItem onClick={handelClose}>anythin</MenuItem>
              <MenuItem onClick={handelClose}>what else</MenuItem>
            </Menu>
            <Button sx={{ marginLeft: "auto" }}>LOGIN</Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Test;
