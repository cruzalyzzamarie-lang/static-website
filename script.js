function updateTime() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    const currentTime =
        hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("liveTime").textContent = currentTime;
}

setInterval(updateTime, 1000);

updateTime();


const targetDate = new Date("December 31, 2026 23:59:59").getTime();

const countdownTimer = setInterval(function() {

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference <= 0) {

        clearInterval(countdownTimer);

        document.getElementById("countdown").textContent =
            "The countdown is finished!";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

s
    document.getElementById("countdown").textContent =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

}, 1000);


const readMoreButtons =
    document.querySelectorAll(".read-more-btn");


readMoreButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const description =
            button.previousElementSibling;

        const moreText =
            description.querySelector(".more-text");


        if (moreText.classList.contains("show")) {

            moreText.classList.remove("show");

            button.textContent = "Read More";

        } else {

            moreText.classList.add("show");

            button.textContent = "Read Less";

        }

    });

});
