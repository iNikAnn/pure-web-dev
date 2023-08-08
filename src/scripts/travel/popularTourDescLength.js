const el = document.querySelectorAll('.popular__tour-desc');

el.forEach(el => {
    el.textContent = el.innerText.slice(0, 99).trim() + '...';
});