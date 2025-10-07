const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Mobile switchers
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToSignIn = document.getElementById('switchToSignIn');

// Desktop overlay button listeners
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Mobile link listeners
switchToSignUp.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('right-panel-active');
});

switchToSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('right-panel-active');
});


// Prevent form submission for demo
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Форма отправлена');
  });
});