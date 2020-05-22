import { r as registerInstance, h } from './index-08a100d5.js';

const navCss = "header{background-color:#152614;color:#fff;padding:16px 24px}";

const NavBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("header", null, h("nav", null, "This is the navBar!")));
    }
};
NavBar.style = navCss;

export { NavBar as nav_bar };
