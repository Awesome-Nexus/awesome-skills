import { _ as __nuxt_component_0 } from "./nuxt-link-DL2KEPGD.js";
import { defineComponent, mergeProps, withCtx, createVNode, resolveDynamicComponent, toDisplayString, openBlock, createBlock, useSSRContext, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { Cpu, Wrench, Brain, BookOpen, Plug, Shield } from "lucide-vue-next";
import { u as useHead } from "./v3-0mMLnyVi.js";
import { _ as _export_sfc } from "../server.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ufo/dist/index.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/@unhead/vue/dist/index.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/hookable/dist/index.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unctx/dist/index.mjs";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/defu/dist/defu.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CategoryCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    to: {},
    icon: {},
    colorClass: {},
    textColorClass: {},
    borderColorClass: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: ["group relative flex flex-col items-center p-6 bg-space-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-space-800 overflow-hidden h-full hover:bg-space-800", __props.borderColorClass]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full text-center mb-6"${_scopeId}><h3 class="${ssrRenderClass([__props.textColorClass, "text-xl font-bold text-white group-hover:text-current transition-colors"])}"${_scopeId}>${ssrInterpolate(__props.title)}</h3></div><div class="flex items-center justify-center relative flex-1"${_scopeId}><div class="${ssrRenderClass([
              "absolute w-32 h-32 rounded-full blur-2xl opacity-20 transition-transform group-hover:scale-110",
              __props.colorClass
            ])}"${_scopeId}></div>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.icon), {
              class: [
                "relative h-20 w-20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 drop-shadow-lg",
                __props.textColorClass
              ],
              "stroke-width": "1.5"
            }, null), _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full text-center mb-6" }, [
                createVNode("h3", {
                  class: ["text-xl font-bold text-white group-hover:text-current transition-colors", __props.textColorClass]
                }, toDisplayString(__props.title), 3)
              ]),
              createVNode("div", { class: "flex items-center justify-center relative flex-1" }, [
                createVNode("div", {
                  class: [
                    "absolute w-32 h-32 rounded-full blur-2xl opacity-20 transition-transform group-hover:scale-110",
                    __props.colorClass
                  ]
                }, null, 2),
                (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
                  class: [
                    "relative h-20 w-20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 drop-shadow-lg",
                    __props.textColorClass
                  ],
                  "stroke-width": "1.5"
                }, null, 8, ["class"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/CategoryCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Awesome Skills - Framework for AI-Powered Development",
      meta: [
        { name: "description", content: "A comprehensive framework for building AI-powered applications. Systems, Kits, Intelligence, Learning, Links, and Security — 5,100+ curated resources." },
        { property: "og:title", content: "Awesome Skills - AI Development Resources" },
        { property: "og:description", content: "The complete resource hub for AI development. 5,100+ resources across Systems, Kits, Intelligence, Learning, Links, and Security." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Awesome Skills - AI Development Resources" },
        { name: "twitter:description", content: "The world's most comprehensive AI development resource hub." }
      ]
    });
    const stats = {
      totalResources: "5,100+",
      models: "200+",
      frameworks: "500+",
      mcpServers: "60+",
      countries: "50+",
      courses: "500+"
    };
    const categories = [
      {
        title: "Systems",
        description: "Foundation models, LLMs, multimodal AI, and core infrastructure.",
        to: "/resources/systems",
        icon: Cpu,
        colorClass: "bg-blue-500/20 text-blue-300",
        textColorClass: "text-blue-300",
        borderColorClass: "hover:border-blue-500/50"
      },
      {
        title: "Kits",
        description: "Development frameworks, SDKs, vector databases, and tools.",
        to: "/resources/kits",
        icon: Wrench,
        colorClass: "bg-emerald-500/20 text-emerald-300",
        textColorClass: "text-emerald-300",
        borderColorClass: "hover:border-emerald-500/50"
      },
      {
        title: "Intelligence",
        description: "AI agents, multi-agent systems, and autonomous workflows.",
        to: "/resources/intelligence",
        icon: Brain,
        colorClass: "bg-amber-500/20 text-amber-300",
        textColorClass: "text-amber-300",
        borderColorClass: "hover:border-amber-500/50"
      },
      {
        title: "Learning",
        description: "Courses, tutorials, research papers, and datasets.",
        to: "/resources/learning",
        icon: BookOpen,
        colorClass: "bg-purple-500/20 text-purple-300",
        textColorClass: "text-purple-300",
        borderColorClass: "hover:border-purple-500/50"
      },
      {
        title: "Links",
        description: "MCP servers, plugins, API integrations, and connectivity.",
        to: "/resources/links",
        icon: Plug,
        colorClass: "bg-rose-500/20 text-rose-300",
        textColorClass: "text-rose-300",
        borderColorClass: "hover:border-rose-500/50"
      },
      {
        title: "Security",
        description: "AI safety, guardrails, prompt injection protection, and alignment.",
        to: "/resources/security",
        icon: Shield,
        colorClass: "bg-cyan-500/20 text-cyan-300",
        textColorClass: "text-cyan-300",
        borderColorClass: "hover:border-cyan-500/50"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CategoryCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-16" }, _attrs))} data-v-419713af><section class="text-center space-y-8 pt-8 pb-12 relative overflow-hidden" data-v-419713af><div class="absolute top-0 right-0 z-20" data-v-419713af><div class="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-500/10 border border-lime-500/20 rounded-bl-lg text-lime-300 text-xs font-medium" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-419713af><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-v-419713af></rect><line x1="16" x2="16" y1="2" y2="6" data-v-419713af></line><line x1="8" x2="8" y1="2" y2="6" data-v-419713af></line><line x1="3" x2="21" y1="10" y2="10" data-v-419713af></line></svg> Last Published: v1.0.0 (February 1, 2026) </div></div><div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-emerald-500/5 to-purple-500/10 blur-[120px] rounded-full pointer-events-none" data-v-419713af></div><div class="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px] animate-pulse" data-v-419713af></div><div class="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse delay-1000" data-v-419713af></div><div class="relative z-10 w-full px-8" data-v-419713af><div class="space-y-6" data-v-419713af><div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-0" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse" data-v-419713af><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" data-v-419713af></path></svg> Curated by Developers, Built for AI Engineers </div><h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white w-full text-center" data-v-419713af><span class="animate-fade-in" data-v-419713af> Awesome Skills </span><br data-v-419713af><span class="animate-slide-up" data-v-419713af> for Everyone! </span></h1><p class="text-xl md:text-2xl text-gray-300 w-full leading-relaxed animate-slide-up delay-200" data-v-419713af> A community curated collection of quality <span class="text-blue-400 font-mono font-medium" data-v-419713af>Systems</span>, <span class="text-emerald-400 font-mono font-medium" data-v-419713af>Kits</span>, <span class="text-amber-400 font-mono font-medium" data-v-419713af>Intelligence</span>, <span class="text-purple-400 font-mono font-medium" data-v-419713af>Learning</span>, <span class="text-rose-400 font-mono font-medium" data-v-419713af>Links</span>, and <span class="text-cyan-400 font-mono font-medium" data-v-419713af>Security</span> resources </p><p class="text-lg text-gray-400 w-full animate-slide-up delay-300" data-v-419713af> For AI developers worldwide across all skill levels. <span class="text-white font-medium" data-v-419713af>5,000+ verified AI resources</span> from 50+ countries — open source and free forever. </p></div><div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up delay-500" data-v-419713af>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/systems",
        class: "group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25 transform-gpu"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-12 transition-transform" data-v-419713af${_scopeId}><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" data-v-419713af${_scopeId}></path><path d="M6.453 15h11.094" data-v-419713af${_scopeId}></path><path d="M8.5 2h7" data-v-419713af${_scopeId}></path></svg> Browse AI Systems `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "group-hover:rotate-12 transition-transform"
              }, [
                createVNode("path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" }),
                createVNode("path", { d: "M6.453 15h11.094" }),
                createVNode("path", { d: "M8.5 2h7" })
              ])),
              createTextVNode(" Browse AI Systems ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources/links",
        class: "flex items-center gap-3 px-6 py-4 border border-rose-600 hover:border-rose-500 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-419713af${_scopeId}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" data-v-419713af${_scopeId}></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" data-v-419713af${_scopeId}></path></svg> Explore MCP Links `);
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
                createVNode("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
                createVNode("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
              ])),
              createTextVNode(" Explore MCP Links ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-slide-up delay-700" data-v-419713af><div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-blue-500/50 transition-colors" data-v-419713af><div class="text-2xl md:text-3xl font-bold text-blue-400" data-v-419713af>${ssrInterpolate(stats.totalResources)}</div><div class="text-sm text-gray-400" data-v-419713af>Total AI Resources</div></div><div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-emerald-500/50 transition-colors" data-v-419713af><div class="text-2xl md:text-3xl font-bold text-emerald-400" data-v-419713af>${ssrInterpolate(stats.models)}</div><div class="text-sm text-gray-400" data-v-419713af>Foundation Models</div></div><div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-amber-500/50 transition-colors" data-v-419713af><div class="text-2xl md:text-3xl font-bold text-amber-400" data-v-419713af>${ssrInterpolate(stats.mcpServers)}</div><div class="text-sm text-gray-400" data-v-419713af>MCP Servers</div></div><div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-rose-500/50 transition-colors" data-v-419713af><div class="text-2xl md:text-3xl font-bold text-rose-400" data-v-419713af>100%</div><div class="text-sm text-gray-400" data-v-419713af>Free &amp; Open Access</div></div></div><div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 animate-slide-up delay-1000" data-v-419713af><div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30" data-v-419713af><span class="text-sky-400 font-bold" data-v-419713af>${ssrInterpolate(stats.frameworks)}</span><span class="text-xs text-gray-500" data-v-419713af>Frameworks &amp; Tools</span></div><div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30" data-v-419713af><span class="text-purple-400 font-bold" data-v-419713af>${ssrInterpolate(stats.courses)}</span><span class="text-xs text-gray-500" data-v-419713af>Courses &amp; Tutorials</span></div><div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30" data-v-419713af><span class="text-orange-400 font-bold" data-v-419713af>${ssrInterpolate(stats.countries)}</span><span class="text-xs text-gray-500" data-v-419713af>Countries Covered</span></div></div></div></section><section data-v-419713af><h2 class="text-2xl font-bold mb-8 text-center text-space-100" data-v-419713af>Browse Categories</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6" data-v-419713af><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(ssrRenderComponent(_component_CategoryCard, mergeProps({
          key: category.title
        }, { ref_for: true }, category), null, _parent));
      });
      _push(`<!--]--></div></section><section class="relative" data-v-419713af><div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-emerald-500/10 to-purple-500/10 blur-3xl rounded-3xl" data-v-419713af></div><div class="relative bg-space-900/50 backdrop-blur-sm rounded-2xl border border-space-800 p-8 md:p-12 text-center" data-v-419713af><div class="max-w-3xl mx-auto space-y-6" data-v-419713af><div class="flex justify-center mb-6" data-v-419713af><div class="p-4 bg-primary-500/20 rounded-2xl" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-400" data-v-419713af><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" data-v-419713af></path><path d="M9 18c-4.51 2-5-2-7-2" data-v-419713af></path></svg></div></div><h2 class="text-3xl md:text-4xl font-bold text-white" data-v-419713af> Open Source &amp; Community Driven </h2><p class="text-lg text-gray-400 leading-relaxed" data-v-419713af> Awesome Skills is completely open source! Help us build the ultimate AI development resource collection. Contribute new tools, frameworks, MCP servers, or suggest improvements. </p><div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4" data-v-419713af><a href="https://github.com/lpatel/awesome-skills" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-primary-500/25" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-419713af><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" data-v-419713af></path><path d="M9 18c-4.51 2-5-2-7-2" data-v-419713af></path></svg> Contribute on GitHub </a><a href="/CONTRIBUTING.md" class="flex items-center gap-3 px-6 py-4 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white rounded-lg font-semibold transition-all hover:scale-105" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-419713af><circle cx="12" cy="12" r="10" data-v-419713af></circle><path d="m9 9 3 3 3-3" data-v-419713af></path><path d="M9 15h6" data-v-419713af></path></svg> View Guidelines </a></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-sm" data-v-419713af><div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg" data-v-419713af><div class="p-2 bg-emerald-500/20 rounded-lg" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400" data-v-419713af><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-v-419713af></path><circle cx="9" cy="7" r="4" data-v-419713af></circle><path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z" data-v-419713af></path></svg></div><div data-v-419713af><div class="font-semibold text-white" data-v-419713af>Community Driven</div><div class="text-gray-400" data-v-419713af>Built by developers, for developers</div></div></div><div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg" data-v-419713af><div class="p-2 bg-blue-500/20 rounded-lg" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400" data-v-419713af><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-v-419713af></path><path d="M9 12l2 2 4-4" data-v-419713af></path></svg></div><div data-v-419713af><div class="font-semibold text-white" data-v-419713af>Always Free</div><div class="text-gray-400" data-v-419713af>Open source forever</div></div></div><div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg" data-v-419713af><div class="p-2 bg-purple-500/20 rounded-lg" data-v-419713af><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400" data-v-419713af><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z" data-v-419713af></path></svg></div><div data-v-419713af><div class="font-semibold text-white" data-v-419713af>Continuously Updated</div><div class="text-gray-400" data-v-419713af>Fresh resources added regularly</div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-419713af"]]);
export {
  index as default
};
//# sourceMappingURL=index-6A0CaQHw.js.map
