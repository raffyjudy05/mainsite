document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    // Get all page sections
    const pages = document.querySelectorAll('.page');
    // Get the live clock element
    const liveClock = document.getElementById('live-clock');

    // Function to update the live clock
    function updateClock() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // Use 12-hour format with AM/PM
        };
        // Use en-US locale for consistent English wording
        const formattedDateTime = now.toLocaleDateString('en-US', options);
        // Include "(PH Time)" for a Filipino touch without full Tagalog
        liveClock.innerHTML = `<i class="fas fa-clock"></i> Current Time: ${formattedDateTime} (PH Time)`;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
    // Initial call to display the clock immediately
    updateClock();

    // Function to show a specific page and hide others
    function showPage(targetId) {
        pages.forEach(page => {
            if (page.id === targetId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
         // Optional: Scroll to the top of the main content area
        document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
    }

    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            showPage(targetId);
        });
    });

    // Show the home page by default when the page loads
    showPage('home');
});
