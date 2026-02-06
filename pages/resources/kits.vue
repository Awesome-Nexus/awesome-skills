<script setup lang="ts">
import { Wrench, ExternalLink } from 'lucide-vue-next'

useHead({
  title: 'Kits - AI Development Tools',
  meta: [
    { name: 'description', content: 'Development frameworks, SDKs, vector databases, and AI tools.' }
  ]
})

const sections = [
  { name: 'Frameworks', items: ['LangChain', 'LlamaIndex', 'Haystack', 'Semantic Kernel', 'CrewAI'] },
  { name: 'Vector Databases', items: ['Pinecone', 'Weaviate', 'Chroma', 'Qdrant', 'Milvus', 'pgvector'] },
  { name: 'AI Infrastructure', items: ['Ollama', 'LiteLLM', 'vLLM', 'Text Generation Inference'] },
  { name: 'Development Tools', items: ['OpenAI SDK', 'Anthropic SDK', 'Hugging Face', 'Modal', 'Banana'] }
]
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8">
    <div class="flex items-start gap-6">
      <div class="p-4 bg-emerald-500/20 rounded-2xl">
        <Wrench class="w-10 h-10 text-emerald-400" />
      </div>
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Kits</h1>
        <p class="text-gray-400 text-lg">
          Development frameworks, SDKs, vector databases, and tools.
        </p>
      </div>
    </div>

    <div class="glass p-6">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 class="text-lg font-semibold text-white mb-1">View Complete Kits Catalog</h3>
          <p class="text-gray-400 text-sm">Browse 500+ frameworks, SDKs, and development tools</p>
        </div>
        <a 
          href="https://github.com/lpatel/awesome-skills/blob/main/resources/kits/README.md"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-main inline-flex items-center gap-2"
        >
          View on GitHub
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="section in sections" 
        :key="section.name"
        class="glass p-6"
      >
        <h3 class="text-lg font-semibold text-white mb-4">{{ section.name }}</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="item in section.items" 
            :key="item"
            class="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-emerald-400">500+</div>
        <div class="text-sm text-gray-400">Tools</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-emerald-400">50+</div>
        <div class="text-sm text-gray-400">Frameworks</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-emerald-400">20+</div>
        <div class="text-sm text-gray-400">Vector DBs</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-emerald-400">100%</div>
        <div class="text-sm text-gray-400">Open Source</div>
      </div>
    </div>
  </div>
</template>
