window.addEventListener('DOMContentLoaded', (e) => {
    const leftbar = document.getElementById('leftbar');
    const leftbarBtn = document.getElementById('leftbar-btn');
    const menu = document.getElementById('menu');

    const minWidth1441px = window.matchMedia('(min-width: 1441px)').matches;
    const maxWidth576px = window.matchMedia('(max-width: 576px)').matches;

    function handleMediaQueryChange() {
        if (minWidth1441px) {
            expandLeftbar();
        };

        if (maxWidth576px) {
            expandLeftbar();
        };
    }

    handleMediaQueryChange();

    // window.addEventListener('resize', handleMediaQueryChange);

    function expandLeftbar() {
        leftbar.classList.remove('leftbar_collapsed');
        leftbarBtn.classList.add('leftbar__btn_active');
        menu.classList.remove('menu_collapsed');
    };
});
