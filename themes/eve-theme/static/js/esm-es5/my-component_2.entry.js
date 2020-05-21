import { r as registerInstance, h } from './index-5a8922dc.js';
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var myComponentCss = ":host{display:block}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.getText());
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
var navCss = "";
var NavBar = /** @class */ (function () {
    function NavBar(hostRef) {
        registerInstance(this, hostRef);
    }
    NavBar.prototype.render = function () {
        return (h("footer", null, "This is the footer"));
    };
    return NavBar;
}());
NavBar.style = navCss;
export { MyComponent as my_component, NavBar as nav_bar };
