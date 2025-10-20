// discussion.js - Handle form submission for discussion replies
// DEMO MODE: Currently simulating API submission until backend is deployed

// Uncomment this line when backend is ready:
// import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('discussion-reply-form');
    const feedback = document.getElementById('form-feedback');
    const newRepliesContainer = document.getElementById('new-replies');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        feedback.textContent = 'Submitting...';
        feedback.style.color = 'var(--text-muted)';
        
        // DEMO MODE: Simulate API submission
        // TODO: Replace with real API call when backend is deployed
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        
        const success = true; // Simulate success
        
        /* REAL API CODE (use when backend is ready):
        const apiUrl = 'https://deco7140-7a6b4b57.zones.eait.uq.edu.au/decoapi/genericchat/';
        
        const { success, data } = await postFormData(
            form, 
            apiUrl,
            {
                'student_number': 's49547634',
                'uqcloud_zone_id': '7a6b4b57',
            }
        );
        */
        
        if (success) {
            feedback.textContent = 'Reply posted successfully! (Demo Mode)';
            feedback.style.color = 'var(--accent-green)';
            
            // Get form data to display the new reply
            const personName = form.querySelector('#person_name').value;
            const replyContent = form.querySelector('#chat_post_content').value;
            
            // Create new reply card
            const newReply = document.createElement('div');
            newReply.className = 'card discussion-card';
            newReply.innerHTML = `
                <div class="card-body">
                    <p class="discussion-meta">@${personName} · just now</p>
                    <p>${replyContent}</p>
                </div>
            `;
            
            // Add to the page
            newRepliesContainer.appendChild(newReply);
            
            // Reset form
            form.reset();
            
            // Clear feedback after 3 seconds
            setTimeout(() => {
                feedback.textContent = '';
            }, 3000);
        } else {
            feedback.textContent = 'Something went wrong. Please try again.';
            feedback.style.color = 'var(--text-primary)';
        }
    });
});