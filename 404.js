// 404 Error Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initializeMobileNav();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize animations
    initializeAnimations();
});

// Mobile Navigation
function initializeMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBox = document.querySelector('.search-box');
    
    // Create search results dropdown
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchResults.id = 'search-results';
    searchBox.appendChild(searchResults);
    
    // Search suggestions data
    const searchData = [
        {
            title: 'Formations',
            description: 'Découvrez nos programmes de formation',
            url: 'formations.html',
            keywords: ['formations', 'programmes', 'cours', 'études']
        },
        {
            title: 'Sciences de Gestion (DUT)',
            description: 'Formation diplômante de niveau DUT',
            url: 'formation-detail.html',
            keywords: ['sciences', 'gestion', 'dut', 'qhse', 'rh']
        },
        {
            title: 'Aviation Civile',
            description: 'Formations spécialisées aux métiers de l\'aviation',
            url: 'formations.html#aviation',
            keywords: ['aviation', 'pilote', 'hôtesse', 'steward', 'aéroport']
        },
        {
            title: 'École de Logistique',
            description: 'Formation en logistique et supply chain',
            url: 'formations.html#logistique',
            keywords: ['logistique', 'supply', 'chain', 'transport', 'stock']
        },
        {
            title: 'Admissions',
            description: 'Processus d\'inscription et conditions d\'admission',
            url: 'admissions.html',
            keywords: ['admissions', 'inscription', 'candidature', 'dossier']
        },
        {
            title: 'Contact',
            description: 'Nous contacter et nous trouver',
            url: 'contact.html',
            keywords: ['contact', 'adresse', 'téléphone', 'email']
        },
        {
            title: 'Écoles',
            description: 'Découvrez nos deux écoles spécialisées',
            url: 'ecoles.html',
            keywords: ['écoles', 'aviation school', 'logistique', 'installations']
        },
        {
            title: 'Pré-inscription',
            description: 'Commencez votre inscription en ligne',
            url: 'pre-inscription.html',
            keywords: ['pré-inscription', 'inscription', 'en ligne', 'formulaire']
        }
    ];
    
    // Search input event listeners
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length > 0) {
            performSearch(query);
        } else {
            hideSearchResults();
        }
    });
    
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length > 0) {
            showSearchResults();
        }
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target)) {
            hideSearchResults();
        }
    });
    
    // Perform search function
    window.performSearch = function(query) {
        if (!query) {
            query = searchInput.value.trim();
        }
        
        if (query.length === 0) {
            hideSearchResults();
            return;
        }
        
        // Add loading state
        searchBox.classList.add('search-loading');
        
        // Simulate search delay
        setTimeout(() => {
            const results = searchData.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
            );
            
            displaySearchResults(results);
            searchBox.classList.remove('search-loading');
        }, 300);
    };
    
    function displaySearchResults(results) {
        const searchResults = document.getElementById('search-results');
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-title">Aucun résultat trouvé</div>
                    <div class="search-result-description">Essayez avec d'autres mots-clés</div>
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" onclick="navigateTo('${result.url}')">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-description">${result.description}</div>
                </div>
            `).join('');
        }
        
        showSearchResults();
    }
    
    function showSearchResults() {
        const searchResults = document.getElementById('search-results');
        searchResults.classList.add('active');
    }
    
    function hideSearchResults() {
        const searchResults = document.getElementById('search-results');
        searchResults.classList.remove('active');
    }
    
    // Navigation function
    window.navigateTo = function(url) {
        window.location.href = url;
    };
}

// Search for specific terms
window.searchFor = function(term) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = term;
    performSearch(term);
};

// Navigation Functions
window.goHome = function() {
    window.location.href = 'index.html';
};

window.goBack = function() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
};

// Animations
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.error-message, .search-section, .quick-links, .action-buttons');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #667eea';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add keyboard navigation for search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            const searchResults = document.getElementById('search-results');
            const resultItems = searchResults.querySelectorAll('.search-result-item');
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const activeItem = searchResults.querySelector('.search-result-item.active');
                if (activeItem) {
                    activeItem.classList.remove('active');
                    const nextItem = activeItem.nextElementSibling;
                    if (nextItem) {
                        nextItem.classList.add('active');
                    } else {
                        resultItems[0].classList.add('active');
                    }
                } else if (resultItems.length > 0) {
                    resultItems[0].classList.add('active');
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const activeItem = searchResults.querySelector('.search-result-item.active');
                if (activeItem) {
                    activeItem.classList.remove('active');
                    const prevItem = activeItem.previousElementSibling;
                    if (prevItem) {
                        prevItem.classList.add('active');
                    } else {
                        resultItems[resultItems.length - 1].classList.add('active');
                    }
                } else if (resultItems.length > 0) {
                    resultItems[resultItems.length - 1].classList.add('active');
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const activeItem = searchResults.querySelector('.search-result-item.active');
                if (activeItem) {
                    activeItem.click();
                } else {
                    performSearch();
                }
            } else if (e.key === 'Escape') {
                hideSearchResults();
                searchInput.blur();
            }
        });
    }
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to quick links
    const quickLinks = document.querySelectorAll('.quick-link');
    
    quickLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects to suggestion tags
    const suggestionTags = document.querySelectorAll('.suggestion-tag');
    
    suggestionTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add loading animation for page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyles);
