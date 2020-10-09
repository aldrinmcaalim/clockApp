const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('min-hand');
const secondHand = document.querySelector('.second-hand');


function setTime() {
    const time = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
}