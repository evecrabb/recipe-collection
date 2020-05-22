import { r as registerInstance, h } from './index-5a8922dc.js';
var navCss = "header{background-color:#152614;color:#fff;padding:16px 24px}";
var NavBar = /** @class */ (function () {
    function NavBar(hostRef) {
        registerInstance(this, hostRef);
    }
    NavBar.prototype.render = function () {
        return (h("header", null, h("nav", null, "This is the navBar!")));
    };
    return NavBar;
}());
NavBar.style = navCss;
export { NavBar as nav_bar };
