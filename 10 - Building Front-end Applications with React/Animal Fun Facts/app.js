'use strict';

const animals = {
  dolphin: {
    image: './images/dolphin.png',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: './images/lobster.png',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: './images/starfish.png',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
};

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
    src="./images/ocean.jpg"
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
