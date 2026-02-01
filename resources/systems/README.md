# S - Systems

> Foundation models, LLMs, multimodal AI, and core AI infrastructure.

## Table of Contents

- [Large Language Models](#large-language-models)
- [Multimodal & Vision Models](#multimodal--vision-models)
- [Embedding Models](#embedding-models)
- [Open Source Models](#open-source-models)
- [Model Providers & APIs](#model-providers--apis)

---

## Large Language Models

### Frontier Models
| Model | Provider | Context | Features | Pricing |
|-------|----------|---------|----------|---------|
| GPT-4o | OpenAI | 128K | Multimodal, fast | Paid |
| GPT-4 Turbo | OpenAI | 128K | High capability | Paid |
| Claude 3.5 Sonnet | Anthropic | 200K | Coding, analysis | Paid |
| Claude 3 Opus | Anthropic | 200K | Complex tasks | Paid |
| Gemini 1.5 Pro | Google | 1M+ | Long context | Paid |
| Gemini 1.5 Flash | Google | 1M+ | Fast, cheap | Paid |

### Open Source LLMs
| Model | Organization | Size | License | Features |
|-------|--------------|------|---------|----------|
| Llama 3.3 | Meta | 70B | Llama 3.1 | General purpose |
| Llama 3.2 | Meta | 1B-90B | Llama 3.1 | Vision capable |
| Mistral Large | Mistral AI | - | Proprietary | European |
| Mixtral 8x22B | Mistral AI | 8x22B | Apache 2.0 | MoE |
| Qwen 2.5 | Alibaba | 0.5B-72B | Qianwen | Multilingual |
| DeepSeek V3 | DeepSeek | 671B (MoE) | MIT | Coding, reasoning |
| Gemma 2 | Google | 2B-27B | Gemma | Lightweight |

---

## Multimodal & Vision Models

| Model | Provider | Modality | Capabilities |
|-------|----------|----------|--------------|
| GPT-4V | OpenAI | Vision + Text | Image understanding |
| Claude 3 Vision | Anthropic | Vision + Text | Document analysis |
| Gemini Vision | Google | Vision + Text | Video understanding |
| LLaVA | Open Source | Vision + Text | Open multimodal |
| Qwen-VL | Alibaba | Vision + Text | Chinese/English |
| Stable Diffusion 3 | Stability AI | Text → Image | Image generation |
| DALL-E 3 | OpenAI | Text → Image | High quality images |
| Midjourney | Midjourney | Text → Image | Artistic images |

---

## Embedding Models

| Model | Provider | Dimensions | Best For |
|-------|----------|------------|----------|
| text-embedding-3-large | OpenAI | 3072 | General purpose |
| text-embedding-3-small | OpenAI | 1536 | Cost-effective |
| voyage-3 | Voyage AI | 1024 | High quality |
| BGE-large | BAAI | 1024 | Open source |
| E5-large | Microsoft | 1024 | Multilingual |
| GTE-large | Alibaba | 768 | General tasks |

---

## Model Providers & APIs

### Major Cloud Providers
| Provider | Models | Specialization |
|----------|--------|----------------|
| [OpenAI](https://platform.openai.com) | GPT-4, GPT-3.5 | Frontier models |
| [Anthropic](https://console.anthropic.com) | Claude | Safety, long context |
| [Google AI](https://ai.google.dev) | Gemini | Multimodal, long context |
| [Azure OpenAI](https://azure.microsoft.com) | GPT, Embeddings | Enterprise |
| [AWS Bedrock](https://aws.amazon.com/bedrock) | Multiple | Model variety |
| [Vertex AI](https://cloud.google.com/vertex-ai) | Gemini, OSS | Google Cloud |

### Open Model Providers
| Provider | Models | Pricing |
|----------|--------|---------|
| [Together AI](https://www.together.ai) | Llama, Mixtral, etc. | Pay per token |
| [Fireworks AI](https://fireworks.ai) | Fast inference | Competitive |
| [Groq](https://groq.com) | Ultra-fast inference | Low latency |
| [Replicate](https://replicate.com) | Many open models | Pay per run |
| [Hugging Face](https://huggingface.co/inference-api) | 100k+ models | Free tier |

---

## Local & Self-Hosted

| Tool | Purpose | Best For |
|------|---------|----------|
| [Ollama](https://ollama.com) | Run models locally | Local development |
| [vLLM](https://github.com/vllm-project/vllm) | Fast inference | Production serving |
| [llama.cpp](https://github.com/ggerganov/llama.cpp) | C++ inference | Edge devices |
| [TGI](https://github.com/huggingface/text-generation-inference) | HuggingFace serving | Production |
| [LM Studio](https://lmstudio.ai) | GUI for local models | Desktop users |

---

## Contributing

Have a model or provider to add? Please ensure:
- Publicly accessible
- Active maintenance
- Clear documentation

[← Back to Skills Master Index](../../docs/SKILL_MASTER_INDEX.md)
