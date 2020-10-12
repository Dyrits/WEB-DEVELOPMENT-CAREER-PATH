import {animals} from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const displayFact = $event => {
  const animal = animals[$event.target.alt]
  document.getElementById("fact").textContent = animal.facts[Math.floor(Math.random() * animal.facts.length)];
}

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

const background = (
  <img
    className="backkground"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);

const title = "";

const animalFacts = (
  <div>
    <h1>{title ? title : "Click an animal for a fun fact"}</h1>
    {background}
    <div className="animals">{images}</div>
    <p id="fact"/>
  </div>
);


ReactDOM.render(animalFacts, document.getElementById('root'))
