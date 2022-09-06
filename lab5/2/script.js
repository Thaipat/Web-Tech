let requestURL = 'quiz.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function ExtractData(data) {
    for (let i = 0; i < 11; i++) {
        document.write(`${i+1} ) ${data[i].question}<br>`)
        let list = ["a", "b", "c"];
        for (let j = 0; j < 3; j++){
            document.write(`<input type="radio" name="${i+1}">${data[i].answers[list[j]]} <br>`)
        }
    }
}