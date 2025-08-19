/**
 * DECO7140 Introduction to Web Design - Work Phase 1
 * Typography module - handles text effects and animations
 */

/**
 * Typewriter effect function
 * @param {HTMLElement} element - The element to apply effect to
 * @param {string} text - The text to type
 * @param {number} speed - Speed of typing in milliseconds
 */
export function typewriterEffect(element, text, speed = 100) {
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
 * Fade in text effect
 * @param {HTMLElement} element - The element to fade in
 * @param {number} duration - Duration in milliseconds
 */
export function fadeInText(element, duration = 1000) {
    if (!element) return;

    element.style.opacity = "0";
    element.style.transition = `opacity ${duration}ms ease-in`;

    // Trigger reflow
    element.offsetHeight;

    element.style.opacity = "1";
}

/**
 * Slide in text effect
 * @param {HTMLElement} element - The element to slide in
 * @param {string} direction - Direction: 'left', 'right', 'top', 'bottom'
 * @param {number} duration - Duration in milliseconds
 */
export function slideInText(element, direction = "left", duration = 500) {
    if (!element) return;

    const transformMap = {
        left: "translateX(-100%)",
        right: "translateX(100%)",
        top: "translateY(-100%)",
        bottom: "translateY(100%)",
    };

    element.style.transform = transformMap[direction];
    element.style.transition = `transform ${duration}ms ease-out`;

    // Trigger reflow
    element.offsetHeight;

    element.style.transform = "translate(0, 0)";
}
