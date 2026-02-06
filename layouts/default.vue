<template>
  <div class="min-h-screen bg-[#0B0C15] flex">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 z-50 w-72 bg-[#131620] border-r border-white/5 flex flex-col">
      <!-- Logo -->
      <div class="p-6 border-b border-white/5">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <h1 class="text-lg font-bold text-white">Awesome Skills</h1>
            <p class="text-xs text-gray-500">AI Development Hub</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
        <div class="mb-4">
          <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Categories</p>
          <NuxtLink v-for="item in categories" :key="item.path" :to="item.path" class="sidebar-link" active-class="sidebar-link-active">
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
            <span v-if="item.badge" class="ml-auto px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full">
              {{ item.badge }}
            </span>
          </NuxtLink>
        </div>

        <div class="pt-4 border-t border-white/5">
          <p class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">General</p>
          <NuxtLink to="/search" class="sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <span>Search</span>
          </NuxtLink>
          <NuxtLink to="/about" class="sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
            <span>About</span>
          </NuxtLink>
        </div>
      </nav>

      <!-- Footer -->
      <div class="p-4 border-t border-white/5">
        <a href="https://github.com/lpatel/awesome-skills" target="_blank" rel="noopener noreferrer" class="sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 ml-72 min-h-screen">
      <!-- Top Header -->
      <header class="sticky top-0 z-40 bg-[#0B0C15]/80 backdrop-blur-xl border-b border-white/5">
        <div class="flex items-center justify-between px-8 h-16">
          <div class="flex items-center gap-4">
            <div class="relative w-96">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search AI resources, tools, frameworks..." 
                class="input-search pl-10"
              />
              <kbd class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-gray-500 bg-white/5 rounded border border-white/10">⌘K</kbd>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span class="text-sm text-blue-400">5,100+ Resources</span>
            </div>
            
            <span class="px-2 py-1 text-xs text-gray-500 bg-white/5 rounded border border-white/10">v1.0.0</span>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="p-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { 
  Cpu, 
  Wrench, 
  Brain, 
  BookOpen, 
  Plug,
  Shield,
  Search,
  Info
} from 'lucide-vue-next'

const categories = [
  { name: 'Systems', path: '/resources/systems', icon: Cpu, badge: '200+' },
  { name: 'Kits', path: '/resources/kits', icon: Wrench, badge: '500+' },
  { name: 'Intelligence', path: '/resources/intelligence', icon: Brain, badge: '150+' },
  { name: 'Learning', path: '/resources/learning', icon: BookOpen, badge: '500+' },
  { name: 'Links', path: '/resources/links', icon: Plug, badge: '60+' },
  { name: 'Security', path: '/resources/security', icon: Shield, badge: '100+' },
]
</script>
