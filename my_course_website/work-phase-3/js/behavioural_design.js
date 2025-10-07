// Import the POST module
import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('community-form');
    const feedback = document.getElementById('form-feedback');

    // Debug: Check if elements exist
    if (!form || !feedback) {
        console.error('Form or feedback element not found');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous feedback and show loading state
        feedback.textContent = 'Submitting...';
        feedback.className = 'form-feedback submitting';

        // Debug: Log form data
        const formData = new FormData(form);
        console.log('Submitting form with data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        // Call the postFormData function with YOUR zone URL
        const { success, data } = await postFormData(
            form,
            'https://deco7140-7a6b4b57.uqcloud.net/api/community/',
            {
                'student_number': 's49547634', 
                'uqcloud_zone_id': '7a6b4b57'  
            }
        );

        // Debug: Log the response
        console.log('API Response:', { success, data });

        // Handle the response
        if (success) {
            feedback.textContent = data.message || 'Thanks for joining the community!';
            feedback.className = 'form-feedback success';
            form.reset();
        } else {
            // Show the actual error message from the API
            feedback.textContent = data.message || 'Something went wrong. Please try again.';
            feedback.className = 'form-feedback error';
            
            // Log full error details for debugging
            console.error('Form submission failed:', data);
        }
    });
});