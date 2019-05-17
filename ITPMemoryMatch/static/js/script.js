var arrOfImages = ["csharplogo.png", "csslogo.png", "htmllogo.png", "javalogo.png", "jslogo.png", "pythonlogo.png"];
// Fill these functions out using your code!
function doubleImages(arr) {
    // Your code here
    for(var i = arr.length - 1; i >= 0; i = i -1){
        arr.push(arr[i]);
    }
    console.log(arr);
    return arr;
}
function displayCards(arr) {
    var container = document.getElementById("container");
    for(var i = 0; i < arr.length; i = i+1){
        var newImg = document.createElement("img");
        newImg.src = "static/images/" + arr[i];
        newImg.id = i;
        newImg.className = "card";
        container.appendChild(newImg);
    }
    // Your code here
}
function shuffleCards(arr) {
    // Your code here
    for(var i = 0; i < arr.length; i++){
        var idx1 = Math.floor(Math.random()* arr.length);
        var idx2 = Math.floor(Math.random()* arr.length);

        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    return arr;

}   
function hideACard(idx) {
    // Your code here
    var hide = document.getElementById(idx);

    hide.src = "static/images/questionmark.png";
}
function revealCard(event) {
    // Your code here  
    var clickedImageId = event.target.id;
    var clickedImage = document.getElementById(clickedImageId);
    clickedImage.src = "static/images/" + arrOfImages[clickedImageId];

    cardsPicked.push(clickedImageId);

    if(cardsPicked.length == 2){
        if(arrOfImages[cardsPicked[0]] == arrOfImages[cardsPicked[1]]){
            cardsPicked = [];
        }
        else{
            var hidePickedCards = function() {
                hideACard(cardsPicked[0]);
                hideACard(cardsPicked[1]);
                cardsPicked = [];
            }
            window.setTimeout(hidePickedCards, 1000);
        }
    }
}

// Game logic!
console.log(doubleImages(arrOfImages));
shuffleCards(arrOfImages);
displayCards(arrOfImages);

// call on the hideACard function for each card in our array of images
for (var i = 0; i < arrOfImages.length; i++) {
    // let's call on the hideACard function we just made
    hideACard(i);
}

var cardsPicked = [];    // outside the function, we'll keep track of which cards have been picked

var cards = document.getElementsByClassName("card");    // grab all the cards
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", revealCard);
}