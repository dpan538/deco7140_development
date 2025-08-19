/**
 * DECO7140 Introduction to Web Design - Work Phase 1
 * Logging module - handles console logging
 */

/**
 * Log message to console with page name
 * @param {string} pageName - The name of the page/module
 * @param {string} message - The message to log
 */
export function logMessage(pageName, message) {
    console.log(`${pageName}: ${message}`);
}

/**
 * Log error to console
 * @param {string} pageName - The name of the page/module
 * @param {string} error - The error message
 */
export function logError(pageName, error) {
    console.error(`${pageName} ERROR: ${error}`);
}

/**
 * Log warning to console
 * @param {string} pageName - The name of the page/module
 * @param {string} warning - The warning message
 */
export function logWarning(pageName, warning) {
    console.warn(`${pageName} WARNING: ${warning}`);
}
