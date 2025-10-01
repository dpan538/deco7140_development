// Import the POST module
import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('community-form');
    const feedback = document.getElementById('form-feedback');

    if (!form || !feedback) {
        console.error('Form or feedback element not found');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous feedback
        feedback.textContent = 'Submitting...';
        feedback.className = 'form-feedback submitting';

        try {
            const { success, data } = await postFormData(
                form,
                'https://deco7140-work.uqcloud.net/api/community/',
                {
                    'student_number': '49547634', 
                    'uqcloud_zone_id': '7a6b4b57'  
                }
            );

            if (success) {
                feedback.textContent = data.message || 'Thanks for joining the community!';
                feedback.className = 'form-feedback success';
                form.reset();
            } else {
                feedback.textContent = data.message || 'Something went wrong. Please try again.';
                feedback.className = 'form-feedback error';
            }
        } catch (error) {
            feedback.textContent = 'Network error. Please check your connection and try again.';
            feedback.className = 'form-feedback error';
            console.error('Form submission error:', error);
        }
    });
});