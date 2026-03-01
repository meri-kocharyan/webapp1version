
/*
// dropdown.js – opens login form on click, closes on outside click
(function() {
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    var loginDiv = document.getElementById('login');
    var loginLink = document.getElementById('login-dropdown');

    // If elements exist
    if (loginDiv && loginLink) {
      // Toggle 'open' class when the link is clicked
      loginLink.addEventListener('click', function(event) {
        event.preventDefault();      // Prevent any default action
        event.stopPropagation();     // Stop event from bubbling
        loginDiv.classList.toggle('open');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(event) {
        if (!loginDiv.contains(event.target)) {
          loginDiv.classList.remove('open');
        }
      });
    } else {
      console.error('Login elements not found! Check IDs.');
    }
  });
})();
*/

// dropdown.js



(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var loginDiv = document.getElementById('login');
    var loginLink = document.getElementById('login-dropdown');

    if (loginDiv && loginLink) {
      // Toggle 'open' class when the link is clicked
      loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        loginDiv.classList.toggle('open');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(event) {
        if (!loginDiv.contains(event.target)) {
          loginDiv.classList.remove('open');
        }
      });
    }
  });
})();