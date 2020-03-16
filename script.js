// Menu
let menu = document.querySelector('.menu');

menu.addEventListener('click', event => {
    let menuItems = document.querySelectorAll(`.menu li a`);
    let target = event.target;
    if (target.tagName.toLowerCase() != 'a') return;
    menuItems.forEach(item => {
            item.classList.remove('active');
    });
    target.classList.add('active');
});

