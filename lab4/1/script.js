function calculate(){
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let result = document.getElementById("result");
    result.innerHTML = "Result : "+(parseInt(value1)+parseInt(value2));
    let newchild = document.createElement("p");
    let text = document.createTextNode(value1+" + "+value2+" = "+(parseInt(value1)+parseInt(value2)));
    newchild.appendChild(text);
    let parent = document.getElementById("parent");
    parent.appendChild(newchild);
}