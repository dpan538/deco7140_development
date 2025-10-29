// Discussion reply form handler
import { postFormData } from "./modules/postFormData.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("discussion-reply-form");
    const feedback = document.getElementById("form-feedback");
    const newRepliesContainer = document.getElementById("new-replies");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        feedback.textContent = "Submitting...";
        feedback.style.color = "var(--text-muted)";

        const apiUrl =
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/";

        try {
            const { success, data } = await postFormData(form, apiUrl, {
                student_number: "s4954763",
                uqcloud_zone_id: "7a6b4b57",
            });

            if (success) {
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

                // Add new reply to the page
                const newReply = document.createElement("div");
                newReply.className = "card discussion-card";
                newReply.innerHTML = `
          <div class="card-body">
            <p class="discussion-meta">@${personName} · ${timeLabel}</p>
            <p>${replyContent}</p>
          </div>
        `;
                newRepliesContainer.appendChild(newReply);

                // Update reply counts
                const headerCountEl = document.getElementById("reply-count");
                if (headerCountEl) {
                    headerCountEl.textContent = String(
                        parseInt(headerCountEl.textContent, 10) + 1
                    );
                }

                const sidebarCountEl = document.getElementById(
                    "sidebar-reply-count"
                );
                if (sidebarCountEl) {
                    sidebarCountEl.textContent = String(
                        parseInt(sidebarCountEl.textContent, 10) + 1
                    );
                }

                feedback.textContent =
                    (data && data.message) || "Reply posted successfully!";
                feedback.style.color = "var(--accent-green)";
                form.reset();

                setTimeout(() => {
                    feedback.textContent = "";
                }, 3000);
            } else {
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
            console.error("Error submitting reply:", err);
            feedback.textContent = "Network error. Please try again.";
            feedback.style.color = "var(--text-primary)";
        }
    });
});
