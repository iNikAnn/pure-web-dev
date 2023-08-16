document.addEventListener('click', (e) => {
    const maxWidth576px = window.matchMedia('(max-width: 576px)').matches;

    const overlay = document.getElementById('overlay');
    const body = document.getElementById('body');

    const leftbar = document.getElementById('leftbar');
    const leftbarBtn = document.getElementById('leftbar-btn');

    const rightbar = document.getElementById('rightbar');
    const rightbarVisibility = window.getComputedStyle(rightbar).getPropertyValue('visibility');

    const menu = document.getElementById('menu');

    const personBtn = document.getElementById('person-btn');
    const statsCardsWrapper = document.querySelector('.stats-cards__wrapper');

    const toggleRightbarBtn = document.getElementById('toggleRightbarBtn');

    const mobileLeftbarBtn = document.getElementById('mobile-leftbar-btn');
    const mobileRightbarBtn = document.getElementById('mobile-rightbar-btn');
    const mobileBtnsWrapper = document.querySelector('.mobile-btns-wrapper');

    // collapse or expand leftbar
    if (e.target === leftbarBtn) {
        leftbar.classList.toggle('leftbar_collapsed');
        menu.classList.toggle('menu_collapsed');

        if (!leftbar.classList.contains('leftbar_collapsed')) {
            leftbarBtn.classList.add('leftbar__btn_active');
        } else {
            leftbarBtn.classList.remove('leftbar__btn_active');
        };
    };

    // collapse or expand statsCards
    if (e.target === personBtn) {
        statsCardsWrapper.classList.toggle('stats-cards__wrapper_hidden');
    };

    // show or hide leftbar (mobile)
    if (e.target === mobileLeftbarBtn || e.target === overlay) {
        leftbar.classList.toggle('leftbar_visible');
        overlay.classList.toggle('overlay_visible');
        body.classList.toggle('body_disabled');
        mobileBtnsWrapper.classList.toggle('mobile-btns-wrapper_hiddenGradient');
    }

    // show or hide rightbar
    if (e.target === toggleRightbarBtn || e.target === mobileRightbarBtn) {
        if (rightbarVisibility === 'visible') {
            rightbar.classList.remove('rightbar_visible');
            rightbar.classList.add('rightbar_hidden');
        } else {
            rightbar.classList.remove('rightbar_hidden');
            rightbar.classList.add('rightbar_visible');
        };

        if (maxWidth576px) {
            overlay.classList.toggle('overlay_visible');
            body.classList.toggle('body_disabled');
        };
    };
});