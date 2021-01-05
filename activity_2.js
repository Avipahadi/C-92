var s = "";

function sh_s() {
    s = localStorage.getItem("score");
    document.getElementById("score_a_2").innerHTML = "Score".concat(" ".concat(s));
}

function b() {
    window.location = "activity.html";
}