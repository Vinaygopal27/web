// Selectors */
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const loginButton = document.querySelector('.login-form input[type="submit"]');
const signupButton = document.querySelector('.signup-form input[type="submit"]');

// Add event listeners */
loginButton.addEventListener('click', () => {
    // Fade in animation */
    loginForm.classList.add('fade-in');

    // After 0.5 seconds, slide in right animation */
    setTimeout(() => {
        loginForm.classList.add('slide-in-right');
    }, 500);
});

signupButton.addEventListener('click', () => {
    // Fade in animation */
    signupForm.classList.add('fade-in');

    // After 0.5 seconds, slide in right animation */
    setTimeout(() => {
        signupForm.classList.add('slide-in-right');
    }, 500);
});

// Remove animations after 1 second */
setTimeout(() => {
    loginForm.classList.remove('fade-in');
    loginForm.classList.remove('slide-in-right');
}, 1000);

setTimeout(() => {
    signupForm.classList.remove('fade-in');
    signupForm.classList.remove('slide-in-right');
}, 1000);