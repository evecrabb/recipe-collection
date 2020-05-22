'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bdeac204.js');

const navCss = "header{background-color:#152614;color:#fff;padding:16px 24px}";

const NavBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("header", null, index.h("nav", null, "This is the navBar!")));
    }
};
NavBar.style = navCss;

exports.nav_bar = NavBar;
