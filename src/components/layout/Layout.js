import React from "react";
import classes from "./layout.module.css";
import logo from "../../assets/images/logo.svg";

import Cpu from "../cpu/Cpu";
import Arch from "../Arch";
import Memory from "../memory/Memory";
import Hostname from "../Hostname";
import Platform from "../Platform";
import Uptime from "../Uptime";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <Hostname />
        <Platform />
        <Uptime />
      </header>
      <img src={logo} className={classes.logo} alt="logo" />
      <div>
        <Arch />
        <Cpu />
      </div>
      <Memory />
    </div>
  );
};

export default Layout;
