// imgList = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]

// function changePhoto(){
//     document.querySelector("img").
// 


var randomNumber = Math.floor(Math.random()*6)+1;
var randomImg = "images/dice" + randomNumber + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImg2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImg2);


function win(){
    if(randomNumber<randomNumber2){
        document.querySelector("h1").innerHTML = "🏴󠁧󠁢󠁥󠁮󠁧󠁿Player 2 is win...!";
    }
    else if(randomNumber>randomNumber2){
        document.querySelector("h1").innerHTML = "🏴󠁧󠁢󠁥󠁮󠁧󠁿Player 1 is win...!";
    }
    else{
        document.querySelector("h1").innerHTML = "🏴󠁧󠁢󠁥󠁮󠁧󠁿Draw...!"; 
    }
}

win();
