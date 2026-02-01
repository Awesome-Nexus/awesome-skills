# MCP Server Registry

> Curated collection of Model Context Protocol servers organized by category.

---

## 📋 Quick Install

Most servers install via `npx`:
```bash
npx @modelcontextprotocol/server-<name>
```

Or via Smithery (unified installer):
```bash
npx @smithery/cli install <server-id>
```

---

## 🗂️ Categories

- [File Systems](#file-systems)
- [Databases](#databases)
- [Development Tools](#development-tools)
- [Cloud Services](#cloud-services)
- [Communication](#communication)
- [Search & Knowledge](#search--knowledge)
- [Productivity](#productivity)
- [AI & ML](#ai--ml)
- [Media](#media)
- [Finance](#finance)

---

## File Systems

| Server | Install | Description | Status |
|--------|---------|-------------|--------|
| **filesystem** | `npx @modelcontextprotocol/server-filesystem` | Local file access | ✅ Official |
| **GitHub** | `npx @modelcontextprotocol/server-github` | Repository operations | ✅ Official |
| **Git** | `npx @modelcontextprotocol/server-git` | Git command operations | ✅ Official |
| **Google Drive** | Community | Drive file access | 🌐 Community |
| **Dropbox** | Community | Dropbox integration | 🌐 Community |

---

## Databases

| Server | Type | Install | Description |
|--------|------|---------|-------------|
| **PostgreSQL** | SQL | `npx @modelcontextprotocol/server-postgres` | Query PostgreSQL |
| **SQLite** | SQL | `npx @modelcontextprotocol/server-sqlite` | SQLite operations |
| **MySQL** | SQL | Community | MySQL database |
| **MongoDB** | NoSQL | Community | Document queries |
| **Redis** | Cache | Community | Key-value operations |
| **Neo4j** | Graph | Community | Cypher queries |
| **Supabase** | Postgres | Community | Postgres + Auth |
| **Airtable** | Low-code | Community | Airtable bases |
| **Pinecone** | Vector | Community | Vector search |
| **Chroma** | Vector | Community | Local vector DB |

---

## Development Tools

| Server | Install | Description |
|--------|---------|-------------|
| **Puppeteer** | `npx @modelcontextprotocol/server-puppeteer` | Browser automation |
| **Sentry** | `npx @modelcontextprotocol/server-sentry` | Error tracking |
| **Docker** | Community | Container management |
| **Kubernetes** | Community | K8s operations |
| **Vercel** | Community | Deployments |
| **GitHub Actions** | Community | CI/CD workflows |
| **Jenkins** | Community | Build automation |

---

## Cloud Services

| Server | Provider | Description |
|--------|----------|-------------|
| **AWS** | Community | S3, Lambda, EC2 |
| **Azure** | Community | Azure resources |
| **GCP** | Community | Google Cloud |
| **Cloudflare** | Community | CDN, DNS, Workers |
| **Vercel** | Community | Deployments |
| **Netlify** | Community | Site management |
| **Terraform** | Community | Infrastructure |

---

## Communication

| Server | Platform | Description |
|--------|----------|-------------|
| **Slack** | Community | Channel operations |
| **Discord** | Community | Bot integration |
| **Gmail** | Community | Email management |
| **Outlook** | Community | Microsoft email |
| **Telegram** | Community | Bot API |

---

## Search & Knowledge

| Server | Install | Description |
|--------|---------|-------------|
| **Brave Search** | `npx @modelcontextprotocol/server-brave-search` | Web search |
| **Exa** | Community | Neural search |
| **Perplexity** | Community | AI search |
| **Serper** | Community | Google Search API |
| **Tavily** | Community | Research search |
| **Wolfram Alpha** | Community | Computation |
| **Wikipedia** | Community | Knowledge base |
| **arXiv** | Community | Research papers |
| **Semantic Scholar** | Community | Academic search |

---

## Productivity

| Server | Platform | Description |
|--------|----------|-------------|
| **Notion** | Community | Pages & databases |
| **Linear** | Community | Issue tracking |
| **Jira** | Community | Project management |
| **Asana** | Community | Task management |
| **Trello** | Community | Kanban boards |
| **Google Calendar** | Community | Calendar ops |
| **Obsidian** | Community | Note management |

---

## AI & ML

| Server | Install | Description |
|--------|---------|-------------|
| **Replicate** | Community | Model inference |
| **Hugging Face** | Community | Model hub |
| **OpenAI** | Community | API access |
| **Anthropic** | Community | Claude API |
| **ElevenLabs** | Community | Voice synthesis |
| **AssemblyAI** | Community | Speech-to-text |

---

## Media

| Server | Type | Description |
|--------|------|-------------|
| **Figma** | Design | File operations |
| **Cloudinary** | Images | Image management |
| **YouTube** | Video | Transcripts |
| **Spotify** | Audio | Music data |

---

## Finance

| Server | Source | Description |
|--------|--------|-------------|
| **Stripe** | Community | Payment operations |
| **Coinbase** | Community | Crypto data |
| **Yahoo Finance** | Community | Stock data |
| **Plaid** | Community | Banking data |

---

## 🛠️ Building Your Own

### Template Repositories
| Template | Language | Features |
|----------|----------|----------|
| [mcp-server-template](https://github.com/modelcontextprotocol/python-sdk) | Python | Official SDK |
| [ts-server-template](https://github.com/modelcontextprotocol/typescript-sdk) | TypeScript | Official SDK |

### Quick Start (Python)
```python
from mcp.server import Server
from mcp.types import TextContent

app = Server("my-server")

@app.call_tool()
async def my_tool(name: str, arguments: dict):
    return [TextContent(text="Hello!")]
```

### Quick Start (TypeScript)
```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";

const server = new Server({ name: "my-server", version: "1.0.0" });

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  return { content: [{ type: "text", text: "Hello!" }] };
});
```

---

## 📊 Server Statistics

| Category | Count | Official |
|----------|-------|----------|
| File Systems | 5 | 3 |
| Databases | 10 | 2 |
| Development | 7 | 2 |
| Cloud | 7 | 0 |
| Communication | 5 | 0 |
| Search | 9 | 1 |
| Productivity | 7 | 0 |
| AI/ML | 6 | 0 |
| Media | 4 | 0 |
| Finance | 4 | 0 |
| **Total** | **64** | **8** |

---

## 🔗 Quick Links

- [Official MCP Docs](https://modelcontextprotocol.io)
- [MCP GitHub](https://github.com/modelcontextprotocol)
- [Awesome MCP Servers](https://github.com/appcypher/awesome-mcp-servers)
- [Smithery Registry](https://smithery.ai)

---

*Last Updated: February 2026*
