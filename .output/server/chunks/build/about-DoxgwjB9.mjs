import { _ as __nuxt_component_0 } from './nuxt-link-DL2KEPGD.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Users, Globe, Heart, Github } from 'lucide-vue-next';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About",
      meta: [
        { name: "description", content: "Learn about Awesome Skills - a community-curated collection of AI development resources." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto space-y-12" }, _attrs))}><div class="text-center space-y-4"><h1 class="text-3xl md:text-4xl font-bold text-white">About Awesome Skills</h1><p class="text-xl text-gray-400"> A community-curated collection of quality AI development resources </p></div><section class="prose-custom"><h2 class="text-2xl font-bold text-white mb-4">Our Mission</h2><p class="text-gray-300 leading-relaxed"> Awesome Skills aims to be the most comprehensive resource hub for AI developers worldwide. We curate quality resources across six key categories: <strong class="text-blue-400">Systems</strong> (foundation models, LLMs), <strong class="text-emerald-400">Kits</strong> (frameworks, tools), <strong class="text-amber-400">Intelligence</strong> (agents, multi-agent systems), <strong class="text-purple-400">Learning</strong> (courses, papers), <strong class="text-rose-400">Links</strong> (MCP servers, integrations), and <strong class="text-cyan-400">Security</strong> (AI safety, guardrails). </p></section><section class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="p-6 bg-space-900 rounded-xl border border-space-800 text-center"><div class="text-3xl font-bold text-primary-400 mb-1">5,000+</div><div class="text-sm text-gray-400">Resources</div></div><div class="p-6 bg-space-900 rounded-xl border border-space-800 text-center"><div class="text-3xl font-bold text-emerald-400 mb-1">50+</div><div class="text-sm text-gray-400">Countries</div></div><div class="p-6 bg-space-900 rounded-xl border border-space-800 text-center"><div class="text-3xl font-bold text-amber-400 mb-1">100%</div><div class="text-sm text-gray-400">Open Source</div></div><div class="p-6 bg-space-900 rounded-xl border border-space-800 text-center"><div class="text-3xl font-bold text-purple-400 mb-1">Free</div><div class="text-sm text-gray-400">Forever</div></div></section><section><h2 class="text-2xl font-bold text-white mb-6">Why Awesome Skills?</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="p-6 bg-space-900/50 rounded-xl border border-space-800"><div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(unref(Users), { class: "w-6 h-6 text-blue-400" }, null, _parent));
      _push(`</div><h3 class="text-lg font-semibold text-white mb-2">Community Driven</h3><p class="text-gray-400 text-sm"> Built by developers, for developers. Our resources are curated and verified by the community. </p></div><div class="p-6 bg-space-900/50 rounded-xl border border-space-800"><div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(unref(Globe), { class: "w-6 h-6 text-emerald-400" }, null, _parent));
      _push(`</div><h3 class="text-lg font-semibold text-white mb-2">Global Coverage</h3><p class="text-gray-400 text-sm"> Resources from 50+ countries, covering AI tools and frameworks from around the world. </p></div><div class="p-6 bg-space-900/50 rounded-xl border border-space-800"><div class="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(unref(Heart), { class: "w-6 h-6 text-rose-400" }, null, _parent));
      _push(`</div><h3 class="text-lg font-semibold text-white mb-2">Always Free</h3><p class="text-gray-400 text-sm"> Open source and free forever. No paywalls, no ads, just quality resources. </p></div></div></section><section class="text-center p-8 bg-gradient-to-r from-primary-500/10 via-emerald-500/10 to-purple-500/10 rounded-2xl border border-space-800"><h2 class="text-2xl font-bold text-white mb-4">Want to Contribute?</h2><p class="text-gray-400 mb-6 max-w-2xl mx-auto"> Awesome Skills is open source! Help us build the ultimate AI development resource collection by contributing new tools, frameworks, or improvements. </p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://github.com/lpatel/awesome-ai-skill" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors">`);
      _push(ssrRenderComponent(unref(Github), { class: "w-5 h-5" }, null, _parent));
      _push(` Contribute on GitHub </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center justify-center gap-2 px-6 py-3 border border-space-700 hover:border-primary-500/50 text-gray-300 hover:text-white rounded-lg font-semibold transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browse Resources `);
          } else {
            return [
              createTextVNode(" Browse Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-DoxgwjB9.mjs.map
