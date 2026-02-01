import { defineEventHandler } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/h3/dist/index.mjs';

const health_get = defineEventHandler(() => {
  return { status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() };
});

export { health_get as default };
//# sourceMappingURL=health.get.mjs.map
