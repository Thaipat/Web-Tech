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
    let content = document.getElementById("content-text");
    setTimeout(function(){content.style.opacity = "1";}, 300)
}