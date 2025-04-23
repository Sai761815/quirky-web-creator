
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Login form handling
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Here you would typically send this data to a server
      // For this demo, we'll just log it and show an alert
      console.log('Login attempt:', { email, password });
      
      // Simple validation
      if (email && password) {
        // Mock successful login
        alert('Login successful! Welcome back.');
        // In a real application, you would redirect to a dashboard or home page
        // window.location.href = 'dashboard.html';
      } else {
        alert('Please enter both email and password.');
      }
    });
  }
  
  // Newsletter subscription
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      if (email) {
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});
