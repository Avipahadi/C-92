var player_1_name = localStorage.getItem("player_1_name");
var player_2_name = localStorage.getItem("player_2_name");

var player_1_s = 0;
var player_2_s = 0;

document.getElementById("p_n_1").innerHTML = player_1_name;
document.getElementById("p_n_2").innerHTML = player_2_name;

document.getElementById("score_p_1").innerHTML = player_1_s;
document.getElementById("score_p_2").innerHTML = player_2_s;

document.getElementById("q").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("a").innerHTML = "Answer Turn - " + player_2_name;

function send() {
    get_word = document.getElementById("word").value;
    lower_w = get_word.toLowerCase();
    charAt1 = lower_w.charAt(1);
    length_divide_2 = Math.floor(lower_w.lenght / 2);
    charAt2 = lower_w.charAt(length_divide_2);
    length_minus_1 = lower_w.length - 1;
    charAt3 = lower_w.charAt(length_minus_1);
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    question = "<h4 id='word_display'>Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='answer'>";
    check = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = question + input_box + check;
    document.getElementById("output").style.display = "inline";
    document.getElementById("output").innerHTML = row;
    document.getElementById("w_d").style.display = "none";
}