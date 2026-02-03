document.addEventListener('DOMContentLoaded', function() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'launch-overlay';
    
    overlay.innerHTML = `
        <div class="launch-content">
            <h1>We Are Launching In</h1>
            <div id="countdown" class="countdown">
                <div class="time-unit">
                    <span id="days">00</span>
                    <label>Days</label>
                </div>
                <div class="time-unit">
                    <span id="hours">00</span>
                    <label>Hours</label>
                </div>
                <div class="time-unit">
                    <span id="minutes">00</span>
                    <label>Minutes</label>
                </div>
                <div class="time-unit">
                    <span id="seconds">00</span>
                    <label>Seconds</label>
                </div>
            </div>
            <p>Witness the Muslim Digiverse bloom and flourish.</p>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Timer logic
    // Target date: March 14, 2026
    const targetDate = new Date('March 14, 2026 00:00:00').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    // Global Mobile Nav Logic (Close on Click)
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && mainNav) {
        // Ensure toggle works (in case inline script is missing or overridden)
        // We use a named function to avoid duplicate listeners if possible, but anonymous is fine for simple toggle
        // To be safe, we can remove the inline script's listener by cloning the element, but that's aggressive.
        // Instead, we just add the "close on click" behavior which is missing.
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });

        // Optional: Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !navToggle.contains(e.target) && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    }
});
