import React from "react";
import css from "./Toolbar.module.css";
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
function Toolbar(props) {
  return (
    <header className={css.Toolbar}>
      <HamburgerMenu toggleSidebar={props.toggleSidebar}/>
      <Logo link="/" />
      <nav className={css.HideoOnMobile}>
        <Menu />
      </nav>
    </header>
  );
}

export default Toolbar;
