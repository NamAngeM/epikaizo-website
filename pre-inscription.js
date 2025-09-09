// Pre-registration Page JavaScript

let currentStep = 1;
const totalSteps = 4;
const formData = {};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initializeMobileNav();
    
    // Initialize form functionality
    initializeForm();
    
    // Initialize file uploads
    initializeFileUploads();
    
    // Initialize progress tracking
    initializeProgress();
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

// Form Initialization
function initializeForm() {
    const form = document.getElementById('preregistration-form');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    // Next button functionality
    nextBtn.addEventListener('click', function() {
        if (validateCurrentStep()) {
            saveCurrentStepData();
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
                updateProgress();
                updateNavigationButtons();
            }
        }
    });
    
    // Previous button functionality
    prevBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
            updateProgress();
            updateNavigationButtons();
        }
    });
    
    // Form submission
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

// Step Management
function showStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => step.classList.remove('active'));
    
    // Show current step
    const currentStepElement = document.getElementById(`step-${stepNumber}`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
    
    // Update progress steps
    const progressSteps = document.querySelectorAll('.step');
    progressSteps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index + 1 < stepNumber) {
            step.classList.add('completed');
        } else if (index + 1 === stepNumber) {
            step.classList.add('active');
        }
    });
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

function updateNavigationButtons() {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    // Show/hide previous button
    prevBtn.style.display = currentStep > 1 ? 'flex' : 'none';
    
    // Show/hide next/submit button
    if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
}

// Validation
function validateCurrentStep() {
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    const requiredFields = currentStepElement.querySelectorAll('[required]');
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
    
    // Date validation
    if (fieldName === 'birthdate' && value) {
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        
        if (age < 16 || age > 65) {
            errorMessage = 'L\'âge doit être entre 16 et 65 ans';
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

// Data Management
function saveCurrentStepData() {
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    const inputs = currentStepElement.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.type === 'radio') {
            if (input.checked) {
                formData[input.name] = input.value;
            }
        } else if (input.type === 'file') {
            if (input.files.length > 0) {
                formData[input.name] = Array.from(input.files);
            }
        } else {
            formData[input.name] = input.value;
        }
    });
    
    // Update summary if on step 4
    if (currentStep === 4) {
        updateSummary();
    }
}

function updateSummary() {
    // Update formation summary
    const formationSummary = document.getElementById('summary-formation');
    if (formData.formation) {
        const formationNames = {
            'sciences-gestion': 'Sciences de Gestion (DUT)',
            'aviation': 'Aviation Civile',
            'certifiantes': 'Formations Certifiantes',
            'logistique': 'École de Logistique (Licence)'
        };
        formationSummary.innerHTML = `<strong>${formationNames[formData.formation]}</strong>`;
    }
    
    // Update personal information summary
    const personalSummary = document.getElementById('summary-personal');
    personalSummary.innerHTML = `
        <p><strong>Nom :</strong> ${formData.civility} ${formData.lastname} ${formData.firstname}</p>
        <p><strong>Date de naissance :</strong> ${formData.birthdate}</p>
        <p><strong>Email :</strong> ${formData.email}</p>
        <p><strong>Téléphone :</strong> ${formData.phone}</p>
        <p><strong>Niveau d'études :</strong> ${formData.education}</p>
        <p><strong>Situation :</strong> ${formData.situation}</p>
    `;
    
    // Update documents summary
    const documentsSummary = document.getElementById('summary-documents');
    const documentNames = {
        'bac': 'Copie certifiée du Baccalauréat',
        'notes': 'Relevé de notes du Bac',
        'naissance': 'Extrait d\'acte de naissance',
        'photos': '4 photos d\'identité'
    };
    
    let documentsHtml = '';
    Object.keys(documentNames).forEach(key => {
        if (formData[key] && formData[key].length > 0) {
            documentsHtml += `<p><strong>${documentNames[key]} :</strong> ✓ Fourni</p>`;
        } else {
            documentsHtml += `<p><strong>${documentNames[key]} :</strong> ✗ Manquant</p>`;
        }
    });
    documentsSummary.innerHTML = documentsHtml;
}

// File Upload
function initializeFileUploads() {
    const uploadAreas = document.querySelectorAll('.upload-area');
    
    uploadAreas.forEach(area => {
        const input = area.querySelector('input[type="file"]');
        const content = area.querySelector('.upload-content');
        const fileName = content.querySelector('.file-name');
        const progress = area.querySelector('.upload-progress');
        const progressFill = progress.querySelector('.progress-fill');
        const progressText = progress.querySelector('.progress-text');
        
        // Click to upload
        area.addEventListener('click', () => input.click());
        
        // Drag and drop
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.classList.add('dragover');
        });
        
        area.addEventListener('dragleave', () => {
            area.classList.remove('dragover');
        });
        
        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                input.files = files;
                handleFileUpload(input, files[0]);
            }
        });
        
        // File selection
        input.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileUpload(input, e.target.files[0]);
            }
        });
    });
}

function handleFileUpload(input, file) {
    const area = input.closest('.upload-area');
    const content = area.querySelector('.upload-content');
    const fileName = content.querySelector('.file-name');
    const progress = area.querySelector('.upload-progress');
    const progressFill = progress.querySelector('.progress-fill');
    const progressText = progress.querySelector('.progress-text');
    
    // Validate file
    if (!validateFile(file, input)) {
        return;
    }
    
    // Show file name
    fileName.textContent = file.name;
    
    // Show progress
    progress.classList.add('active');
    
    // Simulate upload progress
    let progressValue = 0;
    const progressInterval = setInterval(() => {
        progressValue += Math.random() * 30;
        if (progressValue >= 100) {
            progressValue = 100;
            clearInterval(progressInterval);
            
            // Upload complete
            area.style.borderColor = '#4caf50';
            area.style.background = '#f8fff8';
            content.querySelector('i').className = 'fas fa-check-circle';
            content.querySelector('i').style.color = '#4caf50';
        }
        
        progressFill.style.width = `${progressValue}%`;
        progressText.textContent = `${Math.round(progressValue)}%`;
    }, 200);
}

function validateFile(file, input) {
    const maxSize = input.multiple ? 2 * 1024 * 1024 : 5 * 1024 * 1024; // 2MB for photos, 5MB for others
    const allowedTypes = input.accept.split(',').map(type => type.trim());
    
    if (file.size > maxSize) {
        showNotification(`Le fichier est trop volumineux. Taille maximale : ${maxSize / (1024 * 1024)}MB`, 'error');
        return false;
    }
    
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
        showNotification('Type de fichier non autorisé', 'error');
        return false;
    }
    
    return true;
}

// Progress Tracking
function initializeProgress() {
    // Update progress on step change
    const progressSteps = document.querySelectorAll('.step');
    progressSteps.forEach((step, index) => {
        step.addEventListener('click', () => {
            if (index + 1 < currentStep) {
                currentStep = index + 1;
                showStep(currentStep);
                updateProgress();
                updateNavigationButtons();
            }
        });
    });
}

// Form Submission
function handleFormSubmission() {
    if (!validateCurrentStep()) {
        return;
    }
    
    saveCurrentStepData();
    
    // Add loading state
    const form = document.getElementById('preregistration-form');
    form.classList.add('form-loading');
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement en cours...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Remove loading state
        form.classList.remove('form-loading');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success modal
        showSuccessModal();
        
        // In a real implementation, you would send the data to a server
        console.log('Pre-registration data:', formData);
    }, 2000);
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    const dossierNumber = document.getElementById('dossier-number');
    
    // Generate random dossier number
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    dossierNumber.textContent = `EPK-2024-${randomNumber}`;
    
    // Show modal
    modal.style.display = 'block';
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
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
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
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
    
    // Add keyboard navigation for steps
    const progressSteps = document.querySelectorAll('.step');
    progressSteps.forEach((step, index) => {
        step.setAttribute('tabindex', '0');
        step.setAttribute('role', 'button');
        step.setAttribute('aria-label', `Aller à l'étape ${index + 1}`);
        
        step.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (index + 1 < currentStep) {
                    this.click();
                }
            }
        });
    });
});
