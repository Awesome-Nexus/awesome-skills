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
    <!-- Header -->
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

    <!-- Full Resource Link -->
    <div class="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 class="text-lg font-semibold text-white mb-1">View Complete Intelligence Catalog</h3>
          <p class="text-gray-400 text-sm">Browse 300+ AI agents and multi-agent systems</p>
        </div>
        <a 
          href="https://github.com/lpatel/awesome-skills/blob/main/resources/intelligence/README.md"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
        >
          View on GitHub
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>
    </div>

    <!-- Resource Sections -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="section in sections" 
        :key="section.name"
        class="p-6 bg-space-900 rounded-xl border border-space-800"
      >
        <h3 class="text-lg font-semibold text-white mb-4">{{ section.name }}</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="item in section.items" 
            :key="item"
            class="px-3 py-1 bg-space-800 text-gray-300 text-sm rounded-full"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
      <div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center">
        <div class="text-2xl font-bold text-amber-400">300+</div>
        <div class="text-sm text-gray-400">Agents</div>
      </div>
      <div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center">
        <div class="text-2xl font-bold text-amber-400">40+</div>
        <div class="text-sm text-gray-400">Frameworks</div>
      </div>
      <div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center">
        <div class="text-2xl font-bold text-amber-400">15+</div>
        <div class="text-sm text-gray-400">Multi-Agent</div>
      </div>
      <div class="p-4 bg-space-900/50 rounded-xl border border-space-800 text-center">
        <div class="text-2xl font-bold text-amber-400">100%</div>
        <div class="text-sm text-gray-400">Active</div>
      </div>
    </div>
  </div>
</template>
