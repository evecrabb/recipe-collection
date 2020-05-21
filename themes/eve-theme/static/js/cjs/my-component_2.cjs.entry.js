'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bdeac204.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", null, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

const navCss = "";

const NavBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("footer", null, "This is the footer"));
    }
};
NavBar.style = navCss;

exports.my_component = MyComponent;
exports.nav_bar = NavBar;
