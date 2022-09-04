function submitTable() {
    reset();
    let all = document.getElementById("table");
    for (let k = 1; k <= 8; k++) {
        let newCol = document.createElement("div");
        newCol.setAttribute("id", `col${k}`)
        all.appendChild(newCol);
    }
    createTable();
}

function reset() {
    let table = document.getElementById("table");
    table.innerHTML = '';
}

function createTable(){
    let check = 1;
    let j = 1;
    let newRow = true;
    let number = parseInt(document.getElementById("number").value);
    for (let i = 1; i <= number; i++) {
        if (j > 8) {
            j = 1;
            newRow = true;
        }
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("id", `box${i}`)
        let col = document.getElementById(`col${j}`);
        col.appendChild(box);
        let getBox = document.getElementById(`box${i}`);
        if (newRow) {
            check++;
            newRow = false
        }
        if (check % 2 == 1) { getBox.style.backgroundColor = "black"; }
        else { getBox.style.backgroundColor = "white"; }
        j++;
        check++;
    }
}