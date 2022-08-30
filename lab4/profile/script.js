function smoothScroll(clicked_id) {
    document.querySelector('.' + clicked_id).scrollIntoView({
        behavior: 'smooth'
    });
}

function moreFunction() {
    let parent = document.getElementById("content");
    let child = document.getElementById("child");
    child.style.opacity = "0";
    setTimeout(function(){parent.removeChild(child)}, 100);
    setTimeout(function(){createContent(parent)}, 100);
}

function createContent(parent){
    let para = document.createElement("h1");
    let node = document.createTextNode("กดมาทะไมเรอะ!! หืมมม??");
    let att = document.createAttribute("id");
    att.value = "content-text";
    para.appendChild(node);
    para.setAttributeNode(att)
    parent.appendChild(para);
    let content = document.getElementById("content-text");
    setTimeout(function(){content.style.opacity = "1";}, 300);
}