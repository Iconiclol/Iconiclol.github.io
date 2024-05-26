// script.js

document.addEventListener("DOMContentLoaded", function() {
    let startTime = localStorage.getItem('startTime');
    if (!startTime) {
        startTime = new Date();
        startTime.setHours(startTime.getHours() - 0);
        localStorage.setItem('startTime', startTime);
    }

    function updateDaysCounter() {
        const now = new Date();
        const timeDiff = now - new Date(startTime);

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('daysCounter').innerText = `${days} Days ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateDaysCounter();

    setInterval(updateDaysCounter, 1000);
});
