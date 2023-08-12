window.addEventListener('DOMContentLoaded', (e) => {
    const minWidth1440px = window.matchMedia('(min-width: 1440px)');
    const maxWidth576px = window.matchMedia('(max-width: 576px)');

    // function handleMediaQueryChange() {
    if (minWidth1440px.matches) {
        menu.classList.remove('collapsed');
    } else if (maxWidth576px.matches) {
        menu.classList.remove('collapsed');
    } else {
        menu.classList.add('collapsed');
    };
    // };
});