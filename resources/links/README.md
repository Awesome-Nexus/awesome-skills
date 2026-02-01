# L - Links

> MCP servers, plugins, API integrations, and connectivity layer for AI systems.

## Table of Contents

- [MCP Official Resources](#mcp-official-resources)
- [Official MCP Servers](#official-mcp-servers)
- [Community MCP Servers](#community-mcp-servers)
- [MCP Clients](#mcp-clients)
- [API Integrations](#api-integrations)

---

## MCP Official Resources

| Resource | Description | Link |
|----------|-------------|------|
| **MCP Documentation** | Protocol specification | [modelcontextprotocol.io](https://modelcontextprotocol.io) |
| **MCP GitHub** | Official repositories | [github.com/modelcontextprotocol](https://github.com/modelcontextprotocol) |
| **TypeScript SDK** | TS implementation | [npm](https://www.npmjs.com/package/@modelcontextprotocol/sdk) |
| **Python SDK** | Python implementation | [PyPI](https://pypi.org/project/mcp/) |
| **Awesome MCP** | Community servers | [GitHub](https://github.com/appcypher/awesome-mcp-servers) |
| **MCP Inspector** | Debug tool | `npx @modelcontextprotocol/inspector` |

---

## Official MCP Servers

Install via `npx` or `pipx`:

| Server | Command | Description |
|--------|---------|-------------|
| **Filesystem** | `npx @modelcontextprotocol/server-filesystem` | Local file access |
| **GitHub** | `npx @modelcontextprotocol/server-github` | GitHub API integration |
| **Git** | `npx @modelcontextprotocol/server-git` | Git operations |
| **PostgreSQL** | `npx @modelcontextprotocol/server-postgres` | Database queries |
| **SQLite** | `npx @modelcontextprotocol/server-sqlite` | SQLite database |
| **Brave Search** | `npx @modelcontextprotocol/server-brave-search` | Web search |
| **Puppeteer** | `npx @modelcontextprotocol/server-puppeteer` | Web automation |
| **Sentry** | `npx @modelcontextprotocol/server-sentry` | Error tracking |

---

## Community MCP Servers

### Productivity & Work
| Server | Source | Description |
|--------|--------|-------------|
| **Slack** | Community | Slack workspace integration |
| **Notion** | Community | Notion pages & databases |
| **Linear** | Community | Issue tracking |
| **Jira** | Community | Project management |
| **Gmail** | Community | Email management |
| **Google Calendar** | Community | Calendar operations |

### Development
| Server | Source | Description |
|--------|--------|-------------|
| **Docker** | Community | Container management |
| **Kubernetes** | Community | K8s cluster operations |
| **Vercel** | Community | Deployment management |
| **AWS** | Community | AWS resource access |
| **Cloudflare** | Community | CDN & DNS management |

### Data & Knowledge
| Server | Source | Description |
|--------|--------|-------------|
| **Airtable** | Community | Database operations |
| **Supabase** | Community | Postgres + Auth |
| **MongoDB** | Community | NoSQL queries |
| **Neo4j** | Community | Graph database |
| **Pinecone** | Community | Vector search |
| **Redis** | Community | Cache operations |

### Search & Knowledge
| Server | Source | Description |
|--------|--------|-------------|
| **Exa** | Community | Neural search |
| **Perplexity** | Community | AI search |
| **Serper** | Community | Google Search API |
| **Tavily** | Community | Research search |
| **Wolfram Alpha** | Community | Computational knowledge |
| **Wikipedia** | Community | Knowledge base |

### Media & Content
| Server | Source | Description |
|--------|--------|-------------|
| **Figma** | Community | Design files |
| **Cloudinary** | Community | Image management |
| **ElevenLabs** | Community | Voice synthesis |
| **Replicate** | Community | AI model inference |
| **YouTube** | Community | Video transcripts |

---

## MCP Clients

| Client | Platform | Features |
|--------|----------|----------|
| [Claude Desktop](https://claude.ai/download) | macOS/Windows | Native MCP support |
| [Cline](https://github.com/cline/cline) | VS Code | Coding assistant |
| [Continue](https://continue.dev) | VS Code/JetBrains | Open source Copilot |
| [Zed](https://zed.dev) | macOS/Linux | AI-native editor |
| [HyperChat](https://github.com/ianarawjo/hyperchat) | Web | Chat UI |

---

## API Integrations

### LLM APIs
| Provider | API Docs | Features |
|----------|----------|----------|
| [OpenAI](https://platform.openai.com/docs) | Completions, Assistants | GPT-4, GPT-3.5 |
| [Anthropic](https://docs.anthropic.com) | Messages API | Claude models |
| [Google AI](https://ai.google.dev/docs) | Gemini API | Multimodal |
| [Cohere](https://docs.cohere.com) | Embed, Generate, Rerank | Embeddings |
| [Mistral](https://docs.mistral.ai) | La Plateforme | European models |

### Embeddings APIs
| Provider | Endpoint | Dimensions |
|----------|----------|------------|
| [OpenAI](https://platform.openai.com/docs/guides/embeddings) | text-embedding-3-* | 1536-3072 |
| [Voyage AI](https://docs.voyageai.com) | voyage-* | 1024 |
| [Cohere](https://docs.cohere.com/reference/embed) | embed | 1024 |

### Search APIs
| Provider | Use Case |
|----------|----------|
| [SerpAPI](https://serpapi.com) | Google Search results |
| [Brave Search API](https://brave.com/search/api/) | Privacy search |
| [Exa](https://exa.ai) | Neural search |
| [Tavily](https://tavily.com) | AI research search |

---

## Building MCP Servers

### Quick Start
```bash
# TypeScript
npm create mcp-server my-server

# Python  
pip install mcp
```

### Resources
| Resource | Description |
|----------|-------------|
| [Server Quickstart](https://modelcontextprotocol.io/quickstart/server) | Official guide |
| [Protocol Concepts](https://modelcontextprotocol.io/docs/concepts/architecture) | Architecture |
| [TS SDK Docs](https://github.com/modelcontextprotocol/typescript-sdk) | TypeScript SDK |
| [Python SDK Docs](https://github.com/modelcontextprotocol/python-sdk) | Python SDK |

---

## Contributing

Have an MCP server or integration to add? Please ensure:
- Publicly available
- Clear installation instructions
- Active maintenance

[← Back to Skills Master Index](../../docs/SKILL_MASTER_INDEX.md)
