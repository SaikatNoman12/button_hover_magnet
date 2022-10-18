const button = document.querySelectorAll('.button');
const pointer = document.querySelector('.pointer');


// button hover magnet;
button.forEach(buttonBox => {

    buttonBox.addEventListener('mousemove', (e) => {

        const position = buttonBox.getBoundingClientRect();

        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        buttonBox.style.transform = `translate(${x * .15}px, ${y * .15}px)`;
        buttonBox.children[0].style.transform = `translate(${x * .2}px, ${y * .2}px)`;

        pointer.classList.add('buttonHover');

    });

    buttonBox.addEventListener('mouseout', () => {

        buttonBox.style.transform = `translate(0px, 0px)`;
        buttonBox.children[0].style.transform = `translate(0px, 0px)`;

        pointer.classList.remove('buttonHover');

    });

});


// pointer event
window.addEventListener('mousemove', (e) => {

    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px'

});