import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Plug, ExternalLink } from 'lucide-vue-next';
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
  __name: "links",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Links - MCP & Integrations",
      meta: [
        { name: "description", content: "MCP servers, plugins, API integrations, and connectivity tools." }
      ]
    });
    const sections = [
      { name: "Official MCP Servers", items: ["Filesystem", "GitHub", "Git", "PostgreSQL", "SQLite", "Puppeteer"] },
      { name: "Community MCP Servers", items: ["Brave Search", "Fetch", "Obsidian", "Redis", "S3"] },
      { name: "API Integrations", items: ["Stripe", "Slack", "Notion", "Discord", "Twilio", "SendGrid"] },
      { name: "Plugins & Extensions", items: ["VS Code MCP", "Claude Desktop", "Zed Editor", "Cline"] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto space-y-8" }, _attrs))}><div class="flex items-start gap-6"><div class="p-4 bg-rose-500/20 rounded-2xl">`);
      _push(ssrRenderComponent(unref(Plug), { class: "w-10 h-10 text-rose-400" }, null, _parent));
      _push(`</div><div><h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Links</h1><p class="text-gray-400 text-lg"> MCP servers, plugins, API integrations, and connectivity. </p></div></div><div class="p-6 bg-rose-500/10 border border-rose-500/20 rounded-xl"><div class="flex items-center justify-between flex-wrap gap-4"><div><h3 class="text-lg font-semibold text-white mb-1">View Complete Links Catalog</h3><p class="text-gray-400 text-sm">Browse 150+ MCP servers and API integrations</p></div><a href="https://github.com/lpatel/awesome-skills/blob/main/resources/links/README.md" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors"> View on GitHub `);
      _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
      _push(`</a></div></div><div class="p-6 bg-space-900 rounded-xl border border-space-800"><h3 class="text-lg font-semibold text-white mb-3">What is MCP?</h3><p class="text-gray-400 leading-relaxed"> The Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to LLMs. Think of it like a USB-C port for AI - a universal connector that allows AI models to securely access tools, data sources, and services. MCP servers act as bridges between AI assistants and external systems. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(sections, (section) => {
        _push(`<div class="p-6 bg-space-900 rounded-xl border border-space-800"><h3 class="text-lg font-semibold text-white mb-4">${ssrInterpolate(section.name)}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(section.items, (item) => {
          _push(`<span class="px-3 py-1 bg-space-800 text-gray-300 text-sm rounded-full">${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-rose-400">150+</div><div class="text-sm text-gray-400">MCP Servers</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-rose-400">50+</div><div class="text-sm text-gray-400">Official</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-rose-400">100+</div><div class="text-sm text-gray-400">Community</div></div><div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center"><div class="text-2xl font-bold text-rose-400">Open</div><div class="text-sm text-gray-400">Protocol</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/links.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=links-B8UQD5Gs.mjs.map
