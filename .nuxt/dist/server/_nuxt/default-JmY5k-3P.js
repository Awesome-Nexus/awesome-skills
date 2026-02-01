import { _ as __nuxt_component_0 } from "./nuxt-link-DL2KEPGD.js";
import { defineComponent, mergeProps, useSSRContext, computed, createVNode, resolveDynamicComponent, unref, ref, watch, withCtx, openBlock, createBlock, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Code, Database, Search, X, Menu, ChevronDown, ArrowLeft, ArrowRight, ExternalLink, Github, Shield, Plug, BookOpen, Brain, Wrench, Cpu } from "lucide-vue-next";
import { u as useRoute, a as __nuxt_component_3 } from "../server.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ufo/dist/index.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/hookable/dist/index.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unctx/dist/index.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/defu/dist/defu.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppLogo",
  __ssrInlineRender: true,
  props: {
    alt: { default: "Awesome Skills Logo" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "h-full w-full",
        "aria-label": __props.alt
      }, _attrs))}><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><defs><linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6"></stop><stop offset="50%" stop-color="#8b5cf6"></stop><stop offset="100%" stop-color="#06b6d4"></stop></linearGradient></defs><path d="M24 4 L42 14 L42 34 L24 44 L6 34 L6 14 Z" fill="url(#logoGrad)" opacity="0.2" stroke="url(#logoGrad)" stroke-width="2"></path><path d="M24 10 L36 17 L36 31 L24 38 L12 31 L12 17 Z" fill="url(#logoGrad)"></path><circle cx="24" cy="24" r="3" fill="white"></circle><path d="M24 21 L24 14 M24 27 L24 34 M21 24 L14 24 M27 24 L34 24" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M19 19 L16 16 M29 19 L32 16 M19 29 L16 32 M29 29 L32 32" stroke="white" stroke-width="1" stroke-linecap="round" opacity="0.7"></path></svg></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppLogo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    size: { default: 24 },
    class: {},
    strokeWidth: { default: 2 }
  },
  setup(__props) {
    const props = __props;
    const icons = {
      cpu: Cpu,
      wrench: Wrench,
      brain: Brain,
      book: BookOpen,
      plug: Plug,
      shield: Shield,
      github: Github,
      external: ExternalLink,
      "arrow-right": ArrowRight,
      "arrow-left": ArrowLeft,
      "chevron-down": ChevronDown,
      menu: Menu,
      close: X,
      search: Search,
      database: Database,
      code: Code
    };
    const iconComponent = computed(() => icons[props.name] || Cpu);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(iconComponent)), mergeProps({
        size: __props.size,
        "stroke-width": __props.strokeWidth,
        class: __props.class
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    watch(() => useRoute().path, () => {
      mobileMenuOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppLogo = _sfc_main$2;
      const _component_Icon = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-space-950 text-space-100 font-mono selection:bg-primary-500 selection:text-white" }, _attrs))}><header class="border-b border-space-800 bg-space-900/50 backdrop-blur-md sticky top-0 z-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-10 w-10 relative"${_scopeId}><div class="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_AppLogo, { class: "relative z-10 text-primary-400 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all" }, null, _parent2, _scopeId));
            _push2(`</div><span class="text-2xl font-bold text-primary-400 tracking-tight"${_scopeId}> Awesome Skills </span>`);
          } else {
            return [
              createVNode("div", { class: "h-10 w-10 relative" }, [
                createVNode("div", { class: "absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" }),
                createVNode(_component_AppLogo, { class: "relative z-10 text-primary-400 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all" })
              ]),
              createVNode("span", { class: "text-2xl font-bold text-primary-400 tracking-tight" }, " Awesome Skills ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex gap-6 items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/search",
        class: "flex items-center gap-2 px-3 py-1.5 bg-space-800 hover:bg-space-700 text-gray-300 hover:text-white rounded-lg transition-colors text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "search",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="hidden lg:inline"${_scopeId}>Search</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "search",
                class: "w-4 h-4"
              }),
              createVNode("span", { class: "hidden lg:inline" }, "Search")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><circle cx="12" cy="12" r="10"${_scopeId}></circle><path d="M12 16v-4"${_scopeId}></path><path d="M12 8h.01"${_scopeId}></path></svg> About `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("circle", {
                  cx: "12",
                  cy: "12",
                  r: "10"
                }),
                createVNode("path", { d: "M12 16v-4" }),
                createVNode("path", { d: "M12 8h.01" })
              ])),
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/lpatel/awesome-skills" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium" title="View on GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> GitHub </a></nav><button class="md:hidden p-2 rounded-lg hover:bg-space-800 transition-colors">`);
      if (!unref(mobileMenuOpen)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden border-t border-space-800 bg-space-900/95 backdrop-blur-md"><nav class="px-4 py-4 space-y-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/search",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: "flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-space-800 rounded-lg transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "search",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Search Resources</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "search",
                  class: "w-5 h-5"
                }),
                createVNode("span", null, "Search Resources")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: "flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-space-800 rounded-lg transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><circle cx="12" cy="12" r="10"${_scopeId}></circle><path d="M12 16v-4"${_scopeId}></path><path d="M12 8h.01"${_scopeId}></path></svg><span${_scopeId}>About</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                  }),
                  createVNode("path", { d: "M12 16v-4" }),
                  createVNode("path", { d: "M12 8h.01" })
                ])),
                createVNode("span", null, "About")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="https://github.com/lpatel/awesome-skills" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-space-800 rounded-lg transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg><span>GitHub</span></a></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main><footer class="border-t border-space-800 py-12 mt-16 bg-space-900/50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"><div class="space-y-4"><div class="flex items-center gap-3"><div class="h-8 w-8">`);
      _push(ssrRenderComponent(_component_AppLogo, null, null, _parent));
      _push(`</div><span class="text-xl font-bold text-white">Awesome Skills</span></div><p class="text-gray-400 text-sm leading-relaxed"> Curated AI development resources for Systems, Kits, Intelligence, Learning, Links, and Security. </p></div><div class="space-y-4"><h3 class="text-white font-semibold">Quick Links</h3><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/systems",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Systems`);
          } else {
            return [
              createTextVNode("Systems")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/kits",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kits`);
          } else {
            return [
              createTextVNode("Kits")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/intelligence",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Intelligence`);
          } else {
            return [
              createTextVNode("Intelligence")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/learning",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learning`);
          } else {
            return [
              createTextVNode("Learning")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/links",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Links`);
          } else {
            return [
              createTextVNode("Links")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/security",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Security`);
          } else {
            return [
              createTextVNode("Security")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-4"><h3 class="text-white font-semibold">Connect</h3><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/search",
        class: "block text-gray-400 hover:text-primary-400 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Search`);
          } else {
            return [
              createTextVNode("Search")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/lpatel/awesome-skills" target="_blank" rel="noopener noreferrer" class="block text-gray-400 hover:text-primary-400 transition-colors text-sm">GitHub Repository</a></div></div></div><div class="border-t border-space-800 pt-8 space-y-4 text-center"><div class="flex items-center justify-center gap-2 text-sm text-gray-500"><span>Built with</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-red-400"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>and dedication to AI</span></div><p class="text-gray-500 text-sm">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Awesome Skills. Empowering AI developers worldwide.</p><p class="text-gray-500 text-xs mt-2">Last Published: v1.0.0 (February 1, 2026)</p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-JmY5k-3P.js.map
