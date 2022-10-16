const btn = document.querySelector('.button');
const pointer = document.querySelector('.pointer');


window.addEventListener('mousemove', (e) => {
    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
});