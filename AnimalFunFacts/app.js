// This is the Animal Fun Facts Assignment from Code Academy

// import animals from animals.js file
import { animals } from "./animals";

// import react
import React from "react";
import ReactDOM from "react-dom";

// Create empty title
const title = "";

const showBackground = true;

// background component of the page
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const images = [];

// loops throught animals and adds the img tags to new images array
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

// function to display animal facts
function displayFact(e) {
  // Gets selected animal information
  const selectedAnimal = e.target.alt;
  //   Selects the animal we selected
  const animalInfo = animals[selectedAnimal];
  //   Generates random number
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  //   chooses the fact from array based on random number
  const funFact = animalInfo.facts[optionIndex];

  //   displays fact in the fact id from the div in the component
  document.getElementById("fact").innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>
    {showBackground && background}
    <p id="fact"> </p>
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
