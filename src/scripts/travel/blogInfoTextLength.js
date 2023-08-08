const blogText = document.querySelectorAll('.blog__info-text');

blogText.forEach(el => {
    el.textContent = el.innerText.slice(0, 200).trim() + '...';
});