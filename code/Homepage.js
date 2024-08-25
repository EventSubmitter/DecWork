document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Profile modal functionality
    const profileIcon = document.getElementById('profileIcon');
    const profilePage = document.getElementById('profilePage');
    const closeProfile = document.getElementById('closeProfile');

    profileIcon.addEventListener('click', function () {
        profilePage.style.display = 'flex';
        document.getElementById('mainContent').classList.add('blur');
    });

    closeProfile.addEventListener('click', function () {
        profilePage.style.display = 'none';
        document.getElementById('mainContent').classList.remove('blur');
    });

    // Join a Corporate navigation
    const joinCorporate = document.getElementById('joinCorporate');

    joinCorporate.addEventListener('click', function () {
        window.location.href = 'join-corporate.html'; // Navigate to join-corporate.html
    });
});
