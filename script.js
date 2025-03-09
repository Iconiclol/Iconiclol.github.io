function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";
    document.body.appendChild(snowflake);
    
    let size = Math.random() * 10 + 5;
    snowflake.style.fontSize = size + "px";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);
