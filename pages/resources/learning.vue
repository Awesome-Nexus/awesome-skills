<script setup lang="ts">
import { BookOpen, ExternalLink } from 'lucide-vue-next'

useHead({
  title: 'Learning - AI Education',
  meta: [
    { name: 'description', content: 'Courses, tutorials, research papers, and datasets for AI learning.' }
  ]
})

const sections = [
  { name: 'Online Courses', items: ['Fast.ai', 'DeepLearning.AI', 'Coursera ML', 'Stanford CS229', 'MIT 6.034'] },
  { name: 'Tutorials & Guides', items: ['LLM University', 'Pytorch Tutorials', 'Hugging Face Course', 'LangChain Academy'] },
  { name: 'Research Papers', items: ['arXiv', 'Papers with Code', 'Semantic Scholar', 'OpenReview'] },
  { name: 'Datasets', items: ['Hugging Face Datasets', 'Kaggle', 'UCI ML Repo', 'Google Dataset Search'] }
]
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8">
    <div class="flex items-start gap-6">
      <div class="p-4 bg-purple-500/20 rounded-2xl">
        <BookOpen class="w-10 h-10 text-purple-400" />
      </div>
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Learning</h1>
        <p class="text-gray-400 text-lg">
          Courses, tutorials, research papers, and datasets.
        </p>
      </div>
    </div>

    <div class="glass p-6">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 class="text-lg font-semibold text-white mb-1">View Complete Learning Catalog</h3>
          <p class="text-gray-400 text-sm">Browse 2,000+ courses, tutorials, and educational resources</p>
        </div>
        <a 
          href="https://github.com/lpatel/awesome-skills/blob/main/resources/learning/README.md"
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
        <div class="text-2xl font-bold text-purple-400">500+</div>
        <div class="text-sm text-gray-400">Courses</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-purple-400">1M+</div>
        <div class="text-sm text-gray-400">Papers</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-purple-400">1000+</div>
        <div class="text-sm text-gray-400">Datasets</div>
      </div>
      <div class="glass p-4 text-center">
        <div class="text-2xl font-bold text-purple-400">Free</div>
        <div class="text-sm text-gray-400">Access</div>
      </div>
    </div>
  </div>
</template>
