document.addEventListener("DOMContentLoaded", () => {

    const secondHand = document.querySelector(".second");
    const second2Hand = document.querySelector(".second2");
    const minuteHand = document.querySelector(".minute");
    const hourHand = document.querySelector(".hour");

    const updateClock = () => {
        console.log(new Date().toLocaleTimeString());

        const currentDate = new Date();
        const seconds = currentDate.getSeconds();
        const minutes = currentDate.getMinutes();
        const hours = currentDate.getHours();

        const secondRatio = seconds / 60;
        const minuteRatio = (minutes * 60) / 3600;
        const hourRatio = ((hours % 12) * 60) / 720;

        secondHand.style.transform = `rotate(${secondRatio * -360}deg)`;
        second2Hand.style.transform = `rotate(${secondRatio * -360 + 180}deg)`;
        minuteHand.style.transform = `rotate(${minuteRatio * -360}deg)`;
        hourHand.style.transform = `rotate(${hourRatio * -360}deg)`;
    };

    updateClock();
    setInterval(updateClock, 1000);
})