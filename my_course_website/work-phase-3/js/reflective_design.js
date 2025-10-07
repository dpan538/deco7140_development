// Import the GET module at the top
import { fetchGetData } from './modules/getData.js';

document.addEventListener('DOMContentLoaded', async () => {
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

    // Fetch and display community members
    const container = document.getElementById('community-members');

    if (container) {
        // Show loading message
        container.innerHTML = '<p class="loading">Loading community members...</p>';

        try {
            const data = await fetchGetData(
                'https://deco7140-work.uqcloud.net/api/community/',
                {
                    'student_number': 's49547634',
                    'uqcloud_zone_id': '7a6b4b57'
                }
            );

            console.log('API Response:', data);

            // Check if data exists and has members
            if (!data) {
                container.innerHTML = '<p class="error">Failed to load community members.</p>';
                return;
            }

            // The API might return data.members or just data array
            const members = data.members || data;

            if (!members || members.length === 0) {
                container.innerHTML = '<p class="no-data">No community members yet. Be the first to join!</p>';
                return;
            }

            // Clear loading message
            container.innerHTML = '';

            // Create cards for each member
            members.forEach(member => {
                const card = document.createElement('article');
                card.className = 'community-card';
                
                card.innerHTML = `
                    <div class="community-card-content">
                        ${member.image || member.photo ? 
                            `<img src="${member.image || member.photo}" alt="${member.name}'s profile photo" class="community-photo">` 
                            : `<div class="community-placeholder">${member.name.charAt(0).toUpperCase()}</div>`
                        }
                        <div class="community-info">
                            <h3 class="community-name">${member.name}</h3>
                            ${member.email ? `<p class="community-email">${member.email}</p>` : ''}
                            <p class="community-message">${member.message || 'Excited to be part of this community!'}</p>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });

            console.log(`Successfully loaded ${members.length} community members`);

        } catch (error) {
            console.error('Error loading community members:', error);
            container.innerHTML = '<p class="error">Failed to load community members. Please try again later.</p>';
        }
    }
});