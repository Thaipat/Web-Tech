let requestURL = 'question.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();
function ExtractData(data) {
    for (let i = 0; i < 3; i++) {
        let questionJson = document.getElementsByClassName("questionJson")[i];
        questionJson.innerHTML = `<td>${i + 1}</td><td>${data[i].question}</td>
    <td>${data[i].answers.a}</td><td>${data[i].answers.b}</td>
    <td>${data[i].answers.c}</td><td>${data[i].answers.correct}</td>`
    }
}


let table = document.getElementById("table");
let j = 4;
function addQuestion() {
    let questionText = document.getElementById("questionText");
    let choiceTextA = document.getElementById("choiceTextA");
    let choiceTextB = document.getElementById("choiceTextB");
    let choiceTextC = document.getElementById("choiceTextC");

    if (document.getElementById("a").checked) {
        var ans = "a";
    } else if (document.getElementById("b").checked) {
        var ans = "b";
    } else if (document.getElementById("c").checked) {
        var ans = "c";
    } else {
        alert("Please choose your answer choice!!")
        return;
    }

    table.innerHTML += `<tr><td>${j++}</td>
    <td>${questionText.value}</td>
    <td>${choiceTextA.value}</td>
    <td>${choiceTextB.value}</td>
    <td>${choiceTextC.value}</td>
    <td>${ans}</td></tr>`;

    questionText.value = "";
    choiceTextA.value = "";
    choiceTextB.value = "";
    choiceTextC.value = "";
    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
}