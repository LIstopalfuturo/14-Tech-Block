const loginFormHandler = async (event) => {
  event.preventDefault();

  // Disable the submit button to prevent multiple submissions
  const submitButton = document.querySelector('.login-form button');
  submitButton.disabled = true;

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  try {
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');  // Changed from /profile to /dashboard
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to log in');
      }
    }
  } catch (err) {
    console.error('Login error:', err);
    alert('An error occurred during login');
  } finally {
    // Re-enable the submit button
    submitButton.disabled = false;
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

