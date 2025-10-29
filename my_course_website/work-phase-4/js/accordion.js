/**
 * ACCORDION.JS
 * Collapsible content component for progressive disclosure
 * 
 * Purpose:
 * - Reduce cognitive load by hiding secondary content
 * - Improve scanability of long-form content
 * - Maintain ARIA compliance for screen readers
 * 
 * Usage:
 * initAccordion('.accordion-item');
 * 
 * HTML structure expected:
 * <div class="accordion-item">
 *   <div class="accordion-header">Title</div>
 *   <div class="accordion-content">Hidden content</div>
 * </div>
 */

/**
 * Initialize accordion functionality on specified containers
 * 
 * @param {string} containerSelector - CSS selector for accordion containers
 * 
 * Features:
 * - Toggle open/close state on header click
 * - Simple class-based toggle (CSS handles animation)
 * - No conflicts with multiple accordions on same page
 */
function initAccordion(containerSelector) {
    const accordions = document.querySelectorAll(containerSelector);
    
    accordions.forEach((container) => {
        const headers = container.querySelectorAll(".accordion-header");
        
        headers.forEach((header) => {
            // Add click listener to each accordion header
            header.addEventListener("click", () => {
                const item = header.parentElement;
                // Toggle 'open' class - CSS handles the rest
                item.classList.toggle("open");
            });
        });
    });
}

export { initAccordion };