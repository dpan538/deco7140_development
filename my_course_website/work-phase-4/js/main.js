/**
 * MAIN.JS
 * Core JavaScript functionality for the Wellness Community Platform
 * 
 * Responsibilities:
 * - Initialize global modules (mobile menu, accordions)
 * - Coordinate between different UI components
 * - Handle page-level interactions
 * 
 * Dependencies:
 * - accordion.js (for collapsible content)
 */

import { initAccordion } from './accordion.js';

// ============================================
// MOBILE MENU TOGGLE
// Handles responsive navigation menu behavior
// Ensures proper ARIA states for accessibility
// ============================================

/**
 * Initialize mobile navigation menu
 * 
 * Features:
 * - Toggle menu visibility on button click
 * - Update ARIA attributes for screen readers
 * - Auto-close menu when navigating to a new page
 * - Graceful degradation if elements are missing
 */
function initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const nav = document.querySelector("nav");

    // Early return if required elements don't exist (e.g., on desktop-only pages)
    if (!mobileToggle || !navMenu || !nav) return;

    // Toggle menu on hamburger button click
    mobileToggle.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
        
        // Update ARIA state for screen readers
        this.setAttribute("aria-expanded", !isExpanded);
        
        // Toggle visual state
        navMenu.classList.toggle("active");
        nav.classList.toggle("menu-open");
    });

    // Auto-close menu when user clicks on any navigation link
    // Improves UX by avoiding manual close on every navigation
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
// INITIALIZATION
// Wait for DOM to be fully loaded before running scripts
// Prevents errors from accessing elements that don't exist yet
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu functionality
    initMobileMenu();
    
    // Initialize accordion components if they exist on the current page
    // Only runs if accordion elements are found (avoids unnecessary processing)
    const accordionContainers = document.querySelectorAll('.accordion-item');
    if (accordionContainers.length > 0) {
        initAccordion('.accordion-item');
    }
});