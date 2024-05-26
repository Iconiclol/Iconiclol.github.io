document.addEventListener("DOMContentLoaded", function() {
    const boxOutline = document.querySelector('.box-outline');
    const line = document.querySelector('.line');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Adjust the size of the box
        const boxWidth = 50;
        const boxHeight = 50;
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
