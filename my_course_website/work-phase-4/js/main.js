// Main JavaScript file
// Handles mobile menu and accordion functionality

import { initAccordion } from './accordion.js';

// Mobile menu toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const nav = document.querySelector("nav");

    if (!mobileToggle || !navMenu || !nav) return;

    // Toggle menu on button click
    mobileToggle.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
        
        // Update ARIA state for accessibility
        this.setAttribute("aria-expanded", !isExpanded);
        
        navMenu.classList.toggle("active");
        nav.classList.toggle("menu-open");
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            nav.classList.remove("menu-open");
            mobileToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Initialize accordions if they exist
    const accordionContainers = document.querySelectorAll('.accordion-item');
    if (accordionContainers.length > 0) {
        initAccordion('.accordion-item');
    }
});