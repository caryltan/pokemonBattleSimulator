//create app object
const pokemonSimulator = {};

const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/1';

//create method that requests the API information
        //url constructor to specify parameters we are including in API endpoint
            //NOTE: https://pokeapi.co/api/v2/pokemon/{id or name}/to target pokemon 
const pokemon = fetch(pokemonURL);

pokemon
  .then( (res) => {
    return res.json();
  })
  .then( (jsonData) => {
    console.log(jsonData);
  });
 
  //function to get random pokemon number
  function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
  };

const opponentRandom = getRandom(0, 151);
const userRandom = getRandom(0, 151);
const moveRandom = getRandom(0, 10); //**we want max to be array length

console.log(opponentRandom);
console.log(userRandom);
console.log(moveRandom);


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