import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue/server-renderer/index.mjs';
import { BookOpen, ExternalLink } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useHead } from './v3-0mMLnyVi.mjs';
import './server.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/h3/dist/index.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/ufo/dist/index.mjs';
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
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue-router/vue-router.node.mjs';
import '../_/renderer.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unhead/dist/server.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/devalue/index.js';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unhead/dist/utils.mjs';
import 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "learning",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Learning - AI Education",
      meta: [
        { name: "description", content: "Courses, tutorials, research papers, and datasets for AI learning." }
      ]
    });
    const sections = [
      { name: "Online Courses", items: ["Fast.ai", "DeepLearning.AI", "Coursera ML", "Stanford CS229", "MIT 6.034"] },
      { name: "Tutorials & Guides", items: ["LLM University", "Pytorch Tutorials", "Hugging Face Course", "LangChain Academy"] },
      { name: "Research Papers", items: ["arXiv", "Papers with Code", "Semantic Scholar", "OpenReview"] },
      { name: "Datasets", items: ["Hugging Face Datasets", "Kaggle", "UCI ML Repo", "Google Dataset Search"] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto space-y-8" }, _attrs))}><div class="flex items-start gap-6"><div class="p-4 bg-purple-500/20 rounded-2xl">`);
      _push(ssrRenderComponent(unref(BookOpen), { class: "w-10 h-10 text-purple-400" }, null, _parent));
      _push(`</div><div><h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Learning</h1><p class="text-gray-400 text-lg"> Courses, tutorials, research papers, and datasets. </p></div></div><div class="p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl"><div class="flex items-center justify-between flex-wrap gap-4"><div><h3 class="text-lg font-semibold text-white mb-1">View Complete Learning Catalog</h3><p class="text-gray-400 text-sm">Browse 2,000+ courses, tutorials, and educational resources</p></div><a href="https://github.com/lpatel/awesome-skills/blob/main/resources/learning/README.md" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"> View on GitHub `);
      _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
      _push(`</a></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(sections, (section) => {
        _push(`<div class="p-6 bg-space-900 rounded-xl border border-space-800"><h3 class="text-lg font-semibold text-white mb-4">${ssrInterpolate(section.name)}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<span class="px-3 py-1 bg-space-800 text-gray-300 text-sm rounded-full">${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-purple-400">500+</div><div class="text-sm text-gray-400">Courses</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-purple-400">1M+</div><div class="text-sm text-gray-400">Papers</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-purple-400">1000+</div><div class="text-sm text-gray-400">Datasets</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-purple-400">Free</div><div class="text-sm text-gray-400">Access</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/learning.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=learning-BGpn33cc.mjs.map
