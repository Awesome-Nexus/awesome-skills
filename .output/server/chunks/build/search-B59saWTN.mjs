import { _ as __nuxt_component_0 } from './nuxt-link-DL2KEPGD.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Search } from 'lucide-vue-next';
import { u as useHead } from './v3-0mMLnyVi.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Search Resources",
      meta: [
        { name: "description", content: "Search through 5,100+ AI development resources including Systems, Kits, Intelligence, Learning, Security, and MCP Links." }
      ]
    });
    const searchQuery = ref("");
    const categories = [
      { name: "Systems", description: "Foundation models, LLMs, multimodal AI", path: "/resources/systems", count: "500+" },
      { name: "Kits", description: "Development frameworks, SDKs, tools", path: "/resources/kits", count: "1,000+" },
      { name: "Intelligence", description: "AI agents and multi-agent systems", path: "/resources/intelligence", count: "300+" },
      { name: "Learning", description: "Courses, tutorials, research papers", path: "/resources/learning", count: "2,000+" },
      { name: "Links", description: "MCP servers and API integrations", path: "/resources/links", count: "60+" },
      { name: "Security", description: "AI safety, guardrails, and protection tools", path: "/resources/security", count: "100+" }
    ];
    const filteredCategories = computed(() => {
      if (!searchQuery.value) return categories;
      const query = searchQuery.value.toLowerCase();
      return categories.filter(
        (cat) => cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto space-y-8" }, _attrs))}><div class="text-center space-y-4"><h1 class="text-3xl md:text-4xl font-bold text-white">Search Resources</h1><p class="text-gray-400"> Find AI development resources across all categories </p></div><div class="relative max-w-2xl mx-auto">`);
      _push(ssrRenderComponent(unref(Search), { class: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }, null, _parent));
      _push(`<input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search for resources, frameworks, models..." class="w-full pl-12 pr-4 py-4 bg-space-900 border border-space-800 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"></div><div class="text-center p-8 bg-space-900/50 rounded-2xl border border-space-800"><div class="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4">`);
      _push(ssrRenderComponent(unref(Search), { class: "w-8 h-8 text-primary-400" }, null, _parent));
      _push(`</div><h2 class="text-xl font-semibold text-white mb-2">Full Search Coming Soon</h2><p class="text-gray-400 mb-4"> We&#39;re indexing all 5,100+ resources for instant search. For now, browse by category below. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(filteredCategories.value, (category) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: category.name,
          to: category.path,
          class: "group p-6 bg-space-900 rounded-xl border border-space-800 hover:border-primary-500/50 transition-all hover:-translate-y-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between mb-2"${_scopeId}><h3 class="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors"${_scopeId}>${ssrInterpolate(category.name)}</h3><span class="text-xs bg-space-800 text-gray-400 px-2 py-1 rounded-full"${_scopeId}>${ssrInterpolate(category.count)}</span></div><p class="text-sm text-gray-400"${_scopeId}>${ssrInterpolate(category.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-white group-hover:text-primary-400 transition-colors" }, toDisplayString(category.name), 1),
                  createVNode("span", { class: "text-xs bg-space-800 text-gray-400 px-2 py-1 rounded-full" }, toDisplayString(category.count), 1)
                ]),
                createVNode("p", { class: "text-sm text-gray-400" }, toDisplayString(category.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-B59saWTN.mjs.map
