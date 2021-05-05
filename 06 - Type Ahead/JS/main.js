"use strict";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const form = document.querySelector(".search-form");
const inputSearch = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

let cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    cities = data.map((data) => data);
  });

// function isValidResult(city) {
//   let matchCities = [];
//   for (let i = 0; i < cities.length; i++) {
//     if (cities[i].city.toLowerCase().includes(city)) {
//       matchCities.push(cities[i]);
//     }
//   }
//   return matchCities;
// }

function isValidResult(city) {
  return cities.filter((i) => i.city.toLowerCase().includes(city));
}

function findMatches() {
  let matches = isValidResult(inputSearch.value);
  let htmlCode = "";
  for (const match of matches) {
    htmlCode += `<li class ="list">`;
    htmlCode += `<p>`;
    htmlCode += `<span class="name">${match.city}, </span>`;
    htmlCode += `<span class="state"> ${match.state}</span>`;
    htmlCode += `</p>`;
    htmlCode += `<span class="population"> ${match.population}</span>`;
    htmlCode += `</li>`;
  }
  suggestions.innerHTML = htmlCode;
}

// function displayMatches() {
//   let htmlCode = "";
//   for (const result of results) {
//     htmlCode += `<li>`;
//     htmlCode += `<span class="name">${result.city}</span>`;
//     htmlCode += `<span class="population"> ${result.state}</span>`;
//     htmlCode += `</li>`;
//   }

//   suggestions.innerHTML = htmlCode;
// }

inputSearch.addEventListener("keyup", findMatches);
