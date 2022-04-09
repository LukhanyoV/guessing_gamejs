const mystery = Math.floor(Math.random()*100+1);
const input = document.querySelector("#input");
const form = document.querySelector("#play");
const output = document.querySelector("#output");
const guesses = document.querySelector("#guesses");
let remaining = 10;
const r_msg = "Guesses remaining: ";

const message = msg => {
    guesses.innerHTML = r_msg + remaining;
    output.innerHTML = msg;
    if(msg === "Yay you won!" || remaining === 0) input.readOnly = true;
    if(remaining === 0 && msg !== "Yay you won!") output.innerHTML = "You lost insufficient guesses remaining!"
};

const play = () => {
    remaining--;
    return message(
        (mystery === input.value) ? "Yay you won!" : 
        (mystery > input.value) ? "You guessed to low" : 
        (mystery < input.value) ? "You guessed to high" : 
        "Yay you won!"
    );
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    play();
}); 
