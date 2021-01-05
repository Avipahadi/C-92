var player_1 = "";
var player_2 = "";

function log() {
    player_1 = document.getElementById("p_1_n").value;
    player_2 = document.getElementById("p_2_n").value;
    localStorage.setItem("player_1_name", player_1);
    localStorage.setItem("player_2_name", player_2);
    window.location = "game.html";
}