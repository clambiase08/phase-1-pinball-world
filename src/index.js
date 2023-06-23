//Challenge #1
// Make a request to http://localhost:3000/games and add the names of all the games in the #game-list nav element. We want to see both the name and the manufacturer for each game, since some games have the same name from different manufacturers. The end result should be of the format name (manufacturer). For example, Ghostbusters (Stern).

// (Optional) If you want the styling to work, each element needs to be an h5 tag.

//First, I need to:
//[x] write a fetch function that takes in a url and returns a fetch
//[x] initialize the function by calling it, passing in the url and chaining a .then that takes the data array, and iterates over it with forEach, passing in a render function
//[x] write a render function that takes in the json data object and renders it to the nav element for both the name and manufacturer and appends it to the DOM

// Challenge #2
// When the page loads, show the image, name, and high_score properties of the the first game in the array returned from your fetch.

//Then, I need to:
//[x] write a render function for the game details of image, name, and high score by setting those HTML elements equal to the values of the gameobj keys.values in the json data
//[x] calling the new render function in the .then chained onto the intializer with an array tag [0] so the first game shows on page load

//Global variables
const URL = "http://localhost:3000/games"

//DOM Selectors
const gameList = document.querySelector(".game-list")
const detailTitle = document.querySelector("#detail-title")
const detailScore = document.querySelector("#detail-high-score")
const image = document.querySelector("#detail-image")


//Fetch function

function getGameData(url) {
    return fetch(url)
    .then(res => res.json())
}

//Initializer

getGameData(URL)
.then(gameArr => {
    gameArr.forEach(renderGames)
    renderDetail(gameArr[0])
})

//Render functions

function renderGames(gameObj) {
    const game = document.createElement('h5')
    game.textContent = `${gameObj.name} (${gameObj.manufacturer_name})`
    gameList.appendChild(game)
}

function renderDetail(gameObj) {
    detailTitle.textContent = gameObj.name
    detailScore.textContent = gameObj.high_score
    image.src = gameObj.image
}

