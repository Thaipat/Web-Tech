function smoothScroll(clicked_id) {
    document.querySelector('.' + clicked_id).scrollIntoView({
        behavior: 'smooth'
    });
}