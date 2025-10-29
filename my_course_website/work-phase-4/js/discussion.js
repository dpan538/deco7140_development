/**
 * DISCUSSION.JS
 * Handles discussion reply form submission and real-time UI updates
 * 
 * Purpose:
 * - Submit user replies to the discussion API
 * - Dynamically add new replies to the page without reload
 * - Update reply counts in multiple locations (header, sidebar)
 * - Provide clear user feedback for all states (loading, success, error)
 * 
 * Dependencies:
 * - postFormData.js (handles API communication)
 * 
 * API Endpoint:
 * - DECO7140 generic chat API (Heroku-hosted)
 */

import { postFormData } from "./modules/postFormData.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("discussion-reply-form");
    const feedback = document.getElementById("form-feedback");
    const newRepliesContainer = document.getElementById("new-replies");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();  // Prevent default form submission (page reload)

        // Show loading state
        feedback.textContent = "Submitting...";
        feedback.style.color = "var(--text-muted)";

        // API endpoint for DECO7140 chat system
        const apiUrl =
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/";

        try {
            // Submit form data with student credentials
            const { success, data } = await postFormData(form, apiUrl, {
                student_number: "s4954763",
                uqcloud_zone_id: "7a6b4b57",
            });

            if (success) {
                // Extract reply data - prefer API response, fallback to form values
                const personName =
                    (data && data.person_name) ||
                    form.querySelector("#person_name").value;
                const replyContent =
                    (data && data.chat_post_content) ||
                    form.querySelector("#chat_post_content").value;
                const timeLabel =
                    data && data.chat_date_time
                        ? data.chat_date_time
                        : "just now";

                // Create and inject new reply card into the DOM
                const newReply = document.createElement("div");
                newReply.className = "card discussion-card";
                newReply.innerHTML = `
          <div class="card-body">
            <p class="discussion-meta">@${personName} · ${timeLabel}</p>
            <p>${replyContent}</p>
          </div>
        `;
                newRepliesContainer.appendChild(newReply);

                // Update main reply count (in discussion header)
                const headerCountEl = document.getElementById("reply-count");
                if (headerCountEl) {
                    headerCountEl.textContent = String(
                        parseInt(headerCountEl.textContent, 10) + 1
                    );
                }

                // Update sidebar reply count (quick stats)
                const sidebarCountEl = document.getElementById(
                    "sidebar-reply-count"
                );
                if (sidebarCountEl) {
                    sidebarCountEl.textContent = String(
                        parseInt(sidebarCountEl.textContent, 10) + 1
                    );
                }

                // Show success message
                feedback.textContent =
                    (data && data.message) || "Reply posted successfully!";
                feedback.style.color = "var(--accent-green)";
                form.reset();

                // Clear feedback message after 3 seconds
                setTimeout(() => {
                    feedback.textContent = "";
                }, 3000);
            } else {
                // Handle validation errors from API
                // API returns arrays for field errors (Django Rest Framework format)
                const firstError =
                    (data &&
                        (data.person_name?.[0] ||
                            data.chat_post_title?.[0] ||
                            data.chat_post_content?.[0])) ||
                    (data && data.message) ||
                    "Something went wrong. Please try again.";
                feedback.textContent = firstError;
                feedback.style.color = "var(--text-primary)";
            }
        } catch (err) {
            // Handle network errors (offline, server down, etc.)
            console.error("Error submitting reply:", err);
            feedback.textContent = "Network error. Please try again.";
            feedback.style.color = "var(--text-primary)";
        }
    });
});
