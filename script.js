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

document.addEventListener("DOMContentLoaded", function() {
    const boxOutline = document.querySelector('.box-outline');
    const line = document.querySelector('.line');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const boxWidth = boxOutline.offsetWidth;
        const boxHeight = boxOutline.offsetHeight;
        const boxOffset = 10; // Adjust the offset as needed

        // Position the box outline around the mouse cursor
        boxOutline.style.left = mouseX - boxWidth / 2 + 'px';
        boxOutline.style.top = mouseY - boxHeight / 2 + 'px';

        // Position the line to the right of the box outline
        line.style.left = mouseX + boxWidth / 2 + boxOffset + 'px';
        line.style.top = mouseY - line.offsetHeight / 2 + 'px';

        // Show box and line on mouse move
        boxOutline.style.display = 'block';
        line.style.display = 'block';
    });

    // Hide box and line on mouse out
    document.addEventListener('mouseout', function() {
        boxOutline.style.display = 'none';
        line.style.display = 'none';
    });
});
