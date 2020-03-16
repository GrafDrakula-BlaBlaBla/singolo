// // Menu
// let menu = document.querySelector(`.menu`);

// menu.addEventListener(`click`, event => {
//     let menuItems = document.querySelectorAll(`.menu li a`);
//     let target = event.target;
//     if (target.tagName.toLowerCase() !== `a`) return;
//     menuItems.forEach(item => {
//             item.classList.remove(`active`);
//     });
//     target.classList.add(`active`);
// });



// //Display
// document.querySelector(`.vertical`).addEventListener(`click`,(event) => {
//     // let target = event.target.closest(`.vertical`);
//     let figure = document.querySelector('.vertical .phone-display');
//     figure.classList.toggle('none');
// });

// document.querySelector(`.horizontal`).addEventListener(`click`,(event) => {
//     // let target = event.target.closest(`.horizontal`);
//     let figure = document.querySelector('.horizontal .phone-display');
//     figure.classList.toggle('none');
// });



// Slider
let prev = document.querySelector('.slider_wrap .prev');
let next = document.querySelector('.slider_wrap .next');
let i = 0;
function slider() {
    let blokSlider = document.querySelector('.slider');
    let slids = document.querySelectorAll('.slider_wrap .slide');
    slids[i].classList.remove(`showSlide`);
    slids[i].classList.add(`hideSlide`);
    blokSlider.classList.toggle(`back`);
    

    i++;

    if(i >= slids.length) {
        i = 0;
    }

    slids[i].classList.remove(`hideSlide`);
    slids[i].classList.add(`showSlide`);
    // blokSlider.classList.toggle(`back`);  
}

// prev.addEventListener(`click`, slider);
next.addEventListener(`click`, slider);
prev.addEventListener(`click`, slider);

