/**
 * DECO7140 Work Phase 1 - Main Interactions
 */

const linksCard = document.getElementById('links-card');
const aboutCard = document.getElementById('about-card');

function handleLinksClick() {
    window.open("https://www.daiportfolio.com/", "_blank");
}

function handleAboutClick() {
    alert("About Me page coming soon!");
}

function initializeInteractions() {
    if (linksCard) {
        linksCard.addEventListener('click', handleLinksClick);
    }

    if (aboutCard) {
        aboutCard.addEventListener('click', handleAboutClick);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('DECO7140 Work Phase 1: Page loaded');
    initializeInteractions();
});
