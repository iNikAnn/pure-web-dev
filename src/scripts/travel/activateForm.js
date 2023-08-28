const forms = document.querySelectorAll('.form');

forms.forEach(form => {
    form.addEventListener('focusin', () => {
        form.classList.add('active');
    });

    form.addEventListener('focusout', () => {
        form.classList.remove('active');
    });
});