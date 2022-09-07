let requestURL = 'movies.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function ExtractData(data) {
    document.write("<body><div>")
    for (let i = 0; i < data.movies.showing.length; i++) {
        document.write(`<div><img src="${data.movies.showing[i].poster}" style="width:150px"></div>`)
    }
    document.write("</div></body>")
}