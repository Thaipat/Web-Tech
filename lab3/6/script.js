check = true;
var j = 0;
function reply_click(clicked_id) {
    let count = document.getElementById("count");
    let change = document.getElementById(clicked_id);
    if (check && change.innerHTML == "" && clicked_id != "reset") {
        change.innerHTML = "X";
        check = false;
        j++;
        count.innerHTML = "Turn: " + j;
        change.style.borderColor = "#eee";
        check_win();
    } else if (!check && change.innerHTML == "" && clicked_id != "reset") {
        change.innerHTML = "O";
        check = true;
        j++;
        count.innerHTML = "Turn: " + j;
        change.style.borderColor = "#eee";
        check_win();
    } else if (clicked_id == "reset") {
        reset();
    }
}

function reset() {
    j = 0;
    count.innerHTML = "Turn: " + j;
    box1.style.borderColor = "black";
    box2.style.borderColor = "black";
    box3.style.borderColor = "black";
    box4.style.borderColor = "black";
    box5.style.borderColor = "black";
    box6.style.borderColor = "black";
    box7.style.borderColor = "black";
    box8.style.borderColor = "black";
    box9.style.borderColor = "black";

    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
}

function check_win() {
    if (box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML && box1.innerHTML != "" && box4.innerHTML != "" && box7.innerHTML != "") {
        alert("Player '" + box1.innerHTML + "' WIN!!");
        reset();
    } else if(box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML && box2.innerHTML != "" && box5.innerHTML != "" && box8.innerHTML != ""){
        alert("Player '" + box2.innerHTML + "' WIN!!");
        reset()
    } else if(box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML && box3.innerHTML != "" && box6.innerHTML != "" && box9.innerHTML != ""){
        alert("Player '" + box3.innerHTML + "' WIN!!");
        reset();
    } else if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML && box1.innerHTML != "" && box2.innerHTML != "" && box3.innerHTML != ""){
        alert("Player '" + box1.innerHTML + "' WIN!!");
        reset();
    } else if(box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML && box4.innerHTML != "" && box5.innerHTML != "" && box6.innerHTML != ""){
        alert("Player '" + box4.innerHTML + "' WIN!!");
        reset();
    } else if(box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML && box7.innerHTML != "" && box8.innerHTML != "" && box9.innerHTML != ""){
        alert("Player '" + box7.innerHTML + "' WIN!!");
        reset();
    } else if(box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML && box1.innerHTML != "" && box5.innerHTML != "" && box9.innerHTML != ""){
        alert("Player '" + box1.innerHTML + "' WIN!!");
        reset();
    } else if(box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML && box3.innerHTML != "" && box5.innerHTML != "" && box7.innerHTML != ""){
        alert("Player '" + box3.innerHTML + "' WIN!!");
        reset();
    } else if(box1.innerHTML != "" && box2.innerHTML != "" && box3.innerHTML != "" && box4.innerHTML != "" && box5.innerHTML != "" && box6.innerHTML != "" && box7.innerHTML != "" && box8.innerHTML != "" && box9.innerHTML != ""){
        alert("Game Drawn!!");
        reset();
    }
}
