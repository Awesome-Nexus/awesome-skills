import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Brain, ExternalLink } from 'lucide-vue-next';
import { u as useHead } from './v3-0mMLnyVi.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

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
