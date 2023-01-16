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
      //pokemon name
      pokemonSimulator.displayOpponentName(data.species.name)
      //pokemon sprite
      pokemonSimulator.displayOpponentSprite(data.sprites.front_default)
    })
    fetch(userUrl)
    .then(results => {
      return results.json();
    }).then(data => {
      document.querySelector('#userName').innerHTML='';
      document.querySelector('#userSprite').innerHTML='';
      //pokemon name
      pokemonSimulator.displayUserName(data.species.name)
      //pokemon sprite
      pokemonSimulator.displayUserSprite(data.sprites.back_default)
      //pokemon moves
      pokemonSimulator.displayUserMovesOne(data.moves[0].move.name)
      pokemonSimulator.displayUserMovesTwo(data.moves[1].move.name)
      pokemonSimulator.displayUserMovesThree(data.moves[2].move.name)
      pokemonSimulator.displayUserMovesFour(data.moves[3].move.name)
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

//pokemon moves
pokemonSimulator.displayUserMovesOne = function(moves){
  const userMoveOne = document.createElement('h2');
  userMoveOne.innerText = moves;
  document.querySelector('#moveOne').appendChild(userMoveOne);
}
pokemonSimulator.displayUserMovesTwo = function(moves){
  const userMoveTwo = document.createElement('h2');
  userMoveTwo.innerText = moves;
  document.querySelector('#moveTwo').appendChild(userMoveTwo);
}
pokemonSimulator.displayUserMovesThree = function(moves){
  const userMoveThree = document.createElement('h2');
  userMoveThree.innerText = moves;
  document.querySelector('#moveThree').appendChild(userMoveThree);
}
pokemonSimulator.displayUserMovesFour = function(moves){
  const userMoveFour = document.createElement('h2');
  userMoveFour.innerText = moves;
  document.querySelector('#moveFour').appendChild(userMoveFour);
}

//Event listener to randomize pokemon(refresh page)
const pageRefresh = document.querySelector('#randomize')
pageRefresh.addEventListener('click', function(event){
  location.reload();
});

//  Fightbox Toggle
const fightRefresh = document.querySelector('#fight')
fightRefresh.addEventListener('click', function (event1) {
  // open fight box and make visible to page
  // const fightBox = document.querySelector(".fightBoxContainer")
  // fightBox.classList.toggle("fightBoxContainerOpen")

  const moveAppearOne = document.querySelector(".moveOne")
  moveAppearOne.classList.toggle("textAppear")
  const moveAppearTwo = document.querySelector(".moveTwo")
  moveAppearTwo.classList.toggle("textAppear")
  const moveAppearThree = document.querySelector(".moveThree")
  moveAppearThree.classList.toggle("textAppear")
  const moveAppearFour = document.querySelector(".moveFour")
  moveAppearFour.classList.toggle("textAppear")

  //make "fight" in h2 invisible and toggle between two states
  const fightText = document.querySelector(".textVisible")
  fightText.classList.toggle("textInvisible")

  //make "go back" in h2 visible and toggle between two states
  const goBackText = document.querySelector(".backInvisible")
  goBackText.classList.toggle("textAppear")
});

const decideOutcome = document.querySelector('#decideWinner')
decideOutcome.addEventListener('click', function(event2){
  //decide winner randomly
  const outcome = document.querySelector("#winnerText");
  randomizedOutcome = getRandom(0,2)
  if (randomizedOutcome == 0) {
    outcome.innerText = "Opponent wins!"
  } else {
    outcome.innerText = "User wins!"
  }
});

//move animations
//---
//moveOne animation
const moveOneAnimation = document.querySelector('#moveOne')
moveOneAnimation.addEventListener('click', function(event3){
  const animationOne = document.querySelector(".fa-heart");
  animationOne.classList.add("textAppear");
//timer to remove classlist
  setTimeout(function(moveOneAnimation) {
    animationOne.classList.remove("textAppear");
  }, 1000);

});
//moveTwo animation
const moveTwoAnimation = document.querySelector('#moveTwo')
moveTwoAnimation.addEventListener('click', function(event4){
  const animationTwo = document.querySelector(".fa-bolt")
  animationTwo.classList.add("textAppear")
  // timer to remove classlist
  setTimeout(function(moveTwoAnimation) {
    animationTwo.classList.remove("textAppear");
  }, 1000);
});
//moveThree animation
const moveThreeAnimation = document.querySelector('#moveThree')
moveThreeAnimation.addEventListener('click', function(event5){
  const animationThree = document.querySelector(".fa-droplet")
  animationThree.classList.add("textAppear")
  //timer to remove classlist
  setTimeout(function(moveThreeAnimation) {
    animationThree.classList.remove("textAppear");
  }, 1000);
});
//moveFour animation
const moveFourAnimation = document.querySelector('#moveFour')
moveFourAnimation.addEventListener('click', function(event6){
  const animationFour = document.querySelector(".fa-fire")
  animationFour.classList.add("textAppear")
  //timer to remove classlist
  setTimeout(function(moveOneAnimation) {
    animationFour.classList.remove("textAppear");
  }, 1000);
});

pokemonSimulator.init = function() {
  pokemonSimulator.getPokemonName();
}

pokemonSimulator.init();
