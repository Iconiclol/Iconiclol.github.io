document.addEventListener('mousemove', (e) => {
    const boxOutline = document.querySelector('.box-outline');
    const box = document.querySelector('.box');
    const line = document.querySelector('.line');
    
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    box.style.left = `${e.clientX - (boxWidth / 2)}px`;
    box.style.top = `${e.clientY - (boxHeight / 2)}px`;
    boxOutline.style.left = `${e.clientX - (boxWidth / 2)}px`;
    boxOutline.style.top = `${e.clientY - (boxHeight / 2)}px`;

    const lineLeft = e.clientX + (boxWidth / 2); // Adjusting the line position to the right of the box
    const lineTop = e.clientY - (boxHeight / 2);
    line.style.left = `${lineLeft}px`;
    line.style.top = `${lineTop}px`;
});
