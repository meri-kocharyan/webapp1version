// login-sim.js – persistent mock login/logout using localStorage
(function() {
  // Get references to the relevant elements
  const loginDiv = document.getElementById('login');           // login area (link + dropdown)
  const loggedInDiv = document.getElementById('logged-in');   // logged-in area (sign out link)
  const protectedArea = document.getElementById('protected-area');
  const loginForm = document.getElementById('new_user_session_small');
  const logoutLink = document.getElementById('logout-link');
  const usernameDisplay = document.getElementById('username-display');
  const body = document.body;

  // Helper function to update the UI based on login state
  function setLoggedInState(isLoggedIn) {
    if (isLoggedIn) {
      // Logged in: hide login area, show logged-in area and protected content
      if (loginDiv) loginDiv.style.display = 'none';
      if (loggedInDiv) loggedInDiv.style.display = 'block';
      if (protectedArea) protectedArea.style.display = 'block';
      body.classList.remove('logged-out');
      body.classList.add('logged-in');
    } else {
      // Logged out: show login area, hide logged-in area and protected content
      if (loginDiv) loginDiv.style.display = ''; // revert to default (as defined in CSS)
      if (loggedInDiv) loggedInDiv.style.display = 'none';
      if (protectedArea) protectedArea.style.display = 'none';
      body.classList.remove('logged-in');
      body.classList.add('logged-out');
    }
  }

  // On page load, read the stored login state from localStorage
  const storedLoggedIn = localStorage.getItem('loggedIn') === 'true';
  setLoggedInState(storedLoggedIn);

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get entered username (for display)
      const usernameInput = document.getElementById('user_session_mini_login');
      const username = usernameInput ? usernameInput.value.trim() : 'User';

      // Store login state in localStorage
      localStorage.setItem('loggedIn', 'true');

      // Update UI
      setLoggedInState(true);

      // Update welcome message if present
      if (usernameDisplay) {
        usernameDisplay.textContent = username;
      }

      // Close the login dropdown (remove 'open' class)
      const loginContainer = document.getElementById('login');
      if (loginContainer) loginContainer.classList.remove('open');
    });
  }

  // Handle logout link click
  if (logoutLink) {
    logoutLink.addEventListener('click', function(event) {
      event.preventDefault();

      // Clear login state from localStorage
      localStorage.setItem('loggedIn', 'false');

      // Update UI
      setLoggedInState(false);
    });
  }
})();