const forms = document.querySelectorAll('form');

function deactivateAllForms() {
    forms.forEach(e => {
        e.classList.remove('active');
    });
}

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        deactivateAllForms();
        e.target.closest('.form').classList.add('active');
    } else {
        deactivateAllForms();
    };
});

document.addEventListener('focusin', (e) => {
    if (e.target.tagName === 'INPUT') {
        deactivateAllForms();
        e.target.closest('.form').classList.add('active');
    } else {
        deactivateAllForms();
    };
});