import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Wrench, ExternalLink } from 'lucide-vue-next';
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
import 'better-sqlite3';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "kits",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Kits - AI Development Tools",
      meta: [
        { name: "description", content: "Development frameworks, SDKs, vector databases, and AI tools." }
      ]
    });
    const sections = [
      { name: "Frameworks", items: ["LangChain", "LlamaIndex", "Haystack", "Semantic Kernel", "CrewAI"] },
      { name: "Vector Databases", items: ["Pinecone", "Weaviate", "Chroma", "Qdrant", "Milvus", "pgvector"] },
      { name: "AI Infrastructure", items: ["Ollama", "LiteLLM", "vLLM", "Text Generation Inference"] },
      { name: "Development Tools", items: ["OpenAI SDK", "Anthropic SDK", "Hugging Face", "Modal", "Banana"] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto space-y-8" }, _attrs))}><div class="flex items-start gap-6"><div class="p-4 bg-emerald-500/20 rounded-2xl">`);
      _push(ssrRenderComponent(unref(Wrench), { class: "w-10 h-10 text-emerald-400" }, null, _parent));
      _push(`</div><div><h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Kits</h1><p class="text-gray-400 text-lg"> Development frameworks, SDKs, vector databases, and tools. </p></div></div><div class="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"><div class="flex items-center justify-between flex-wrap gap-4"><div><h3 class="text-lg font-semibold text-white mb-1">View Complete Kits Catalog</h3><p class="text-gray-400 text-sm">Browse 500+ frameworks, SDKs, and development tools</p></div><a href="https://github.com/lpatel/awesome-skills/blob/main/resources/kits/README.md" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"> View on GitHub `);
      _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
      _push(`</a></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(sections, (section) => {
        _push(`<div class="p-6 bg-space-900 rounded-xl border border-space-800"><h3 class="text-lg font-semibold text-white mb-4">${ssrInterpolate(section.name)}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<span class="px-3 py-1 bg-space-800 text-gray-300 text-sm rounded-full">${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-emerald-400">500+</div><div class="text-sm text-gray-400">Tools</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-emerald-400">50+</div><div class="text-sm text-gray-400">Frameworks</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-emerald-400">20+</div><div class="text-sm text-gray-400">Vector DBs</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-emerald-400">100%</div><div class="text-sm text-gray-400">Open Source</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/kits.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=kits-Ci4mCiF2.mjs.map
