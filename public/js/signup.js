const signupFormHandler = async (event) => {
  event.preventDefault();

  // Disable the submit button to prevent multiple submissions
  const submitButton = document.querySelector('.signup-form button');
  submitButton.disabled = true;

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  try {
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');  // Changed from /profile to /dashboard
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to sign up');
      }
    }
  } catch (err) {
    console.error('Signup error:', err);
    alert('An error occurred during signup');
  } finally {
    // Re-enable the submit button
    submitButton.disabled = false;
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
