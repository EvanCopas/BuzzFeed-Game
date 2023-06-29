// define all variables
let questions = document.querySelector(".questions")
let button = document.querySelector("#start")
let results = document.querySelector(".results")
let resultsH1 = document.querySelector("#text1")
let retryBtn = document.querySelector(".retryBtn")
let water = document.querySelector("#water");
let land = document.querySelector("#land");
let big = document.querySelector("#big");
let small = document.querySelector("#small");
let animalName = document.querySelector("#animalName");

// start button function
function returnText() {
    questions.style.display = "block";
    button.style.display = "none";
}

// submit button function
function submitBTN() {
    results.style.display = "block";
    questions.style.display = "none";
    retryBtn.style.display = "";

    // conditionals
    if (water.checked && big.checked) {
        animalName.innerHTML = "Shark";
    } else if (water.checked && small.checked) {
        animalName.innerHTML = "Fish";
    } else if (land.checked && big.checked) {
        animalName.innerHTML = "Bear";
    } else if (land.checked && small.checked) {
        animalName.innerHTML = "Rabbit";
    } else if (water.checked === false || land.checked === false || big.checked === false || small.checked === false) {
        resultsH1.innerHTML = "You are not any animal, CHOOSE SOME OPTIONS";
    };
}

// retry button function
function retryBtn2() {
    results.style.display = "none";
    button.style.display = "block";
}