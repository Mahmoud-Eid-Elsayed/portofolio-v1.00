document.addEventListener('DOMContentLoaded', async function () {
  // Fetch environment variables from the server
  let env = {};
  try {
    const response = await fetch('/env');
    env = await response.json();
    console.log('Environment variables loaded:', env);
  } catch (error) {
    console.error('Failed to load environment variables:', error);
  }

  // EmailJS public key
  emailjs.init(env.EMAILJS_PUBLIC_KEY || 'H1TLxkt_rigK-o-K0');

  // Get the contact form
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) {
    console.error('Contact form not found!');
    return;
  }

  // Add submit event listener
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log('Form submission started');

    // Validate form
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';

    try {
      console.log('Attempting to send email with EmailJS');
      const serviceId = env.EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = env.EMAILJS_TEMPLATE_ID || 'your_template_id';

      console.log('Using service ID:', serviceId);
      console.log('Using template ID:', templateId);

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        this
      );

      console.log('Email sent successfully:', result.text);
      showSuccess('Your message has been sent successfully!');
      this.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      showError('There was a problem sending your message. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane ms-2"></i>';
    }
  });
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Clear previous error messages
  clearErrors();

  let isValid = true;

  // Name validation - at least 2 characters, no numbers or special chars
  if (!name || name.length < 2 || /[0-9!@#$%^&*(),.?":{}|<>]/.test(name)) {
    showFieldError('name', 'Please enter a valid name (at least 2 characters, no numbers or special characters)');
    isValid = false;
  }

  // Email validation - comprehensive regex
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email || !emailRegex.test(email)) {
    showFieldError('email', 'Please enter a valid email address');
    isValid = false;
  }

  // Subject validation - at least 3 characters
  if (!subject || subject.length < 3) {
    showFieldError('subject', 'Subject must be at least 3 characters');
    isValid = false;
  }

  // Message validation - at least 10 characters
  if (!message || message.length < 10) {
    showFieldError('message', 'Message must be at least 10 characters');
    isValid = false;
  }

  // Check for spam patterns
  if (
    message.includes('http://') ||
    message.includes('https://') ||
    /\b(viagra|cialis|buy now|click here|make money|free offer)\b/i.test(message)
  ) {
    showFieldError('message', 'Message contains prohibited content');
    isValid = false;
  }

  return isValid;
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  const errorDiv = document.createElement('div');
  errorDiv.className = 'invalid-feedback d-block';
  errorDiv.textContent = message;

  field.classList.add('is-invalid');
  field.parentNode.appendChild(errorDiv);
}

function clearErrors() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const invalidFields = form.querySelectorAll('.is-invalid');
  const errorMessages = form.querySelectorAll('.invalid-feedback');

  invalidFields.forEach(field => field.classList.remove('is-invalid'));
  errorMessages.forEach(error => error.remove());
}

// Helper function to show error messages
function showError(message) {
  const formStatus = document.getElementById('formStatus');
  if (!formStatus) {
    console.error('Form status element not found');
    return;
  }

  formStatus.className = 'form-status error-message';
  formStatus.textContent = message;
  formStatus.style.display = 'block';

  // Hide the message after 5 seconds
  setTimeout(() => {
    formStatus.style.display = 'none';
  }, 5000);
}

// Helper function to show success messages
function showSuccess(message) {
  const formStatus = document.getElementById('formStatus');
  if (!formStatus) {
    console.error('Form status element not found');
    return;
  }

  formStatus.className = 'form-status success-message';
  formStatus.textContent = message;
  formStatus.style.display = 'block';

  // Hide the message after 5 seconds
  setTimeout(() => {
    formStatus.style.display = 'none';
  }, 5000);
}