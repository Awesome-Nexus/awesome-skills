<script setup lang="ts">
import { 
  Cpu, 
  Wrench, 
  Brain, 
  BookOpen, 
  Plug,
  Shield,
  TrendingUp,
  Star,
  GitBranch,
  ArrowRight,
  Zap,
  Target,
  Lock
} from 'lucide-vue-next'

useHead({
  title: 'Awesome Skills - AI Development Hub',
  meta: [
    { name: 'description', content: 'A comprehensive collection of AI development resources. Systems, Kits, Intelligence, Learning, Links, and Security.' },
  ]
})

const categories = [
  {
    title: 'Systems',
    description: 'Foundation models, LLMs, multimodal AI, and core infrastructure.',
    to: '/resources/systems',
    icon: Cpu,
    gradient: 'from-blue-500 to-cyan-500',
    stats: '200+ Models'
  },
  {
    title: 'Kits',
    description: 'Development frameworks, SDKs, vector databases, and tools.',
    to: '/resources/kits',
    icon: Wrench,
    gradient: 'from-emerald-500 to-teal-500',
    stats: '500+ Tools'
  },
  {
    title: 'Intelligence',
    description: 'AI agents, multi-agent systems, and autonomous workflows.',
    to: '/resources/intelligence',
    icon: Brain,
    gradient: 'from-amber-500 to-orange-500',
    stats: '150+ Agents'
  },
  {
    title: 'Learning',
    description: 'Courses, tutorials, research papers, and datasets.',
    to: '/resources/learning',
    icon: BookOpen,
    gradient: 'from-purple-500 to-pink-500',
    stats: '500+ Courses'
  },
  {
    title: 'Links',
    description: 'MCP servers, plugins, API integrations, and connectivity.',
    to: '/resources/links',
    icon: Plug,
    gradient: 'from-rose-500 to-red-500',
    stats: '60+ MCP'
  },
  {
    title: 'Security',
    description: 'AI safety, guardrails, prompt injection protection, and alignment.',
    to: '/resources/security',
    icon: Shield,
    gradient: 'from-indigo-500 to-blue-500',
    stats: '100+ Tools'
  }
]

const featuredResources = [
  { name: 'OpenAI GPT-4', category: 'Systems', stars: 45000 },
  { name: 'LangChain', category: 'Kits', stars: 38000 },
  { name: 'AutoGPT', category: 'Intelligence', stars: 32000 },
  { name: 'Hugging Face', category: 'Systems', stars: 65000 },
  { name: 'Vector DBs', category: 'Kits', stars: 15000 },
]

const stats = [
  { label: 'Total Resources', value: '5,100+', icon: TrendingUp },
  { label: 'GitHub Stars', value: '150K+', icon: Star },
  { label: 'Categories', value: '6', icon: GitBranch },
]
</script>

<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <section class="glass p-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      
      <div class="relative z-10">
        <div class="flex items-center gap-3 mb-4">
          <span class="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
            🚀 Curated by Developers
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Awesome Skills for <span class="text-gradient">AI Development</span>
        </h1>
        
        <p class="text-lg text-gray-400 max-w-2xl mb-8">
          A community-curated collection of quality resources for building AI-powered applications. 
          From foundation models to security tools — everything you need in one place.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/resources/systems" class="btn-main flex items-center gap-2">
            <span>Browse Resources</span>
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
          <a href="https://github.com/lpatel/awesome-skills" target="_blank" class="btn-outline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Row -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <component :is="stat.icon" class="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
          <p class="text-sm text-gray-500">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-white">Categories</h2>
        <NuxtLink to="/resources/systems" class="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium">
          <span>View All</span>
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink 
          v-for="category in categories" 
          :key="category.title" 
          :to="category.to"
          class="category-card"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110" :class="category.gradient">
              <component :is="category.icon" class="w-6 h-6" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-white mb-1 transition-colors category-card:hover:text-blue-400">
                {{ category.title }}
              </h3>
              <p class="text-sm text-gray-400 mb-3 line-clamp-2">
                {{ category.description }}
              </p>
              <span class="px-2 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full">
                {{ category.stats }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="glass p-8">
      <h2 class="text-2xl font-bold text-white mb-6">Featured Resources</h2>
      <div class="space-y-4">
        <div v-for="resource in featuredResources" :key="resource.name" class="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
              <Star class="w-5 h-5 text-white" />
            </div>
            <div>
              <p class="font-medium text-white">{{ resource.name }}</p>
              <p class="text-sm text-gray-500">{{ resource.category }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-amber-400">
            <Star class="w-4 h-4 fill-current" />
            <span class="font-medium">{{ resource.stars.toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
