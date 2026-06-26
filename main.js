document.addEventListener('DOMContentLoaded', () => {
  const navBtn = document.querySelector('#menu');
  // Updated selector to match the ID in the HTML
  const menuBar = document.querySelector('#mobile-menu');

  // Guard clause to prevent errors if elements don't exist on the page
  if (!navBtn || !menuBar) return;

  navBtn.addEventListener('click', () => {
    // Safely check current state, defaulting to false if attribute is missing
    const isExpanded = navBtn.getAttribute('aria-expanded') === 'true';
    
    // Toggle ARIA state
    navBtn.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle Tailwind display classes
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
  });
});