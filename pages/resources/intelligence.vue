<script setup lang="ts">
import { Brain, ExternalLink } from 'lucide-vue-next'

useHead({
  title: 'Intelligence - AI Agents',
  meta: [
    { name: 'description', content: 'AI agents, multi-agent systems, and autonomous workflows.' }
  ]
})

const sections = [
  { name: 'Agent Frameworks', items: ['CrewAI', 'AutoGen', 'LangGraph', 'LlamaIndex Agents', 'Phidata'] },
  { name: 'Multi-Agent Systems', items: ['MetaGPT', 'ChatDev', 'AutoGPT', 'SuperAGI', 'OpenDevin'] },
  { name: 'Autonomous Agents', items: ['BabyAGI', 'AgentGPT', 'AutoGPT', 'GodMode', 'Cascade'] },
  { name: 'Agent Tools', items: ['Browser Use', 'Composio', 'Exa Tools', 'Serper', 'Tavily'] }
]
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8">
    <div class="flex items-start gap-6">
      <div class="p-4 bg-amber-500/20 rounded-2xl">
        <Brain class="w-10 h-10 text-amber-400" />
      </div>
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Intelligence</h1>
        <p class="text-gray-400 text-lg">
          AI agents, multi-agent systems, and autonomous workflows.
        </p>
      </div>
    </div>

    <div class="glass p-6">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 class="text-lg font-semibold text-white mb-1">View Complete Intelligence Catalog</h3>
          <p class="text-gray-400 text-sm">Browse 300+ AI agents and multi-agent systems</p>
        </div>
        <a 
          href="https://github.com/lpatel/awesome-skills/blob/main/resources/intelligence/README.md"
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
        <div class="text-2xl font-bold text-amber-400">300+</div>
        <div class="text-sm text-gray-400">Agents</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-amber-400">40+</div>
        <div class="text-sm text-gray-400">Frameworks</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-amber-400">15+</div>
        <div class="text-sm text-gray-400">Multi-Agent</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-amber-400">100%</div>
        <div class="text-sm text-gray-400">Active</div>
      </div>
    </div>
  </div>
</template>
