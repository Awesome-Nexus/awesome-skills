<script setup lang="ts">
import { Cpu, ExternalLink } from 'lucide-vue-next'

useHead({
  title: 'Systems - AI Foundation Models',
  meta: [
    { name: 'description', content: 'Foundation models, LLMs, multimodal AI, and core AI infrastructure.' }
  ]
})

const sections = [
  { name: 'Large Language Models', items: ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Llama 3.3', 'DeepSeek V3', 'Mistral Large'] },
  { name: 'Multimodal & Vision', items: ['GPT-4V', 'Claude 3 Vision', 'Gemini Vision', 'LLaVA', 'Stable Diffusion 3'] },
  { name: 'Embedding Models', items: ['text-embedding-3', ' voyage-3', 'e5-mistral', 'BGE-M3'] },
  { name: 'Model Providers', items: ['OpenAI', 'Anthropic', 'Google AI', 'Groq', 'Together AI', 'Fireworks'] }
]
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8">
    <div class="flex items-start gap-6">
      <div class="p-4 bg-blue-500/20 rounded-2xl">
        <Cpu class="w-10 h-10 text-blue-400" />
      </div>
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Systems</h1>
        <p class="text-gray-400 text-lg">
          Foundation models, LLMs, multimodal AI, and core AI infrastructure.
        </p>
      </div>
    </div>

    <div class="glass p-6">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 class="text-lg font-semibold text-white mb-1">View Complete Systems Catalog</h3>
          <p class="text-gray-400 text-sm">Browse 200+ foundation models, APIs, and providers</p>
        </div>
        <a 
          href="https://github.com/lpatel/awesome-skills/blob/main/resources/systems/README.md"
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
        <div class="text-2xl font-bold text-blue-400">200+</div>
        <div class="text-sm text-gray-400">Models</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-blue-400">50+</div>
        <div class="text-sm text-gray-400">Providers</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-blue-400">20+</div>
        <div class="text-sm text-gray-400">Open Source</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-blue-400">100%</div>
        <div class="text-sm text-gray-400">Verified</div>
      </div>
    </div>
  </div>
</template>
