// Menu
let menu = document.querySelector(`.menu`);

menu.addEventListener(`click`, event => {
    let menuItems = document.querySelectorAll(`.menu li a`);
    let target = event.target;
    if (target.tagName.toLowerCase() !== `a`) return;
    menuItems.forEach(item => {
            item.classList.remove(`active`);
    });
    target.classList.add(`active`);
});



//Display
document.querySelector(`.vertical`).addEventListener(`click`,(event) => {
    // let target = event.target.closest(`.vertical`);
    let figure = document.querySelector('.vertical .phone-display');
    figure.classList.toggle('none');
});

document.querySelector(`.horizontal`).addEventListener(`click`,(event) => {
    // let target = event.target.closest(`.horizontal`);
    let figure = document.querySelector('.horizontal .phone-display');
    figure.classList.toggle('none');
});



// Slider


