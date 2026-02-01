import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue/server-renderer/index.mjs';
import { Brain, ExternalLink } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useHead } from './v3-0mMLnyVi.mjs';
import './server.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/h3/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/destr/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/hookable/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unstorage/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ohash/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/klona/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/defu/dist/defu.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/scule/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unctx/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/pathe/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unhead/dist/server.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/devalue/index.js';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unhead/dist/utils.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "intelligence",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Intelligence - AI Agents",
      meta: [
        { name: "description", content: "AI agents, multi-agent systems, and autonomous workflows." }
      ]
    });
    const sections = [
      { name: "Agent Frameworks", items: ["CrewAI", "AutoGen", "LangGraph", "LlamaIndex Agents", "Phidata"] },
      { name: "Multi-Agent Systems", items: ["MetaGPT", "ChatDev", "AutoGPT", "SuperAGI", "OpenDevin"] },
      { name: "Autonomous Agents", items: ["BabyAGI", "AgentGPT", "AutoGPT", "GodMode", "Cascade"] },
      { name: "Agent Tools", items: ["Browser Use", "Composio", "Exa Tools", "Serper", "Tavily"] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto space-y-8" }, _attrs))}><div class="flex items-start gap-6"><div class="p-4 bg-amber-500/20 rounded-2xl">`);
      _push(ssrRenderComponent(unref(Brain), { class: "w-10 h-10 text-amber-400" }, null, _parent));
      _push(`</div><div><h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Intelligence</h1><p class="text-gray-400 text-lg"> AI agents, multi-agent systems, and autonomous workflows. </p></div></div><div class="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl"><div class="flex items-center justify-between flex-wrap gap-4"><div><h3 class="text-lg font-semibold text-white mb-1">View Complete Intelligence Catalog</h3><p class="text-gray-400 text-sm">Browse 300+ AI agents and multi-agent systems</p></div><a href="https://github.com/lpatel/awesome-skills/blob/main/resources/intelligence/README.md" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"> View on GitHub `);
      _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
      _push(`</a></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(sections, (section) => {
        _push(`<div class="p-6 bg-space-900 rounded-xl border border-space-800"><h3 class="text-lg font-semibold text-white mb-4">${ssrInterpolate(section.name)}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<span class="px-3 py-1 bg-space-800 text-gray-300 text-sm rounded-full">${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-amber-400">300+</div><div class="text-sm text-gray-400">Agents</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-amber-400">40+</div><div class="text-sm text-gray-400">Frameworks</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-amber-400">15+</div><div class="text-sm text-gray-400">Multi-Agent</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-amber-400">100%</div><div class="text-sm text-gray-400">Active</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/intelligence.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=intelligence-C56lGTeO.mjs.map
