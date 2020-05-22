import { a as patchEsm, b as bootstrapLazy } from './index-5a8922dc.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]], ["nav-bar", [[1, "nav-bar"]]]], options);
}); };
export { defineCustomElements };
