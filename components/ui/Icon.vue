<script setup lang="ts">
import { 
  Cpu, 
  Wrench, 
  Brain, 
  BookOpen, 
  Plug,
  Shield,
  Github,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Menu,
  X,
  Search,
  Database,
  Code,
  type LucideIcon
} from 'lucide-vue-next'

interface Props {
  name: keyof typeof icons
  size?: number | string
  class?: string
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  strokeWidth: 2
})

const icons = {
  cpu: Cpu,
  wrench: Wrench,
  brain: Brain,
  book: BookOpen,
  plug: Plug,
  shield: Shield,
  github: Github,
  external: ExternalLink,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'chevron-down': ChevronDown,
  menu: Menu,
  close: X,
  search: Search,
  database: Database,
  code: Code
}

const iconComponent = computed(() => icons[props.name] || Cpu)
</script>

<template>
  <component
    :is="iconComponent"
    :size="size"
    :stroke-width="strokeWidth"
    :class="class"
  />
</template>
