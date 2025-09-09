// Admissions Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initializeMobileNav();
    
    // Initialize document checkboxes
    initializeDocumentCheckboxes();
    
    // Initialize pre-registration form
    initializePreregistrationForm();
    
    // Initialize scroll animations
    initializeScrollAnimations();
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

// Document Checkboxes
function initializeDocumentCheckboxes() {
    const checkboxes = document.querySelectorAll('.document-checkbox');
    const checkAllBtn = document.getElementById('check-all');
    const downloadListBtn = document.getElementById('download-list');
    
    // Individual checkbox functionality
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateProgress();
        });
    });
    
    // Check all functionality
    if (checkAllBtn) {
        checkAllBtn.addEventListener('click', function() {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            
            checkboxes.forEach(checkbox => {
                checkbox.checked = !allChecked;
            });
            
            updateProgress();
            updateCheckAllButton();
        });
    }
    
    // Download list functionality
    if (downloadListBtn) {
        downloadListBtn.addEventListener('click', function() {
            downloadDocumentList();
        });
    }
    
    function updateProgress() {
        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        const totalCount = checkboxes.length;
        
        // Update progress indicator if exists
        const progressIndicator = document.querySelector('.progress-indicator');
        if (progressIndicator) {
            progressIndicator.textContent = `${checkedCount}/${totalCount} documents`;
        }
    }
    
    function updateCheckAllButton() {
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        if (checkAllBtn) {
            checkAllBtn.innerHTML = allChecked ? 
                '<i class="fas fa-times"></i> Tout décocher' : 
                '<i class="fas fa-check-double"></i> Tout cocher';
        }
    }
    
    function downloadDocumentList() {
        // Create a downloadable list of documents
        const documents = Array.from(checkboxes).map(cb => ({
            text: cb.nextElementSibling.nextElementSibling.textContent,
            checked: cb.checked
        }));
        
        let listContent = 'LISTE DES DOCUMENTS REQUIS\n';
        listContent += '============================\n\n';
        
        documents.forEach((doc, index) => {
            listContent += `${index + 1}. [${doc.checked ? 'X' : ' '}] ${doc.text}\n`;
        });
        
        listContent += '\n\nDate: ' + new Date().toLocaleDateString('fr-FR');
        listContent += '\nÉcole: EPIKAIZO UNIVERSITY';
        
        // Create and download file
        const blob = new Blob([listContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'liste-documents-epikaizo.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification('Liste des documents téléchargée!', 'success');
    }
}

// Pre-registration Form
function initializePreregistrationForm() {
    const form = document.getElementById('preregistration-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission();
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function handleFormSubmission() {
    const form = document.getElementById('preregistration-form');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm()) {
        return;
    }
    
    // Add loading state
    form.classList.add('form-loading');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Remove loading state
        form.classList.remove('form-loading');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        
        // In a real implementation, you would send the data to a server
        console.log('Form data:', Object.fromEntries(formData));
    }, 2000);
}

function validateForm() {
    const form = document.getElementById('preregistration-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'Ce champ est obligatoire';
        isValid = false;
    }
    
    // Email validation
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Veuillez entrer une adresse email valide';
            isValid = false;
        }
    }
    
    // Phone validation
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            errorMessage = 'Veuillez entrer un numéro de téléphone valide';
            isValid = false;
        }
    }
    
    // Show/hide error
    if (isValid) {
        clearFieldError(field);
    } else {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #e74c3c;
        font-size: 0.8rem;
        margin-top: 0.25rem;
    `;
    
    field.style.borderColor = '#e74c3c';
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '#e9ecef';
}

function showSuccessMessage() {
    const successModal = document.createElement('div');
    successModal.className = 'success-modal';
    successModal.innerHTML = `
        <div class="success-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Pré-inscription envoyée avec succès!</h3>
            <p>Nous avons bien reçu votre demande de pré-inscription. Notre équipe vous contactera dans les plus brefs délais.</p>
            <div class="success-actions">
                <button class="btn btn-primary" onclick="closeSuccessModal()">Fermer</button>
                <button class="btn btn-outline" onclick="window.location.href='formations.html'">Voir les formations</button>
            </div>
        </div>
    `;
    
    successModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const successContent = successModal.querySelector('.success-content');
    successContent.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 16px;
        text-align: center;
        max-width: 500px;
        margin: 2rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideInUp 0.3s ease;
    `;
    
    const successIcon = successModal.querySelector('.success-icon');
    successIcon.style.cssText = `
        width: 80px;
        height: 80px;
        background: #4caf50;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        color: white;
        font-size: 2.5rem;
    `;
    
    const successActions = successModal.querySelector('.success-actions');
    successActions.style.cssText = `
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    `;
    
    document.body.appendChild(successModal);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function closeSuccessModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        observer.observe(step);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        margin-left: 1rem;
    }
`;
document.head.appendChild(notificationStyles);

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
