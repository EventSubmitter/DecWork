// Get elements
const profileIcon = document.getElementById('profileIcon');
const profilePage = document.getElementById('profilePage');
const mainContent = document.getElementById('mainContent');
const closeProfile = document.getElementById('closeProfile');

// Show profile page and blur the background
profileIcon.addEventListener('click', () => {
    profilePage.style.display = 'flex';
    mainContent.classList.add('blur');
});

// Close profile page and remove blur
closeProfile.addEventListener('click', () => {
    profilePage.style.display = 'none';
    mainContent.classList.remove('blur');
});
