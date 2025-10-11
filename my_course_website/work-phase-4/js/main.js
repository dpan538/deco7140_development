// Main JavaScript file
// Work Phase 4 - Wellness Community Platform

// Import accordion module
import { initAccordion } from './accordion.js';

// ============================================
// MOBILE MENU TOGGLE (Reusable)
// ============================================

function initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const nav = document.querySelector("nav");

    if (!mobileToggle || !navMenu || !nav) return;

    // Toggle menu on button click
    mobileToggle.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
        
        // Toggle aria-expanded
        this.setAttribute("aria-expanded", !isExpanded);
        
        // Toggle menu visibility
        navMenu.classList.toggle("active");
        nav.classList.toggle("menu-open");
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            nav.classList.remove("menu-open");
            mobileToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ============================================
// INITIALIZE ALL MODULES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize accordion (if exists on page)
    const accordionContainers = document.querySelectorAll('.accordion-item');
    if (accordionContainers.length > 0) {
        initAccordion('.accordion-item');
    }
});