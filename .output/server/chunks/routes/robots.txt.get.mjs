import { d as defineEventHandler } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const robots_txt_get = defineEventHandler(() => {
  return `User-agent: *
Allow: /

Sitemap: https://awesome-ai-skill.vercel.app/sitemap.xml
`;
});

export { robots_txt_get as default };
//# sourceMappingURL=robots.txt.get.mjs.map
