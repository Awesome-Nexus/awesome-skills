# Skills Comparisons

> Quick comparison tables for decision making.

---

## 🧠 LLM Comparison

| Model | Context | Price | Speed | Best For |
|-------|---------|-------|-------|----------|
| GPT-4o | 128K | $$$ | Fast | General tasks |
| GPT-4 Turbo | 128K | $$$$ | Medium | Complex reasoning |
| Claude 3.5 Sonnet | 200K | $$$ | Fast | Coding, analysis |
| Claude 3 Opus | 200K | $$$$ | Slow | Deep reasoning |
| Gemini 1.5 Pro | 1M+ | $$ | Fast | Long documents |
| Llama 3.3 70B | 128K | $ | Medium | Self-hosting |
| DeepSeek V3 | 64K | $ | Fast | Coding |

**Legend:** $ = Cheap, $$$$ = Expensive

---

## 🏗️ Framework Comparison

| Framework | Language | Best For | Learning Curve |
|-----------|----------|----------|----------------|
| LangChain | Python/JS | Complex workflows | ⭐⭐⭐ |
| LlamaIndex | Python/TS | RAG applications | ⭐⭐ |
| LiteLLM | Python | Multi-provider | ⭐ |
| Pydantic AI | Python | Type safety | ⭐⭐ |
| Vercel AI SDK | TS/React | Frontend apps | ⭐⭐ |

---

## 🤖 Agent Framework Comparison

| Framework | Multi-Agent | Type-Safe | Best Feature |
|-----------|-------------|-----------|--------------|
| CrewAI | ✅ Role-based | ❌ Python | Easy team setup |
| AutoGen | ✅ Conversational | ❌ Python/.NET | Microsoft ecosystem |
| LangGraph | ✅ Graph-based | ❌ Python | State management |
| Pydantic AI | ❌ Single | ✅ Python | Structured outputs |
| OpenAI Assistants | ❌ Managed | ✅ Any | Quick deployment |

---

## 💾 Vector Database Comparison

| Database | Self-Host | Cloud | Best For |
|----------|-----------|-------|----------|
| Chroma | ✅ | ✅ | Local dev |
| Pinecone | ❌ | ✅ | Production scale |
| Weaviate | ✅ | ✅ | Graph hybrid |
| Qdrant | ✅ | ✅ | Performance |
| pgvector | ✅ | ✅ | SQL apps |
| Milvus | ✅ | ✅ | Large scale |

---

## 🔌 MCP Server Installation

| Method | Command | Best For |
|--------|---------|----------|
| NPX | `npx @modelcontextprotocol/server-<name>` | Quick start |
| Smithery | `npx @smithery/cli install <id>` | Unified install |
| Docker | `docker run mcp/<name>` | Isolation |
| Python | `pip install mcp-server-<name>` | Python projects |
| Source | `git clone` | Development |

---

## 📚 Learning Path by Goal

| Goal | Start With | Then Learn | Finally |
|------|------------|------------|---------|
| Build LLM apps | OpenAI API | LangChain | Production deployment |
| Create AI agents | CrewAI basics | AutoGen/LangGraph | Custom frameworks |
| Master MCP | Protocol spec | Build server | Contribute |
| Research AI | Fast.ai | Papers | Reproduce results |
| Production systems | LiteLLM | Monitoring | Cost optimization |

---

## 💰 Cost Optimization

| Strategy | Savings | Effort |
|----------|---------|--------|
| Use local models (Ollama) | 100% | Medium |
| Caching responses | 20-40% | Low |
| Smaller models | 50-80% | Low |
| Prompt compression | 10-20% | Medium |
| Batch requests | 15-25% | Low |

---

## 🔧 Local Development Stack

| Component | Tool | Alternative |
|-----------|------|-------------|
| Local LLM | Ollama | LM Studio |
| Vector DB | Chroma | pgvector |
| Framework | LangChain | LlamaIndex |
| IDE | Cursor | VS Code + Continue |
| API Testing | Claude Desktop | Custom client |

---

## 🚀 Deployment Options

| Platform | Scale | Cost | Best For |
|----------|-------|------|----------|
| Modal | Serverless | Pay-per-use | Python functions |
| Vercel | Edge | Free tier | Next.js apps |
| Replicate | Model hosting | Per-run | Fast deployment |
| AWS Lambda | Serverless | Pay-per-use | Enterprise |
| Self-hosted | Unlimited | Hardware | Full control |

---

## ⚡ Quick Decision Guide

### "I want to build..."

| Project | Recommended Stack |
|---------|-------------------|
| Chatbot | OpenAI API + Vercel AI SDK |
| RAG app | LlamaIndex + Pinecone |
| Multi-agent system | CrewAI + Claude |
| Local AI app | Ollama + LangChain |
| MCP server | TypeScript SDK |
| Research tool | Claude + MCP servers |
| Production API | LiteLLM + Modal |

---

*Use these as starting points. Your specific needs may vary!*
