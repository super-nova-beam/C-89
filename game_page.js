player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    charAt1 = word.charAt(1);
    charAt2 = word.charAt(Math.floor(word.length / 2));
    charAt3 = word.charAt(word.length - 1);

    remove1 = word.replace(charAt1, "_");
    remove2 = remove1.replace(charAt2, "_");
    remove3 = remove2.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> Q. " + remove3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}