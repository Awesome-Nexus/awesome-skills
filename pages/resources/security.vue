<script setup lang="ts">
import { Shield, ExternalLink } from 'lucide-vue-next'

useHead({
  title: 'Security - AI Safety & Protection',
  meta: [
    { name: 'description', content: 'AI safety, alignment, guardrails, prompt injection protection, and security tools.' }
  ]
})

const sections = [
  { name: 'AI Guardrails', items: ['NeMo Guardrails', 'Guardrails AI', 'Llama Guard', 'Presidio', 'LangKit'] },
  { name: 'Prompt Security', items: ['Rebuff', 'Lakera Guard', 'Prompt Armor', 'HiddenLayer', 'Pillar Security'] },
  { name: 'Content Moderation', items: ['OpenAI Moderation', 'Azure Content Safety', 'Hive Moderation', 'Sightengine', 'Two Hat'] },
  { name: 'Red Teaming & Eval', items: ['Garak', 'PyRIT', 'Adversarial Robustness Toolbox', 'Counterfit', 'Atlas'] }
]
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8">
    <div class="flex items-start gap-6">
      <div class="p-4 bg-cyan-500/20 rounded-2xl">
        <Shield class="w-10 h-10 text-cyan-400" />
      </div>
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Security</h1>
        <p class="text-gray-400 text-lg">
          AI safety, alignment, guardrails, and protection tools.
        </p>
      </div>
    </div>

    <div class="glass p-6">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 class="text-lg font-semibold text-white mb-1">View Complete Security Catalog</h3>
          <p class="text-gray-400 text-sm">Browse 100+ AI safety and security tools</p>
        </div>
        <a 
          href="https://github.com/lpatel/awesome-skills/blob/main/resources/security/README.md"
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
        <div class="text-2xl font-bold text-cyan-400">100+</div>
        <div class="text-sm text-gray-400">Security Tools</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-cyan-400">30+</div>
        <div class="text-sm text-gray-400">Guardrails</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-cyan-400">25+</div>
        <div class="text-sm text-gray-400">Red Team Tools</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-cyan-400">100%</div>
        <div class="text-sm text-gray-400">Essential</div>
      </div>
    </div>
  </div>
</template>
