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

// Challenge #3
// When the user clicks on one of the games in the list, display all the details of that game.

//Then I need to:
//[x] add an event listener to the game list that when you click, passes in a callback function to render that game

// Challenge #4
// The user should be able to enter a high score in the form on the right side and have it show that value for "high score".

// The value of the high score does not need to persist between refreshes, but should save state when switching between games.

//Lastly, I need to:
//[x] select the form in global scope
//[x] add an event listener to the form that when submitted, passes in a callback that: prevents default, sets a variable equal to the value on the form, changes the value of the high score in the DOM
