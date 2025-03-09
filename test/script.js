function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.innerHTML = "&#10052;";
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

    const size = Math.random() * 20 + 5;
    const startPosition = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 3;

    snowflake.style.left = `${startPosition}px`;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

function startSnowfall() {
    setInterval(createSnowflake, 100);
    document.querySelector(".center-container").style.display = "none"; // Hide the button container
}

document.getElementById("enter-btn").addEventListener("click", startSnowfall);
