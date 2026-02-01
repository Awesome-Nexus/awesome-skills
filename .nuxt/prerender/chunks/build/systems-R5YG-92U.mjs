import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue/server-renderer/index.mjs';
import { Cpu, ExternalLink } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
  __name: "systems",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Systems - AI Foundation Models",
      meta: [
        { name: "description", content: "Foundation models, LLMs, multimodal AI, and core AI infrastructure." }
      ]
    });
    const sections = [
      { name: "Large Language Models", items: ["GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Llama 3.3", "DeepSeek V3", "Mistral Large"] },
      { name: "Multimodal & Vision", items: ["GPT-4V", "Claude 3 Vision", "Gemini Vision", "LLaVA", "Stable Diffusion 3"] },
      { name: "Embedding Models", items: ["text-embedding-3", " voyage-3", "e5-mistral", "BGE-M3"] },
      { name: "Model Providers", items: ["OpenAI", "Anthropic", "Google AI", "Groq", "Together AI", "Fireworks"] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto space-y-8" }, _attrs))}><div class="flex items-start gap-6"><div class="p-4 bg-blue-500/20 rounded-2xl">`);
      _push(ssrRenderComponent(unref(Cpu), { class: "w-10 h-10 text-blue-400" }, null, _parent));
      _push(`</div><div><h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Systems</h1><p class="text-gray-400 text-lg"> Foundation models, LLMs, multimodal AI, and core AI infrastructure. </p></div></div><div class="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl"><div class="flex items-center justify-between flex-wrap gap-4"><div><h3 class="text-lg font-semibold text-white mb-1">View Complete Systems Catalog</h3><p class="text-gray-400 text-sm">Browse 200+ foundation models, APIs, and providers</p></div><a href="https://github.com/lpatel/awesome-skills/blob/main/resources/systems/README.md" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"> View on GitHub `);
      _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
      _push(`</a></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(sections, (section) => {
        _push(`<div class="p-6 bg-space-900 rounded-xl border border-space-800"><h3 class="text-lg font-semibold text-white mb-4">${ssrInterpolate(section.name)}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<span class="px-3 py-1 bg-space-800 text-gray-300 text-sm rounded-full">${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-blue-400">200+</div><div class="text-sm text-gray-400">Models</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-blue-400">50+</div><div class="text-sm text-gray-400">Providers</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-blue-400">20+</div><div class="text-sm text-gray-400">Open Source</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-blue-400">100%</div><div class="text-sm text-gray-400">Verified</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/systems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=systems-R5YG-92U.mjs.map
