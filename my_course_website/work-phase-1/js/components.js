/**
 * DECO7140 Introduction to Web Design - Work Phase 1
 * Components module - handles component initialization
 */

/**
 * Initialize all components on the page
 */
export function initializeComponents() {
    initializeButtons();
    initializeCards();
    initializeNavigation();
}

/**
 * Initialize button components
 */
function initializeButtons() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        // Add ripple effect on click
        button.addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Initialize card components
 */
function initializeCards() {
    const cards = document.querySelectorAll(".simple-card");

    cards.forEach((card) => {
        // Add hover effect
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
}

/**
 * Initialize navigation components
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        // Add active state based on current page
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}

/**
 * Create a modal component
 * @param {string} content - Modal content HTML
 * @param {Object} options - Modal options
 */
export function createModal(content, options = {}) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            ${content}
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal on click
    modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.remove();
    });

    // Close on outside click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    return modal;
}
