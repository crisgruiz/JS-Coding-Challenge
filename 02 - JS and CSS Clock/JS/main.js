"use strict";

function setDate() {
  const now = new Date();

  const secondHand = document.querySelector(".second-hand");
  const seconds = now.getSeconds();
  const secondsDegress = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegress}deg)`;

  const minHand = document.querySelector(".min-hand");
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourHand = document.querySelector(".hour-hand");
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
