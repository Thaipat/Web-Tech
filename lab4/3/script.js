let j = 1;
function register() {
    let studentID = document.getElementById("studentID").value;
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdText = document.createTextNode(""+j++);
    td.appendChild(tdText);
    tr.appendChild(td);
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        if(i==0){let tdText = document.createTextNode(studentID);td.appendChild(tdText);}
        else if(i==1){let tdText = document.createTextNode(fName);td.appendChild(tdText);}
        else if(i==2){let tdText = document.createTextNode(lName);td.appendChild(tdText);}
        tr.appendChild(td);
    }
    table.appendChild(tr);
}