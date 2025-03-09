function createSnowflake() {
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

    let fallInterval = setInterval(() => {
        let top = parseInt(getComputedStyle(snowflake).top) || 0;
        if (top < window.innerHeight - 20) {
            snowflake.style.top = `${top + 2}px`;
        } else {
            clearInterval(fallInterval);
            snowflake.classList.add("settled");
            addToSnowPile(snowflake);
        }
    }, 20);
}

function addToSnowPile(snowflake) {
    snowflake.style.position = "absolute";
    snowflake.style.bottom = "0px";
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    document.getElementById("snow-pile").appendChild(snowflake);
}

function startSnowfall() {
    setInterval(createSnowflake, 100);
    document.querySelector(".center-container").style.display = "none";
}

document.getElementById("enter-btn").addEventListener("click", startSnowfall);
