let snowfallActive = true;
let snowfallInterval;

function createSnowflake() {
    if (!snowfallActive) return; // Stop creating new snowflakes after 3 seconds

    const snowflake = document.createElement("div");
    snowflake.innerHTML = "&#10052;";
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

    const size = Math.random() * 15 + 5;
    const startPosition = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 3;

    snowflake.style.left = `${startPosition}px`;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        snowflake.remove(); // Remove after it falls past the screen
    }, duration * 1000);
}

function startSnowfall() {
    document.querySelector(".center-container").style.display = "none"; // Hide the button

    snowfallInterval = setInterval(createSnowflake, 100);

    setTimeout(() => {
        snowfallActive = false; // Stop creating new snowflakes after 3 seconds
        clearInterval(snowfallInterval);

        setTimeout(() => {
            document.body.innerHTML = ""; // Make the screen completely blank
        }, 5000); // Wait for remaining snowflakes to fall off the screen
    }, 3000);
}

document.getElementById("enter-btn").addEventListener("click", startSnowfall);
