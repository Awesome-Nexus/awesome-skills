// ===== SKILL Website Interactive Features =====

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initCategoryFilter();
    initSmoothScroll();
    initNavbarScroll();
    initSkillLetters();
});

// ===== Search Functionality =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const categoryCards = document.querySelectorAll('.category-card');
    const resourceLinks = document.querySelectorAll('.resource-list li');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            // Reset all visibility
            categoryCards.forEach(card => card.style.display = '');
            resourceLinks.forEach(link => {
                link.style.display = '';
                link.classList.remove('highlight');
            });
            return;
        }
        
        // Search in category cards
        categoryCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = '';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
        
        // Search in resource links
        resourceLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(query)) {
                link.style.display = '';
                link.classList.add('highlight');
                // Show parent card
                const card = link.closest('.category-card');
                if (card) card.style.display = '';
            } else {
                link.style.display = 'none';
                link.classList.remove('highlight');
            }
        });
    });
}

// ===== Category Filter =====
function initCategoryFilter() {
    const tags = document.querySelectorAll('.search-tags .tag');
    const cards = document.querySelectorAll('.category-card');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Update active state
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            
            const filter = tag.dataset.filter;
            
            // Filter cards
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Scroll to categories
            if (filter !== 'all') {
                document.getElementById('categories').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Navbar Scroll Effect =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove shadow based on scroll
        if (currentScroll > 10) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth transition for navbar
    navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
}

// ===== SKILL Letters Interaction =====
function initSkillLetters() {
    const letters = document.querySelectorAll('.skill-letter');
    
    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            const category = letter.dataset.category;
            
            // Update active tag
            const tag = document.querySelector(`.tag[data-filter="${category}"]`);
            if (tag) {
                tag.click();
            }
            
            // Add click animation
            letter.style.transform = 'scale(0.95)';
            setTimeout(() => {
                letter.style.transform = '';
            }, 150);
        });
    });
}

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        
        // Create mobile menu if it doesn't exist
        if (!document.querySelector('.mobile-nav')) {
            const mobileNav = document.createElement('div');
            mobileNav.className = 'mobile-nav';
            mobileNav.innerHTML = navLinks.innerHTML;
            mobileNav.style.cssText = `
                position: fixed;
                top: 64px;
                left: 0;
                right: 0;
                background: rgba(10, 10, 15, 0.98);
                backdrop-filter: blur(20px);
                padding: 24px;
                display: none;
                flex-direction: column;
                gap: 16px;
                border-bottom: 1px solid var(--color-border);
                z-index: 999;
            `;
            
            mobileNav.querySelectorAll('a').forEach(link => {
                link.style.cssText = `
                    color: var(--color-text);
                    text-decoration: none;
                    font-size: 1.1rem;
                    padding: 12px 0;
                    border-bottom: 1px solid var(--color-border);
                `;
            });
            
            document.body.appendChild(mobileNav);
        }
        
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ===== Copy Code Functionality =====
document.querySelectorAll('.code-content code').forEach(codeBlock => {
    const wrapper = codeBlock.parentElement;
    
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.style.cssText = `
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 6px 12px;
        background: var(--color-bg-tertiary);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        color: var(--color-text-secondary);
        font-size: 0.75rem;
        cursor: pointer;
        transition: var(--transition);
        opacity: 0;
    `;
    
    wrapper.style.position = 'relative';
    wrapper.appendChild(copyBtn);
    
    // Show/hide copy button
    wrapper.addEventListener('mouseenter', () => {
        copyBtn.style.opacity = '1';
    });
    
    wrapper.addEventListener('mouseleave', () => {
        copyBtn.style.opacity = '0';
    });
    
    // Copy functionality
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(codeBlock.textContent);
            copyBtn.textContent = 'Copied!';
            copyBtn.style.color = 'var(--color-accent-green)';
            copyBtn.style.borderColor = 'var(--color-accent-green)';
            
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.style.color = '';
                copyBtn.style.borderColor = '';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.category-card, .path-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // Press / to focus search
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // Press Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.blur();
            searchInput.dispatchEvent(new Event('input'));
        }
    }
});

// ===== Stats Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPlus = target.includes('+');
        const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
        
        if (isNaN(numericValue)) return;
        
        let current = 0;
        const increment = numericValue / 50;
        const suffix = target.replace(/[0-9]/g, '').replace('+', '');
        
        const updateCounter = () => {
            current += increment;
            if (current < numericValue) {
                counter.textContent = Math.floor(current) + suffix + (isPlus ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// ===== Console Easter Egg =====
console.log('%c🧠 Awesome AI SKILL', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cThe world\'s most comprehensive AI development resource hub.', 'font-size: 14px; color: #a1a1aa;');
console.log('%c• Press / to search', 'font-size: 12px; color: #71717a;');
console.log('%c• Explore Systems, Kits, Intelligence, Learning, and Links', 'font-size: 12px; color: #71717a;');
