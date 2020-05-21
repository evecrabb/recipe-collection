import { Component, h } from '@stencil/core';
export class NavBar {
    render() {
        return (h("footer", null, "This is the footer"));
    }
    static get is() { return "nav-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["nav.css"]
    }; }
}
