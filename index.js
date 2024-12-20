let homeScoreButtonOne = document.getElementById("home-button-one")
let homeScoreButtonTwo = document.getElementById("home-button-two")
let homeScoreButtonThree = document.getElementById("home-button-three")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += .5
    homeScoreEl.textContent = homeScore;
}
function increaseHomeScoreTwo() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
}
function increaseHomeScoreThree() {
    homeScore += 1.5
    homeScoreEl.textContent = homeScore;
}


 homeScoreButtonOne.addEventListener("click", increaseHomeScoreOne);
 homeScoreButtonTwo.addEventListener("click", increaseHomeScoreTwo); 
 homeScoreButtonThree.addEventListener("click", increaseHomeScoreThree);
 
let guestScoreButtonOne = document.getElementById("guest-button-one")
let guestScoreButtonTwo = document.getElementById("guest-button-two")
let guestScoreButtonThree = document.getElementById("guest-button-three")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore += .5
    guestScoreEl.textContent = guestScore;
}
function increaseGuestScoreTwo() {
    guestScore += 1
    guestScoreEl.textContent = guestScore;
}
function increaseGuestScoreThree() {
    guestScore += 1.5
    guestScoreEl.textContent = guestScore;
}


 guestScoreButtonOne.addEventListener("click", increaseGuestScoreOne);
 guestScoreButtonTwo.addEventListener("click", increaseGuestScoreTwo); 
 guestScoreButtonThree.addEventListener("click", increaseGuestScoreThree);