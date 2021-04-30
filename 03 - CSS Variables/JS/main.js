"use strict";
const inputs = document.querySelectorAll(".input");

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; // When we don't have dataset.sizing (base color) is empty
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
