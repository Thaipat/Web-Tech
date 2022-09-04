let check = true;
function change() {
    let all = document.getElementById("all")
    let sub = document.getElementById("sub")
    if (check) {
        english(all, sub);
        check = false;
    } else {
        thai(all, sub);
        check = true;
    }
}
function thai() {
    all.removeChild(sub);
    let newSub = document.createElement("div");
    all.appendChild(newSub);
    let subAtt = document.createAttribute("id");
    subAtt.value = "sub";
    newSub.setAttributeNode(subAtt);
    let newName = document.createElement("p");
    let nameText = document.createTextNode("ชื่อ:");
    newName.appendChild(nameText);
    let nameInput = document.createElement("input");
    let inputAtt = document.createAttribute("type");
    inputAtt.value = "text";
    nameInput.setAttributeNode(inputAtt);
    newName.appendChild(nameInput);
    newSub.appendChild(newName);
    let newLName = document.createElement("p");
    let lNameText = document.createTextNode("นามสกุล:");
    newLName.appendChild(lNameText);
    let lNameInput = document.createElement("input");
    let inputAtt2 = document.createAttribute("type");
    lNameInput.setAttributeNode(inputAtt2);
    newLName.appendChild(lNameInput);
    newSub.appendChild(newLName);
    let country = document.createElement("p");
    let countryText = document.createTextNode("ประเทศ:");
    country.appendChild(countryText);
    let select = document.createElement("select");
    let i = 0;
    for (i; i < 10; i++) {
        let country1 = document.createElement("option");
        let countryText = ["เลือกประเทศ", "ไทย", "เวียดนาม", "ลาว", "มาเลย์เซีย", "สิงคโปร์", "ฟิลิปปินส์", "เมียนมาร์", "กันพูชา", "บรูไน"]
        country1.appendChild(document.createTextNode(countryText[i]));
        select.appendChild(country1);
    }
    country.appendChild(select);
    newSub.appendChild(country);
    let button = document.createElement("button");
    let buttonType = document.createAttribute("type");
    buttonType.value = "type";
    button.setAttributeNode(buttonType);
    let buttonOnclick = document.createAttribute("onclick");
    buttonOnclick.value = "change()";
    button.setAttributeNode(buttonOnclick);
    let buttonText = document.createTextNode("เปลี่ยนเป็นภาษาอังกฤษ")
    button.appendChild(buttonText);
    newSub.appendChild(button);
}

function english(all, sub) {
    all.removeChild(sub);
    let newSub = document.createElement("div");
    all.appendChild(newSub);
    let subAtt = document.createAttribute("id");
    subAtt.value = "sub";
    newSub.setAttributeNode(subAtt);
    let newName = document.createElement("p");
    let nameText = document.createTextNode("First Name:");
    newName.appendChild(nameText);
    let nameInput = document.createElement("input");
    let inputAtt = document.createAttribute("type");
    inputAtt.value = "text";
    nameInput.setAttributeNode(inputAtt);
    newName.appendChild(nameInput);
    newSub.appendChild(newName);
    let newLName = document.createElement("p");
    let lNameText = document.createTextNode("Last Name:");
    newLName.appendChild(lNameText);
    let lNameInput = document.createElement("input");
    let inputAtt2 = document.createAttribute("type");
    lNameInput.setAttributeNode(inputAtt2);
    newLName.appendChild(lNameInput);
    newSub.appendChild(newLName);
    let country = document.createElement("p");
    let countryText = document.createTextNode("Country:");
    country.appendChild(countryText);
    let select = document.createElement("select");
    let i = 0;
    for (i; i < 10; i++) {
        let country1 = document.createElement("option");
        let countryText = ["Select a country", "Thailand", "Vietnam", "Laos", "Malaysia", "Singapore", "Philippines", "Myanmar", "Cambodia", "Brunei"]
        country1.appendChild(document.createTextNode(countryText[i]));
        select.appendChild(country1);
    }
    country.appendChild(select);
    newSub.appendChild(country);
    let button = document.createElement("button");
    let buttonType = document.createAttribute("type");
    buttonType.value = "type";
    button.setAttributeNode(buttonType);
    let buttonOnclick = document.createAttribute("onclick");
    buttonOnclick.value = "change()";
    button.setAttributeNode(buttonOnclick);
    let buttonText = document.createTextNode("Change to Thai")
    button.appendChild(buttonText);
    newSub.appendChild(button);
}