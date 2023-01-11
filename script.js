//create app object
const pokemonSimulator = {};

// const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';

//create method that requests the API information
        //url constructor to specify parameters we are including in API endpoint
            //NOTE: https://pokeapi.co/api/v2/pokemon/{id or name}/to target pokemon 
// const pokemonFetch = fetch(pokemonURL);

pokemonSimulator.getPokemonName = function(){
  let opponentId = getRandom(0,151);
  const opponentUrl = new URL(`https://pokeapi.co/api/v2/pokemon/${opponentId}`);
  let userId = getRandom(0,151);
  const userUrl = new URL(`https://pokeapi.co/api/v2/pokemon/${userId}`);
  fetch(opponentUrl)
    .then(results => {
      return results.json();
    }).then(data => {
      document.querySelector('#opponentName').innerHTML='';
      document.querySelector('#opponentSprite').innerHTML='';
      pokemonSimulator.displayOpponentName(data.species.name)
      pokemonSimulator.displayOpponentSprite(data.sprites.front_default)
    })
    fetch(userUrl)
    .then(results => {
      return results.json();
    }).then(data => {
      document.querySelector('#userName').innerHTML='';
      document.querySelector('#userSprite').innerHTML='';
      pokemonSimulator.displayUserName(data.species.name)
      pokemonSimulator.displayUserSprite(data.sprites.back_default)
    })
}

//function to get random pokemon number
function getRandom(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

pokemonSimulator.displayOpponentName = function(name){
    const opponentNameObject = document.createElement('h2');
    opponentNameObject.innerText = name;
    document.querySelector('#opponentName').appendChild(opponentNameObject);
}
pokemonSimulator.displayUserName = function(name){
  const userNameObject = document.createElement('h2');
  userNameObject.innerText = name;
  document.querySelector('#userName').appendChild(userNameObject);
}

pokemonSimulator.displayOpponentSprite = function(sprite){
  const opponentSpriteObject = document.createElement('img');
  opponentSpriteObject.src = sprite;
  document.querySelector('#opponentSprite').appendChild(opponentSpriteObject);
}
pokemonSimulator.displayUserSprite = function(sprite){
  const userSpriteObject = document.createElement('img');
  userSpriteObject.src = sprite;
  document.querySelector('#userSprite').appendChild(userSpriteObject);
}

pokemonSimulator.init = function() {
  pokemonSimulator.getPokemonName();
}

pokemonSimulator.init();

// // pokemonFetch
// //   .then( (res) => {
// //     return res.json();
// //   })
// //   .then( (data) => {
// //     console.log(data);
// //     pokemonSimulator.displayPokemon(data.species);
// // });


// //function to get random pokemon number
// function getRandom(min, max){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// };

// const pokemon = {};
// console.log(pokemon);

// pokemonSimulator.displayPokemon = function(pokemon){
//   console.log("it's working")
//   pokemon.forEach(function(name){
//     const opponentName = document.createElement('h2');
//     opponentName.innerText = name.species;
//   });
// }

// const opponentRandom = getRandom(0, 151);
// const userRandom = getRandom(0, 151);
// const moveRandom = getRandom(0, 10); //**we want max to be array length

// console.log(opponentRandom);
// console.log(userRandom);
// console.log(moveRandom);

// pokemonSimulator.init = function() {
//   pokemonSimulator.displayPokemon();
// }

// pokemonSimulator.init();

//For Wednesday
//1. take random number and insert into html to get that pokemon
//1.b. targetting random generated pokemon objects and getting moves, sprite, etc.
//2. make twp loops (one for us one for opponent) to filter pokemon that have <4 moves






// function getPokemonByNum(number) {
//     const response =  fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
//     const data =  response.json();
//     //return data;
//     const test = data;
//   }

//   const opponentPokemon = (getPokemonByNum(opponentRandom));
//   console.log(opponentPokemon);








      //pokemon object (both front image will be used)
        //pokemon name
        //sprite url (image)
            //STRETCH GOAL - have one pokemon facing front and one facing back
        //4 random movesets
        //STRETCHGOAL - determine winner based on element

        //"start battle" click listener
            //two random pokemon generated from api pokemon array
            // insert pokemon name into empty h2 FOR EACH pokemon
            // insert sprite url image into html image container FOR EACH pokemon
                //img alt and src attributes
            

        //"fight" click listener (potentially be toggle)
            // create li elements into empty ul for moveset 
            //hp bar (hardcoded) will become visible


      //create init method
        //call method that makes request to API

      //call the init method