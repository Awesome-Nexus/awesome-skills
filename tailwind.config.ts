import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            colors: {
                // Modern Educational Dark Theme (Slate & Indigo)
                space: {
                    950: '#0f172a', // Main Background: Slate 900 - Professional Deep Blue-Grey
                    900: '#1e293b', // Card Background: Slate 800 - Comfortable contrast
                    800: '#334155', // Border / Hover: Slate 700 - Subtle definition
                    700: '#475569', // Additional shade for better gradients
                    100: '#f8fafc'  // Text: Slate 50 - High readability
                },
                primary: {
                    500: '#3b82f6', // Blue 500 - Professional, Tech-focused
                    400: '#60a5fa', // Blue 400 - Light text highlight
                    600: '#2563eb', // Blue 600 - Deep interaction
                    100: '#dbeafe'  // Blue 100 - Soft tint
                },
                accent: {
                    cyan: '#06b6d4',   // Cyan 500 - Tech/Future
                    purple: '#a855f7', // Purple 500 - Creative/AI
                    pink: '#ec4899',   // Pink 500 - Arts/Expressive
                    teal: '#14b8a6',   // Teal 500 - Growth/Learning
                    amber: '#f59e0b',  // Amber 500 - Energy/Intelligence
                }
            },
            fontFamily: {
                sans: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
                mono: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '.5' }
                }
            }
        }
    },
    plugins: []
}
