/**
 * DECO7140 Introduction to Web Design - Work Phase 1
 * Main page interactions - keeping course structure
 */

// Constants - following course pattern
const PAGE_NAME = "index.js";

// DOM Elements
const surpriseButton = document.getElementById("surprise-button");
const overlay = document.getElementById("overlay");
const typewriterText = document.querySelector(".typewriter-text");
const linksSection = document.querySelector(".section-links");
const aboutSection = document.querySelector(".section-about");

// Variables
let message = "Page interactions loaded";

/**
 * Typewriter effect function - preserving existing functionality
 */
function typewriterEffect(element, text, speed = 100) {
    if (!element) return;

    element.textContent = "";
    let i = 0;

    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }

    typeChar();
}

/**
 * Show overlay with typewriter effect
 */
function showOverlay() {
    overlay.classList.add("active");
    const message =
        "This is a section that hasn't been edited yet, so check back later.";
    typewriterEffect(typewriterText, message, 80);
}

/**
 * Hide overlay
 */
function hideOverlay() {
    overlay.classList.remove("active");
}

/**
 * Handle Links section click - redirect to portfolio
 */
function handleLinksClick() {
    window.open("https://www.daiportfolio.com/", "_blank");
}

/**
 * Handle About Me section click - placeholder for future About page
 */
function handleAboutClick() {
    // For now, show an alert. Later this will navigate to about page
    alert("About Me page coming soon!");
}

/**
 * Initialize page interactions
 */
function initializeInteractions() {
    // Surprise button click
    if (surpriseButton) {
        surpriseButton.addEventListener("click", showOverlay);
    }

    // ESC key to close overlay
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            hideOverlay();
        }
    });

    // Click outside overlay to close
    if (overlay) {
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                hideOverlay();
            }
        });
    }

    // Links section click
    if (linksSection) {
        linksSection.addEventListener("click", handleLinksClick);
    }

    // About Me section click
    if (aboutSection) {
        aboutSection.addEventListener("click", handleAboutClick);
    }
}

/**
 * Page load event - following course pattern
 */
window.addEventListener("DOMContentLoaded", () => {
    // Log page load
    console.log(`${PAGE_NAME}: ${message}`);

    // Initialize interactions
    initializeInteractions();
});
