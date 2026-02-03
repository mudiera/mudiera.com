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
    // Target date: 34 days from Feb 3, 2026 -> March 9, 2026
    const targetDate = new Date('March 14, 2026 00:00:00').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Handle expired timer if needed, or just show 00
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

    // Run immediately then every second
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
});
