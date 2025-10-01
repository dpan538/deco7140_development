/* Reflective Design Page JavaScript */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Reflective Design page loaded');
    
    // Add smooth scrolling for any anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Import the GET module
import { fetchGetData } from './modules/getData.js';

// Fetch and display community members
const container = document.getElementById('community-members');

if (container) {
    fetchGetData('https://deco7140-work.uqcloud.net/api/community/', {
        'student_number': 's1234567',  // REPLACE WITH YOUR NUMBER
        'uqcloud_zone_id': 'abcd123'   // REPLACE WITH YOUR ZONE ID
    }).then(data => {
        if (!data || data.length === 0) {
            container.innerHTML = '<p class="no-data">No community members yet. Be the first to join!</p>';
            return;
        }

        data.forEach(member => {
            const card = document.createElement('article');
            card.className = 'community-card';
            card.innerHTML = `
                <div class="community-card-content">
                    ${member.photo ? `<img src="${member.photo}" alt="${member.name}'s profile photo" class="community-photo">` : ''}
                    <div class="community-info">
                        <h3 class="community-name">${member.name}</h3>
                        <p class="community-message">${member.message || 'Excited to be part of this community!'}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    });
}