var score = 0;

function update_s() {
    score = score + 1;
    document.getElementById("s").innerHTML = "Score :".concat(" " + score);
}

function save_s() {
    localStorage.setItem("score", score);
}

function n_p() {
    window.location = "activity_2.html";
}