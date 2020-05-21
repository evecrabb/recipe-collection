import { a as patchEsm, b as bootstrapLazy } from './index-5a8922dc.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"nav-bar"]]]], options);
});

export { defineCustomElements };
