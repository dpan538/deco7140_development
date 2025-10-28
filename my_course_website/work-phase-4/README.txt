================================================================================
  DECO7140 WORK PHASE 4 - WELLNESS COMMUNITY PLATFORM
  Implementation & Final Deliverable
================================================================================

PROJECT OVERVIEW
--------------------------------------------------------------------------------
A mental health support platform designed with accessibility-first principles.
Built for older adults, trauma survivors, and users with varying technical 
literacy. Complies with WCAG 2.2 AA and ACS Code of Professional Ethics.


FILE STRUCTURE
--------------------------------------------------------------------------------

📁 work-phase-4/
  
  ├─ 📄 MAIN PAGES (Primary Navigation)
  │   ├── index.html                  Homepage with hero & feature cards
  │   ├── community.html              Discussion & group chat overview
  │   ├── resources.html              Articles & activities library
  │   └── personal_space.html         User settings & preferences
  
  ├─ 📄 SUB PAGES (Detail Views)
  │   ├── discussion.html             Discussion thread with replies
  │   │                               ⚠️  REQUEST FORM LINK IS HERE
  │   ├── chat.html                   Group chat interface
  │   ├── article.html                Full article with accordions
  │   └── activity.html               Workshop details & registration
  
  ├─ 📄 FOOTER PAGES (Meta Information)
  │   ├── about.html                  Platform mission & values
  │   ├── privacy.html                Data protection policies
  │   ├── implementation_rationale.html   Design documentation
  │   └── genai_mt_acknowledgement.html   AI tools disclosure
  
  ├─ 📂 css/
  │   ├── reset.css                   Browser normalization
  │   ├── base.css                    Design tokens & typography
  │   ├── layout.css                  Grid & container system
  │   ├── nav.css                     Navigation bar
  │   ├── footer.css                  Footer styling
  │   ├── components.css              Reusable components (cards, badges, buttons)
  │   └── page_css/                   Page-specific styles
  │       ├── homepage.css
  │       ├── community.css
  │       ├── discussion.css
  │       ├── chat.css
  │       ├── personal.css
  │       └── resources.css
  
  ├─ 📂 js/
  │   ├── main.js                     Entry point
  │   ├── accordion.js                Accordion functionality
  │   ├── discussion.js               Discussion form handling
  │   └── modules/
  │       ├── getData.js              API data fetching 
  │       └── postFormData.js         Form submission 
  
  └─ 📂 images/
      └── [activity*.jpg, article*.jpg, chat*.jpg, hero_image1.jpg]


KEY FEATURES
--------------------------------------------------------------------------------
✅ Accordion components for progressive disclosure
✅ Responsive grid layout 
✅ Interactive forms with validation
✅ Badge system for visual hierarchy
✅ Keyboard navigation support
✅ Screen reader compatibility
✅ High contrast mode support


⚠️  IMPORTANT: REQUEST FORM LOCATION
--------------------------------------------------------------------------------
The request form link for reporting issues or seeking help is located in:

    📍 discussion.html

Look for the "Report a Concern" button in the discussion thread interface.
This link connects to a form submission system (currently in demo mode).


DESIGN SYSTEM
--------------------------------------------------------------------------------
Colors:     Black (#0b0a07), Cream (#fdf9f4), Green (#048055), Yellow (#ffe76d)
Fonts:      Onest (body), Comfortaa (headings), Google Sans Code (metadata)
Spacing:    4px-based system (--space-1 to --space-24)
Components: Cards, badges, buttons, accordions, forms


ACCESSIBILITY COMPLIANCE
--------------------------------------------------------------------------------
- WCAG 2.2 AA standards met
- Minimum 4.5:1 text contrast ratio
- 48×48px touch targets
- Semantic HTML with ARIA labels
- Non-color visual differentiation (shapes, weights, icons)


BROWSER COMPATIBILITY
--------------------------------------------------------------------------------
Tested on: Chrome, Firefox, Safari, Edge
Responsive breakpoints: 375px (mobile), 768px (tablet), 1440px (desktop)


DEPLOYMENT
--------------------------------------------------------------------------------
Repository: https://github.com/dpan538/deco7140_development


DEVELOPMENT NOTES
--------------------------------------------------------------------------------
- JavaScript modules use ES6 syntax
- Forms currently in demo mode (no backend)
- API calls simulated with setTimeout
- All images optimized for web (JPG format)


CONTACT & ACKNOWLEDGEMENT
--------------------------------------------------------------------------------
For questions about implementation decisions, see:
    implementation_rationale.html

For AI tool usage transparency, see:
    genai_mt_acknowledgement.html


================================================================================
Last Updated: October 2025
DECO7140 - Designing for Wellbeing | The University of Queensland
================================================================================

