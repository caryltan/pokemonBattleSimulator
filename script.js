//create app object
const pokemonSimulator = {};


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

//Event listener to randomize pokemon(refresh page)

const pageRefresh = document.querySelector('#randomize')
pageRefresh.addEventListener('click', function(event){
  location.reload();
});


//  Fightbox Toggle

const fightRefresh = document.querySelector('#fight')
fightRefresh.addEventListener('click', function (event1) {
  const fightBox = document.querySelector(".fightBoxContainer")
  fightBox.classList.toggle("fightBoxContainerOpen")
  // const fightText = document.getElementById("fightText")
  // fightText.classList.toggle("fightTextVisible")
  // const goBackText = document.getElementById("goBackText")
  // goBackText.classList.toggle("goBackVisible")
  
});



//   const fightToggle = document.querySelector("#fight")
//     fightToggle.toggle(){
//     if (fightToggle.innerHTML=="Fight"){
//       fightToggle.innerHTML="Go Back";
//     } else {
//       fightToggle.innerHTML= "Fight";
//     } 
//   }
// });

// goBackInvisible
// fightTextVisible



pokemonSimulator.init = function() {
  pokemonSimulator.getPokemonName();
}

pokemonSimulator.init();
