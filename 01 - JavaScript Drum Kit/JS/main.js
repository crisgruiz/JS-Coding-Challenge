"use strict";

function playSound(e) {
  const audio = document.querySelector(`.audio[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function when we press a non-defined key
  audio.play();
  audio.currentTime = 0; //play the sound each time we press the key

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  eventTransition();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it is not transform
  this.classList.remove("playing");
}

function eventTransition() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
}

window.addEventListener("keydown", playSound);
