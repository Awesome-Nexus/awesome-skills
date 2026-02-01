<script setup lang="ts">
import { 
  Cpu, 
  Wrench, 
  Brain, 
  BookOpen, 
  Plug,
  Shield
} from 'lucide-vue-next'

// Set page meta
useHead({
  title: 'Awesome Skills - Framework for AI-Powered Development',
  meta: [
    { name: 'description', content: 'A comprehensive framework for building AI-powered applications. Systems, Kits, Intelligence, Learning, Links, and Security — 5,100+ curated resources.' },
    { property: 'og:title', content: 'Awesome Skills - AI Development Resources' },
    { property: 'og:description', content: 'The complete resource hub for AI development. 5,100+ resources across Systems, Kits, Intelligence, Learning, Links, and Security.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Awesome Skills - AI Development Resources' },
    { name: 'twitter:description', content: 'The world\'s most comprehensive AI development resource hub.' }
  ]
})

// Statistics
const stats = {
  totalResources: '5,100+',
  models: '200+',
  frameworks: '500+',
  mcpServers: '60+',
  countries: '50+',
  courses: '500+',
  tools: '300+',
  papers: '1M+'
}

const categories = [
  {
    title: 'Systems',
    description: 'Foundation models, LLMs, multimodal AI, and core infrastructure.',
    to: '/resources/systems',
    icon: Cpu,
    colorClass: 'bg-blue-500/20 text-blue-300',
    textColorClass: 'text-blue-300',
    borderColorClass: 'hover:border-blue-500/50'
  },
  {
    title: 'Kits',
    description: 'Development frameworks, SDKs, vector databases, and tools.',
    to: '/resources/kits',
    icon: Wrench,
    colorClass: 'bg-emerald-500/20 text-emerald-300',
    textColorClass: 'text-emerald-300',
    borderColorClass: 'hover:border-emerald-500/50'
  },
  {
    title: 'Intelligence',
    description: 'AI agents, multi-agent systems, and autonomous workflows.',
    to: '/resources/intelligence',
    icon: Brain,
    colorClass: 'bg-amber-500/20 text-amber-300',
    textColorClass: 'text-amber-300',
    borderColorClass: 'hover:border-amber-500/50'
  },
  {
    title: 'Learning',
    description: 'Courses, tutorials, research papers, and datasets.',
    to: '/resources/learning',
    icon: BookOpen,
    colorClass: 'bg-purple-500/20 text-purple-300',
    textColorClass: 'text-purple-300',
    borderColorClass: 'hover:border-purple-500/50'
  },
  {
    title: 'Links',
    description: 'MCP servers, plugins, API integrations, and connectivity.',
    to: '/resources/links',
    icon: Plug,
    colorClass: 'bg-rose-500/20 text-rose-300',
    textColorClass: 'text-rose-300',
    borderColorClass: 'hover:border-rose-500/50'
  },
  {
    title: 'Security',
    description: 'AI safety, guardrails, prompt injection protection, and alignment.',
    to: '/resources/security',
    icon: Shield,
    colorClass: 'bg-cyan-500/20 text-cyan-300',
    textColorClass: 'text-cyan-300',
    borderColorClass: 'hover:border-cyan-500/50'
  }
]
</script>

<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="text-center space-y-8 pt-8 pb-12 relative overflow-hidden">
      <!-- Version Badge - Top Right Corner -->
      <div class="absolute top-0 right-0 z-20">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-500/10 border border-lime-500/20 rounded-bl-lg text-lime-300 text-xs font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
          Last Published: v1.0.0 (February 1, 2026)
        </div>
      </div>

      <!-- Background Effects -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-emerald-500/5 to-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div class="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      <div class="relative z-10 w-full px-8">
        
        <!-- Main Headline -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
            Curated by Developers, Built for AI Engineers
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white w-full text-center">
            <span class="animate-fade-in">
              Awesome Skills
            </span>
            <br>
            <span class="animate-slide-up">
              for Everyone!
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 w-full leading-relaxed animate-slide-up delay-200">
            A community curated collection of quality 
            <span class="text-blue-400 font-mono font-medium">Systems</span>, 
            <span class="text-emerald-400 font-mono font-medium">Kits</span>, 
            <span class="text-amber-400 font-mono font-medium">Intelligence</span>, 
            <span class="text-purple-400 font-mono font-medium">Learning</span>, 
            <span class="text-rose-400 font-mono font-medium">Links</span>, and 
            <span class="text-cyan-400 font-mono font-medium">Security</span> resources
          </p>
          
          <p class="text-lg text-gray-400 w-full animate-slide-up delay-300">
            For AI developers worldwide across all skill levels. 
            <span class="text-white font-medium">5,000+ verified AI resources</span> from 50+ countries — open source and free forever.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up delay-500">
          <NuxtLink 
            to="/resources/systems"
            class="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25 transform-gpu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-12 transition-transform">
              <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/>
              <path d="M6.453 15h11.094"/>
              <path d="M8.5 2h7"/>
            </svg>
            Browse AI Systems
          </NuxtLink>
          
          <NuxtLink 
            to="/resources/links"
            class="flex items-center gap-3 px-6 py-4 border border-rose-600 hover:border-rose-500 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            Explore MCP Links
          </NuxtLink>
        </div>

        <!-- Stats - Real Numbers -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-slide-up delay-700">
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-blue-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-blue-400">{{ stats.totalResources }}</div>
            <div class="text-sm text-gray-400">Total AI Resources</div>
          </div>
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-emerald-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-emerald-400">{{ stats.models }}</div>
            <div class="text-sm text-gray-400">Foundation Models</div>
          </div>
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-amber-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-amber-400">{{ stats.mcpServers }}</div>
            <div class="text-sm text-gray-400">MCP Servers</div>
          </div>
          <div class="text-center p-4 bg-space-900/30 backdrop-blur-sm rounded-xl border border-space-800/50 hover:border-rose-500/50 transition-colors">
            <div class="text-2xl md:text-3xl font-bold text-rose-400">100%</div>
            <div class="text-sm text-gray-400">Free & Open Access</div>
          </div>
        </div>
        
        <!-- Additional Detailed Stats -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 animate-slide-up delay-1000">
          <div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30">
            <span class="text-sky-400 font-bold">{{ stats.frameworks }}</span>
            <span class="text-xs text-gray-500">Frameworks & Tools</span>
          </div>
          <div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30">
            <span class="text-purple-400 font-bold">{{ stats.courses }}</span>
            <span class="text-xs text-gray-500">Courses & Tutorials</span>
          </div>
          <div class="flex items-center justify-center gap-2 p-3 bg-space-900/20 rounded-lg border border-space-800/30">
            <span class="text-orange-400 font-bold">{{ stats.countries }}</span>
            <span class="text-xs text-gray-500">Countries Covered</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section>
      <h2 class="text-2xl font-bold mb-8 text-center text-space-100">Browse Categories</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <CategoryCard 
          v-for="category in categories" 
          :key="category.title"
          v-bind="category"
        />
      </div>
    </section>

    <!-- Open Source Section -->
    <section class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-emerald-500/10 to-purple-500/10 blur-3xl rounded-3xl"></div>
      
      <div class="relative bg-space-900/50 backdrop-blur-sm rounded-2xl border border-space-800 p-8 md:p-12 text-center">
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="flex justify-center mb-6">
            <div class="p-4 bg-primary-500/20 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-400">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </div>
          </div>
          
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Open Source & Community Driven
          </h2>
          
          <p class="text-lg text-gray-400 leading-relaxed">
            Awesome Skills is completely open source! Help us build the ultimate AI development resource collection. 
            Contribute new tools, frameworks, MCP servers, or suggest improvements.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="https://github.com/lpatel/awesome-skills" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              Contribute on GitHub
            </a>
            
            <a 
              href="/CONTRIBUTING.md" 
              class="flex items-center gap-3 px-6 py-4 border border-gray-600 hover:border-gray-500 bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white rounded-lg font-semibold transition-all hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 9 3 3 3-3"/>
                <path d="M9 15h6"/>
              </svg>
              View Guidelines
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-sm">
            <div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg">
              <div class="p-2 bg-emerald-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-white">Community Driven</div>
                <div class="text-gray-400">Built by developers, for developers</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg">
              <div class="p-2 bg-blue-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-white">Always Free</div>
                <div class="text-gray-400">Open source forever</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-4 bg-space-800/30 rounded-lg">
              <div class="p-2 bg-purple-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 1.1-.9 2-2 2-.74 0-1.39-.4-1.73-1H14v4a2 2 0 0 1-2 2h-1.28c-.35.6-.98 1-1.72 1-1.1 0-2-.9-2-2 0-.74.4-1.39 1-1.73V14H4a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2 .74 0 1.39.4 1.73 1H8V4a2 2 0 0 1 2-2z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-white">Continuously Updated</div>
                <div class="text-gray-400">Fresh resources added regularly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
}

.delay-700 {
  animation-delay: 0.7s;
  opacity: 0;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Gradient text animation */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Enhanced hover effects */
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
