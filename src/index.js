
//Global variables
const URL = "http://localhost:3000/games"

//DOM Selectors
const gameList = document.querySelector(".game-list")
const detailTitle = document.querySelector("#detail-title")
let detailScore = document.querySelector("#detail-high-score")
const image = document.querySelector("#detail-image")
const form = document.querySelector("#high-score-form")
const scoreInput = document.querySelector("#score-input")
let selectedGame;


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

    game.addEventListener('click', () => renderDetail(gameObj))
}

function renderDetail(gameObj) {
    selectedGame = gameObj
    detailTitle.textContent = gameObj.name
    detailScore.textContent = gameObj.high_score
    image.src = gameObj.image
}

//Event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newScore = parseInt(e.target['score-input'].value)
    selectedGame.high_score += newScore
    renderDetail(selectedGame)
    form.reset()
})