import { defineEventHandler } from 'file:///home/lpatel/Code/LP-DEV/Awesome-Skills/node_modules/h3/dist/index.mjs';

const robots_txt_get = defineEventHandler(() => {
  return `User-agent: *
Allow: /

Sitemap: https://awesome-ai-skill.vercel.app/sitemap.xml
`;
});

export { robots_txt_get as default };
//# sourceMappingURL=robots.txt.get.mjs.map
