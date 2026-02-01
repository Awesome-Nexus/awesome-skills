# Awesome Skills

A comprehensive Nuxt.js 3 project showcasing the Skills framework for AI-powered development with Model Context Protocol support.

## Features

- 🎨 **Dark Theme Design** - Modern dark UI with gradient accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Nuxt 3 + Vue 3** - Built with the latest Vue ecosystem
- 🔧 **TypeScript** - Type-safe development
- 🎭 **Tailwind CSS** - Utility-first styling
- ✨ **Animations** - Smooth transitions and micro-interactions
- 🧩 **Component-based** - Modular and reusable components

## Project Structure

```
.
├── assets/
│   └── css/
│       └── tailwind.css      # Global styles and Tailwind imports
├── components/
│   ├── Navbar.vue            # Navigation component
│   ├── Hero.vue              # Hero section
│   ├── SkillVisual.vue       # Skills framework visualization
│   ├── CategoryCard.vue      # Category cards grid
│   ├── McpHighlight.vue      # MCP feature highlight
│   ├── StatsSection.vue      # Stats with animated counters
│   ├── LearningPaths.vue     # Learning path cards
│   └── Footer.vue            # Footer component
├── layouts/
│   └── default.vue           # Default layout wrapper
├── pages/
│   └── index.vue             # Homepage
├── public/
│   └── favicon.svg           # Site favicon
├── app.vue                   # Root app component
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Generate Static Site

```bash
npm run generate
# or
yarn generate
```

## The Skills Framework

The project is organized around five core pillars:

- **S**ystems - Core infrastructure and architecture patterns
- **K**its - Development tools and component libraries
- **I**ntelligence - AI models and reasoning systems
- **L**earning - Training data and optimization
- **L**inks - Integration and connectivity layer

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark | `#0a0a0f` |
| Background Alt | Dark 50 | `#1a1a25` |
| Primary Blue | Systems | `#3b82f6` |
| Primary Purple | Kits | `#8b5cf6` |
| Primary Green | Intelligence | `#10b981` |
| Primary Orange | Learning | `#f59e0b` |
| Primary Red | Links | `#ef4444` |

## Customization

### Adding New Categories

Edit `components/CategoryCard.vue` and add to the `categories` array:

```javascript
{
  id: 'your-category',
  name: 'Your Category',
  description: 'Description here',
  resourceCount: 100,
  subCategories: 5,
  tags: ['Tag1', 'Tag2'],
  // ... styling classes
}
```

### Adding New Learning Paths

Edit `components/LearningPaths.vue` and add to the `learningPaths` array.

## License

MIT License - feel free to use this project as a template for your own awesome lists!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
