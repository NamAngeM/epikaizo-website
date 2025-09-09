// Search Page JavaScript

// Search data - This would typically come from a database or API
const searchData = [
    {
        id: 1,
        title: "Sciences de Gestion DUT",
        content: "Formation diplômante de niveau DUT dans le domaine des sciences de gestion, préparant aux métiers de la gestion d'entreprise avec plusieurs spécialisations professionnelles.",
        type: "formation",
        domain: "gestion",
        level: "dut",
        url: "formation-detail.html",
        tags: ["gestion", "dut", "entreprise", "spécialisations"]
    },
    {
        id: 2,
        title: "Aviation Civile",
        content: "Formations spécialisées aux métiers de l'aviation civile, allant de l'accueil à la gestion des opérations aéroportuaires.",
        type: "formation",
        domain: "aviation",
        level: "certification",
        url: "formations.html#aviation",
        tags: ["aviation", "aéroport", "escale", "navigant"]
    },
    {
        id: 3,
        title: "École Spécialisée de Logistique",
        content: "Formation d'excellence en logistique et supply chain avec des débouchés dans les secteurs du transport et de la distribution.",
        type: "ecole",
        domain: "logistique",
        level: "licence",
        url: "ecoles.html#logistics-school",
        tags: ["logistique", "supply chain", "transport", "distribution"]
    },
    {
        id: 4,
        title: "Processus d'Admission",
        content: "Découvrez les étapes pour intégrer EPIKAIZO UNIVERSITY : choix de formation, dossier de candidature, entretien, réponse et inscription définitive.",
        type: "admission",
        domain: "all",
        level: "all",
        url: "admissions.html",
        tags: ["admission", "candidature", "entretien", "inscription"]
    },
    {
        id: 5,
        title: "Frais de Scolarité",
        content: "Informations détaillées sur les frais d'inscription, de scolarité et les possibilités de financement pour toutes nos formations.",
        type: "admission",
        domain: "all",
        level: "all",
        url: "admissions.html#frais",
        tags: ["frais", "scolarité", "financement", "coût"]
    },
    {
        id: 6,
        title: "Stages en Entreprise",
        content: "Découvrez nos offres de stages en entreprise pour l'année 2025. Partenariats avec des entreprises leaders du secteur.",
        type: "actualite",
        domain: "all",
        level: "all",
        url: "index.html#actualites",
        tags: ["stages", "entreprise", "partenariats", "2025"]
    },
    {
        id: 7,
        title: "QHSE - Qualité, Hygiène, Sécurité, Environnement",
        content: "Spécialisation en QHSE dans le cadre du DUT Sciences de Gestion. Formation aux normes internationales et réglementations.",
        type: "formation",
        domain: "qhse",
        level: "dut",
        url: "formation-detail.html#qhse",
        tags: ["qhse", "qualité", "sécurité", "environnement", "normes"]
    },
    {
        id: 8,
        title: "Formations Certifiantes 6 mois",
        content: "Programmes intensifs de spécialisation technique dans les métiers de l'aviation et de la logistique aéroportuaire.",
        type: "formation",
        domain: "aviation",
        level: "certification",
        url: "formations.html#certifications",
        tags: ["certification", "6 mois", "intensif", "technique"]
    },
    {
        id: 9,
        title: "Vie Étudiante",
        content: "Associations étudiantes, activités culturelles et sportives, services aux étudiants. Découvrez la vie sur le campus EPIKAIZO.",
        type: "ecole",
        domain: "all",
        level: "all",
        url: "ecoles.html#vie-etudiante",
        tags: ["vie étudiante", "associations", "campus", "activités"]
    },
    {
        id: 10,
        title: "Partenaires Internationaux",
        content: "Collaboration avec des universités et entreprises internationales. Programmes d'échange et formations à l'étranger.",
        type: "about",
        domain: "all",
        level: "all",
        url: "about.html#partenaires",
        tags: ["international", "partenaires", "échange", "collaboration"]
    }
];

let currentResults = [];
let currentQuery = '';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    initSearch();
    
    // Initialize popular tags
    initPopularTags();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Load initial results (show all)
    performSearch('');
});

function initSearch() {
    const searchInput = document.getElementById('mainSearchInput');
    const contentTypeSelect = document.getElementById('contentType');
    const domainSelect = document.getElementById('domain');
    const levelSelect = document.getElementById('level');
    
    // Search on input
    searchInput.addEventListener('input', function() {
        currentQuery = this.value;
        performSearch(currentQuery);
    });
    
    // Search on filter change
    [contentTypeSelect, domainSelect, levelSelect].forEach(select => {
        select.addEventListener('change', function() {
            performSearch(currentQuery);
        });
    });
    
    // Search on enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
}

function performSearch(query) {
    const contentType = document.getElementById('contentType').value;
    const domain = document.getElementById('domain').value;
    const level = document.getElementById('level').value;
    
    // Show loading
    showLoading();
    
    // Simulate API delay
    setTimeout(() => {
        let results = searchData;
        
        // Filter by content type
        if (contentType !== 'all') {
            results = results.filter(item => item.type === contentType);
        }
        
        // Filter by domain
        if (domain !== 'all') {
            results = results.filter(item => item.domain === domain || item.domain === 'all');
        }
        
        // Filter by level
        if (level !== 'all') {
            results = results.filter(item => item.level === level || item.level === 'all');
        }
        
        // Filter by query
        if (query.trim()) {
            results = results.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.content.toLowerCase().includes(query.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
            );
        }
        
        currentResults = results;
        displayResults(results, query);
    }, 500);
}

function displayResults(results, query) {
    const resultsList = document.getElementById('resultsList');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    const resultsTitle = document.getElementById('resultsTitle');
    
    // Update count
    resultsCount.textContent = results.length;
    
    // Update title
    if (query.trim()) {
        resultsTitle.textContent = `Résultats pour "${query}"`;
    } else {
        resultsTitle.textContent = 'Tous les résultats';
    }
    
    // Clear previous results
    resultsList.innerHTML = '';
    
    if (results.length === 0) {
        noResults.style.display = 'block';
        resultsList.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        resultsList.style.display = 'block';
        
        results.forEach(result => {
            const resultElement = createResultElement(result, query);
            resultsList.appendChild(resultElement);
        });
    }
}

function createResultElement(result, query) {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.onclick = () => window.location.href = result.url;
    
    const highlightedTitle = highlightText(result.title, query);
    const highlightedContent = highlightText(result.content, query);
    
    div.innerHTML = `
        <div class="result-header">
            <div>
                <h3 class="result-title">${highlightedTitle}</h3>
            </div>
            <span class="result-type">${getTypeLabel(result.type)}</span>
        </div>
        <div class="result-content">${highlightedContent}</div>
        <div class="result-meta">
            <span><i class="fas fa-tag"></i> ${result.tags.join(', ')}</span>
            <span><i class="fas fa-external-link-alt"></i> Voir plus</span>
        </div>
    `;
    
    return div;
}

function highlightText(text, query) {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function getTypeLabel(type) {
    const labels = {
        'formation': 'Formation',
        'ecole': 'École',
        'admission': 'Admission',
        'actualite': 'Actualité',
        'about': 'À Propos'
    };
    return labels[type] || 'Autre';
}

function showLoading() {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
        </div>
    `;
}

function initPopularTags() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const searchInput = document.getElementById('mainSearchInput');
            searchInput.value = this.textContent;
            currentQuery = this.textContent;
            performSearch(this.textContent);
        });
    });
}

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Global search function for other pages
function globalSearch(query) {
    if (query.trim()) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
}

// Handle URL parameters
function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (query) {
        const searchInput = document.getElementById('mainSearchInput');
        searchInput.value = query;
        currentQuery = query;
        performSearch(query);
    }
}

// Initialize URL params handling
handleURLParams();
