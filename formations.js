// Formations Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize filters
    initializeFilters();
    
    // Initialize modal
    initializeModal();
    
    // Initialize mobile navigation
    initializeMobileNav();
});

// Filter functionality
function initializeFilters() {
    const domaineFilter = document.getElementById('domaine-filter');
    const diplomeFilter = document.getElementById('diplome-filter');
    const dureeFilter = document.getElementById('duree-filter');
    const resetButton = document.getElementById('reset-filters');
    const formationsGrid = document.getElementById('formations-grid');
    
    // Add event listeners
    [domaineFilter, diplomeFilter, dureeFilter].forEach(filter => {
        filter.addEventListener('change', filterFormations);
    });
    
    resetButton.addEventListener('click', resetFilters);
    
    function filterFormations() {
        const selectedDomaine = domaineFilter.value;
        const selectedDiplome = diplomeFilter.value;
        const selectedDuree = dureeFilter.value;
        
        const formationCards = document.querySelectorAll('.formation-card');
        let visibleCount = 0;
        
        // Add loading state
        formationsGrid.classList.add('loading');
        
        setTimeout(() => {
            formationCards.forEach(card => {
                const cardDomaine = card.dataset.domaine;
                const cardDiplome = card.dataset.diplome;
                const cardDuree = card.dataset.duree;
                
                let showCard = true;
                
                // Check domaine filter
                if (selectedDomaine && cardDomaine !== selectedDomaine) {
                    showCard = false;
                }
                
                // Check diplome filter
                if (selectedDiplome && cardDiplome !== selectedDiplome) {
                    showCard = false;
                }
                
                // Check duree filter
                if (selectedDuree && cardDuree !== selectedDuree) {
                    showCard = false;
                }
                
                if (showCard) {
                    card.classList.remove('hidden');
                    card.classList.add('fade-in');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('fade-in');
                }
            });
            
            // Show no results message if needed
            showNoResultsMessage(visibleCount === 0);
            
            // Remove loading state
            formationsGrid.classList.remove('loading');
        }, 300);
    }
    
    function resetFilters() {
        domaineFilter.value = '';
        diplomeFilter.value = '';
        dureeFilter.value = '';
        
        const formationCards = document.querySelectorAll('.formation-card');
        formationCards.forEach(card => {
            card.classList.remove('hidden', 'fade-in');
        });
        
        showNoResultsMessage(false);
    }
    
    function showNoResultsMessage(show) {
        let noResultsDiv = document.getElementById('no-results');
        
        if (show && !noResultsDiv) {
            noResultsDiv = document.createElement('div');
            noResultsDiv.id = 'no-results';
            noResultsDiv.className = 'no-results';
            noResultsDiv.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>Aucune formation trouvée</h3>
                <p>Essayez de modifier vos critères de recherche ou contactez-nous pour plus d'informations.</p>
                <button class="btn btn-primary" onclick="resetFilters()">Réinitialiser les filtres</button>
            `;
            formationsGrid.appendChild(noResultsDiv);
        } else if (!show && noResultsDiv) {
            noResultsDiv.remove();
        }
    }
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('formation-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openFormationDetails(formationType) {
    const modal = document.getElementById('formation-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Get formation details based on type
    const formationDetails = getFormationDetails(formationType);
    
    // Populate modal content
    modalBody.innerHTML = formationDetails;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade-in animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('formation-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add fade-out animation
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function getFormationDetails(formationType) {
    const formations = {
        'sciences-gestion': {
            title: 'Sciences de Gestion (DUT)',
            subtitle: 'Formation diplômante de niveau DUT',
            content: `
                <div class="formation-detail-section">
                    <h3>Présentation</h3>
                    <p>Formation diplômante de niveau DUT dans le domaine des sciences de gestion, préparant aux métiers de la gestion d'entreprise avec plusieurs spécialisations professionnelles.</p>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Durée et Structure</h3>
                    <div class="formation-detail-grid">
                        <div class="formation-detail-item">
                            <div class="label">Durée</div>
                            <div class="value">2 années universitaires</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Rythme</div>
                            <div class="value">Formation initiale avec stages</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Crédits</div>
                            <div class="value">120 crédits ECTS</div>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Spécialisations</h3>
                    <ul class="formation-detail-list">
                        <li>QHSE (Qualité, Hygiène, Sécurité, Environnement)</li>
                        <li>Gestion des ressources humaines</li>
                        <li>Commerce international</li>
                        <li>Communication et marketing digital</li>
                        <li>Banque finance</li>
                        <li>Transit douane</li>
                        <li>Gestion maritime et portuaire</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Public Cible</h3>
                    <ul class="formation-detail-list">
                        <li>Bacheliers toutes séries</li>
                        <li>Étudiants en réorientation</li>
                        <li>Professionnels en reconversion</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Coût et Financement</h3>
                    <div class="formation-detail-costs">
                        <h4>Frais de formation</h4>
                        <div class="cost-item">
                            <span class="cost-label">Frais d'inscription</span>
                            <span class="cost-value">100 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Frais de scolarité annuels</span>
                            <span class="cost-value">850 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Frais de dossier</span>
                            <span class="cost-value">Inclus dans les frais d'inscription</span>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Débouchés Professionnels</h3>
                    <ul class="formation-detail-list">
                        <li>Assistant(e) chef de projet QHSE</li>
                        <li>Assistant(e) ressources humaines</li>
                        <li>Agent de transit et douane</li>
                        <li>Chargé(e) de clientèle bancaire</li>
                        <li>Assistant(e) commercial export</li>
                        <li>Agent de gestion portuaire</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Documents Requis</h3>
                    <ul class="formation-detail-list">
                        <li>Copie certifiée du Baccalauréat</li>
                        <li>Relevé de notes du Bac</li>
                        <li>Extrait d'acte de naissance</li>
                        <li>4 photos d'identité</li>
                        <li>2 rames de papier</li>
                        <li>9 rouleaux de papier hygiénique</li>
                        <li>Chemise cartonnée</li>
                    </ul>
                </div>
            `
        },
        'aviation': {
            title: 'Aviation Civile',
            subtitle: 'Formations spécialisées aux métiers de l\'aviation civile',
            content: `
                <div class="formation-detail-section">
                    <h3>Présentation</h3>
                    <p>Formations spécialisées aux métiers de l'aviation civile, allant de l'accueil à la gestion des opérations aéroportuaires.</p>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Programmes Disponibles</h3>
                    <ul class="formation-detail-list">
                        <li><strong>Agent d'escale commercial</strong>
                            <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                                <li>Option accueil et enregistrement</li>
                                <li>Formation en billeterie</li>
                            </ul>
                        </li>
                        <li><strong>Hôtesse de l'air et steward</strong>
                            <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                                <li>Certificat de formation au personnel navigant commercial</li>
                            </ul>
                        </li>
                        <li><strong>Management des opérations aéroportuaires</strong>
                            <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                                <li>Gestion des opérations au sol</li>
                                <li>Coordination aéroportuaire</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Durée et Structure</h3>
                    <div class="formation-detail-grid">
                        <div class="formation-detail-item">
                            <div class="label">Durée</div>
                            <div class="value">6 à 24 mois</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Rythme</div>
                            <div class="value">Alternance théorique et pratique</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Stages</div>
                            <div class="value">Stages pratiques en milieu professionnel</div>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Public Cible</h3>
                    <ul class="formation-detail-list">
                        <li>Niveau Bac minimum pour la plupart des formations</li>
                        <li>Exigences spécifiques selon les programmes (taille, langues, etc.)</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Coût et Financement</h3>
                    <div class="formation-detail-costs">
                        <h4>Frais de formation</h4>
                        <div class="cost-item">
                            <span class="cost-label">Frais d'inscription</span>
                            <span class="cost-value">100 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Frais de formation</span>
                            <span class="cost-value">1 000 000 - 1 200 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Uniforme</span>
                            <span class="cost-value">100 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Uniforme TP et stage</span>
                            <span class="cost-value">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Débouchés Professionnels</h3>
                    <ul class="formation-detail-list">
                        <li>Agent d'escale aérienne</li>
                        <li>Personnel navigant commercial</li>
                        <li>Chef d'équipe escale</li>
                        <li>Agent de trafic aérien</li>
                        <li>Responsable des opérations aéroportuaires</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Documents Requis</h3>
                    <ul class="formation-detail-list">
                        <li>Copie certifiée du Baccalauréat</li>
                        <li>Relevé de notes du Bac</li>
                        <li>Extrait d'acte de naissance</li>
                        <li>4 photos d'identité</li>
                        <li>Certificat médical d'aptitude</li>
                        <li>CV et lettre de motivation</li>
                    </ul>
                </div>
            `
        },
        'certifiantes': {
            title: 'Formations Certifiantes (6 mois)',
            subtitle: 'Programmes intensifs de spécialisation technique',
            content: `
                <div class="formation-detail-section">
                    <h3>Présentation</h3>
                    <p>Programmes intensifs de spécialisation technique dans les métiers de l'aviation et de la logistique aéroportuaire.</p>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Programmes Disponibles</h3>
                    <ul class="formation-detail-list">
                        <li>Traitement de bagages et chargement avion</li>
                        <li>Traitement de la touché</li>
                        <li>Conduite d'engins légers (permis B requis)</li>
                        <li>Service toilette et eau potable</li>
                        <li>GPU (Ground Power Unit)</li>
                        <li>Marchalling (guidage d'avion)</li>
                        <li>Arrimage et palettisation</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Durée et Structure</h3>
                    <div class="formation-detail-grid">
                        <div class="formation-detail-item">
                            <div class="label">Durée</div>
                            <div class="value">6 mois intensifs</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Rythme</div>
                            <div class="value">70% pratique, 30% théorique</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Validation</div>
                            <div class="value">Certification professionnelle</div>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Public Cible</h3>
                    <ul class="formation-detail-list">
                        <li>Niveau 5ème à Terminale selon les formations</li>
                        <li>Permis B requis pour la conduite d'engins</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Coût et Financement</h3>
                    <div class="formation-detail-costs">
                        <h4>Frais de formation</h4>
                        <div class="cost-item">
                            <span class="cost-label">Frais d'inscription</span>
                            <span class="cost-value">100 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Frais de formation</span>
                            <span class="cost-value">1 200 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Acompte à l'inscription</span>
                            <span class="cost-value">500 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Uniforme</span>
                            <span class="cost-value">100 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Uniforme TP</span>
                            <span class="cost-value">50 000 FCFA</span>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Débouchés Professionnels</h3>
                    <ul class="formation-detail-list">
                        <li>Agent de piste</li>
                        <li>Agent de handling</li>
                        <li>Chauffeur d'engins aéroportuaires</li>
                        <li>Agent de service technique</li>
                        <li>Agent de rampe</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Documents Requis</h3>
                    <ul class="formation-detail-list">
                        <li>Copie des derniers diplômes</li>
                        <li>Relevé de notes</li>
                        <li>Extrait d'acte de naissance</li>
                        <li>4 photos d'identité</li>
                        <li>Permis de conduire (pour certaines formations)</li>
                        <li>Certificat médical d'aptitude</li>
                    </ul>
                </div>
            `
        },
        'logistique': {
            title: 'École Spécialisée de Logistique (Licence)',
            subtitle: 'Formation diplômante de niveau Licence',
            content: `
                <div class="formation-detail-section">
                    <h3>Présentation</h3>
                    <p>Formation diplômante de niveau Licence dans le domaine de la logistique avec différentes spécialisations sectorielles.</p>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Spécialisations</h3>
                    <ul class="formation-detail-list">
                        <li>Logistique pétrolière et industrielle</li>
                        <li>Logistique aéroportuaire</li>
                        <li>Logistique approvisionnement et gestion de stock</li>
                        <li>Logistique achat et vente prestations</li>
                        <li>Logistique maritime internationale</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Durée et Structure</h3>
                    <div class="formation-detail-grid">
                        <div class="formation-detail-item">
                            <div class="label">Durée</div>
                            <div class="value">3 années universitaires</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Rythme</div>
                            <div class="value">Formation initiale avec stages</div>
                        </div>
                        <div class="formation-detail-item">
                            <div class="label">Crédits</div>
                            <div class="value">180 crédits ECTS</div>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Public Cible</h3>
                    <ul class="formation-detail-list">
                        <li>Titulaires d'un Baccalauréat</li>
                        <li>Titulaires d'un DUT/BTS en logistique</li>
                        <li>Professionnels en reconversion</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Coût et Financement</h3>
                    <div class="formation-detail-costs">
                        <h4>Frais de formation</h4>
                        <div class="cost-item">
                            <span class="cost-label">Frais d'inscription</span>
                            <span class="cost-value">100 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Frais de scolarité annuels</span>
                            <span class="cost-value">À confirmer</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Frais de dossier</span>
                            <span class="cost-value">Inclus dans les frais d'inscription</span>
                        </div>
                    </div>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Débouchés Professionnels</h3>
                    <ul class="formation-detail-list">
                        <li>Responsable logistique</li>
                        <li>Chef de dépôt</li>
                        <li>Analyste de la supply chain</li>
                        <li>Coordinateur transport</li>
                        <li>Gestionnaire de stocks</li>
                        <li>Agent de transit international</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Documents Requis</h3>
                    <ul class="formation-detail-list">
                        <li>Copie certifiée du Baccalauréat</li>
                        <li>Relevé de notes du Bac</li>
                        <li>Extrait d'acte de naissance</li>
                        <li>4 photos d'identité</li>
                        <li>CV et lettre de motivation pour les professionnels</li>
                    </ul>
                </div>
            `
        },
        'anglais': {
            title: 'Formation en Anglais Intensif',
            subtitle: 'Programme de renforcement linguistique',
            content: `
                <div class="formation-detail-section">
                    <h3>Présentation</h3>
                    <p>Programme de renforcement linguistique et préparation aux environnements professionnels internationaux.</p>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Caractéristiques</h3>
                    <ul class="formation-detail-list">
                        <li>Programme de renforcement linguistique</li>
                        <li>Préparation aux environnements professionnels internationaux</li>
                        <li>Durée variable selon le niveau initial</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Public Cible</h3>
                    <ul class="formation-detail-list">
                        <li>Étudiants souhaitant améliorer leur niveau d'anglais</li>
                        <li>Professionnels préparant des carrières internationales</li>
                        <li>Personnes en reconversion professionnelle</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Coût et Financement</h3>
                    <div class="formation-detail-costs">
                        <h4>Frais de formation</h4>
                        <div class="cost-item">
                            <span class="cost-label">Frais d'inscription</span>
                            <span class="cost-value">100 000 FCFA</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Frais de formation</span>
                            <span class="cost-value">Sur demande</span>
                        </div>
                    </div>
                </div>
            `
        },
        'stages': {
            title: 'Stages Offerts',
            subtitle: 'Intégration dans le parcours de formation',
            content: `
                <div class="formation-detail-section">
                    <h3>Présentation</h3>
                    <p>Intégration dans le parcours de formation avec partenariats entreprises et convention de stage fournie par l'école.</p>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Caractéristiques</h3>
                    <ul class="formation-detail-list">
                        <li>Intégration dans le parcours de formation</li>
                        <li>Partenariats avec des entreprises du secteur</li>
                        <li>Convention de stage fournie par l'école</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Avantages</h3>
                    <ul class="formation-detail-list">
                        <li>Expérience professionnelle pratique</li>
                        <li>Réseau professionnel étendu</li>
                        <li>Possibilité d'embauche après stage</li>
                        <li>Convention officielle de stage</li>
                    </ul>
                </div>
                
                <div class="formation-detail-section">
                    <h3>Coût</h3>
                    <div class="formation-detail-costs">
                        <h4>Frais de stage</h4>
                        <div class="cost-item">
                            <span class="cost-label">Gratuit</span>
                            <span class="cost-value">Inclus dans la formation</span>
                        </div>
                        <div class="cost-item">
                            <span class="cost-label">Convention</span>
                            <span class="cost-value">Fournie par l'école</span>
                        </div>
                    </div>
                </div>
            `
        }
    };
    
    return `
        <div class="formation-detail-header">
            <h2 class="formation-detail-title">${formations[formationType].title}</h2>
            <p class="formation-detail-subtitle">${formations[formationType].subtitle}</p>
        </div>
        <div class="formation-detail-content">
            ${formations[formationType].content}
        </div>
    `;
}

// Mobile navigation
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

// Scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Reset filters function (called from HTML)
function resetFilters() {
    const domaineFilter = document.getElementById('domaine-filter');
    const diplomeFilter = document.getElementById('diplome-filter');
    const dureeFilter = document.getElementById('duree-filter');
    
    if (domaineFilter) domaineFilter.value = '';
    if (diplomeFilter) diplomeFilter.value = '';
    if (dureeFilter) dureeFilter.value = '';
    
    const formationCards = document.querySelectorAll('.formation-card');
    formationCards.forEach(card => {
        card.classList.remove('hidden', 'fade-in');
    });
    
    const noResultsDiv = document.getElementById('no-results');
    if (noResultsDiv) {
        noResultsDiv.remove();
    }
}

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

// Animation on scroll
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

// Observe formation cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const formationCards = document.querySelectorAll('.formation-card');
    
    formationCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
