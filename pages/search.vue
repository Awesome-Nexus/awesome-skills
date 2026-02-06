<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search } from 'lucide-vue-next'

useHead({
  title: 'Search Resources',
  meta: [
    { name: 'description', content: 'Search through 5,100+ AI development resources including Systems, Kits, Intelligence, Learning, Security, and MCP Links.' }
  ]
})

const searchQuery = ref('')

const categories = [
  { name: 'Systems', description: 'Foundation models, LLMs, multimodal AI', path: '/resources/systems', count: '500+' },
  { name: 'Kits', description: 'Development frameworks, SDKs, tools', path: '/resources/kits', count: '1,000+' },
  { name: 'Intelligence', description: 'AI agents and multi-agent systems', path: '/resources/intelligence', count: '300+' },
  { name: 'Learning', description: 'Courses, tutorials, research papers', path: '/resources/learning', count: '2,000+' },
  { name: 'Links', description: 'MCP servers and API integrations', path: '/resources/links', count: '60+' },
  { name: 'Security', description: 'AI safety, guardrails, and protection tools', path: '/resources/security', count: '100+' }
]

const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories
  const query = searchQuery.value.toLowerCase()
  return categories.filter(cat => 
    cat.name.toLowerCase().includes(query) || 
    cat.description.toLowerCase().includes(query)
  )
})
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="text-center space-y-4">
      <h1 class="text-3xl md:text-4xl font-bold text-white">Search Resources</h1>
      <p class="text-gray-400">
        Find AI development resources across all categories
      </p>
    </div>

    <div class="relative max-w-2xl mx-auto">
      <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for resources, frameworks, models..."
        class="input-search pl-12"
      />
    </div>

    <div class="glass p-8 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
        <Search class="w-8 h-8 text-blue-400" />
      </div>
      <h2 class="text-xl font-semibold text-white mb-2">Full Search Coming Soon</h2>
      <p class="text-gray-400 mb-4">
        We're indexing all 5,100+ resources for instant search. For now, browse by category below.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink
        v-for="category in filteredCategories"
        :key="category.name"
        :to="category.path"
        class="glass p-6 transition-all duration-300 hover:bg-white/10"
      >
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-white">
            {{ category.name }}
          </h3>
          <span class="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-full">
            {{ category.count }}
          </span>
        </div>
        <p class="text-sm text-gray-400">{{ category.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
