<script setup lang="ts">
interface Props {
  alt?: string
}

withDefaults(defineProps<Props>(), {
  alt: 'Awesome Skills Logo'
})
</script>

<template>
  <div class="h-full w-full" :aria-label="alt">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="50%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="#06b6d4"/>
        </linearGradient>
      </defs>
      
      <!-- Hexagon shape -->
      <path 
        d="M24 4 L42 14 L42 34 L24 44 L6 34 L6 14 Z" 
        fill="url(#logoGrad)" 
        opacity="0.2"
        stroke="url(#logoGrad)"
        stroke-width="2"
      />
      
      <!-- Inner hexagon -->
      <path 
        d="M24 10 L36 17 L36 31 L24 38 L12 31 L12 17 Z" 
        fill="url(#logoGrad)"
      />
      
      <!-- AI circuit pattern -->
      <circle cx="24" cy="24" r="3" fill="white"/>
      <path 
        d="M24 21 L24 14 M24 27 L24 34 M21 24 L14 24 M27 24 L34 24" 
        stroke="white" 
        stroke-width="1.5" 
        stroke-linecap="round"
      />
      <path 
        d="M19 19 L16 16 M29 19 L32 16 M19 29 L16 32 M29 29 L32 32" 
        stroke="white" 
        stroke-width="1" 
        stroke-linecap="round"
        opacity="0.7"
      />
    </svg>
  </div>
</template>
