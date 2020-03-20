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



// // Slider
// let prev = document.querySelector('.slider_wrap .prev');
// let next = document.querySelector('.slider_wrap .next');
// let i = 0;
// function slider() {
//     let blokSlider = document.querySelector('.slider');
//     let slids = document.querySelectorAll('.slider_wrap .slide');
//     slids[i].classList.remove(`showSlide`);
//     slids[i].classList.add(`hideSlide`);
//     blokSlider.classList.toggle(`back`);
    

//     i++;

//     if(i >= slids.length) {
//         i = 0;
//     }

//     slids[i].classList.remove(`hideSlide`);
//     slids[i].classList.add(`showSlide`);  
// }
// next.addEventListener(`click`, slider);
// prev.addEventListener(`click`, slider);


// // Portfolio

// const buttons = document.querySelector(`.gallery-buttons`);
// const images = document.querySelectorAll(`.gallary-images .photo`);
// // console.log(images);

// buttons.addEventListener('click', (event) => {
//     buttons.querySelectorAll('button').forEach(el => el.classList.remove('activeP'));
//     event.target.classList.add('activeP');
//     changeOrder();
// });

// function changeOrder() {
//     const images = document.querySelectorAll(`.gallary-images .photo`);
//     images.forEach(elem => {
//         let random = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
//         elem.style.order = `${random}`;
//     })
// }


// const borderImg = document.querySelector('.portfolio .gallary-images');
// borderImg.addEventListener('click', (event) => {
//     borderImg.querySelectorAll('.photo .image').forEach(el => el.classList.remove('activeI'));
//     event.target.classList.add('activeI');
// });

// Form
let submit = document.querySelector(`#Contact .form .btn-form`);
function showMessage(overlay, message) {
    overlay.classList.add(`active`);
    message.classList.add(`active`);
}

let close = document.querySelector(`.message .close`);
function hideMessage(overlay, messege) {
    overlay.classList.remove(`active`);
    messege.classList.remove(`active`);
}

submit.addEventListener(`click`, (event) => {
    event.preventDefault();
    let overlay = document.querySelector(`#overlay`);
    let message = document.querySelector(`.message`);
    console.log(message);
    let subjectM = document.querySelector(`.subjectM`);
    let descripM = document.querySelector(`.descripM`);
    // console.log(descripM);

    // let name = document.querySelector(`#name`).value;
    let subject = document.querySelector(`#subject`).value;
    // let email = document.querySelector(`#email`).value;
    let descrip = document.querySelector(`#description`).value;

    if(subject.length > 0) {
        subjectM.textContent = `Subject: ${subject}`;
    }

    if(descrip.length > 0) {
        descripM.textContent = `Description: ${descrip}`;
    }
    
    if(!overlay.classList.contains(`active`)) {
        showMessage(overlay, message);
    }

} );

close.addEventListener(`click`, () => {
    let overlay = document.querySelector(`#overlay`);
    let message = document.querySelector(`.message`);

    if(overlay.classList.contains(`active`)) {
        hideMessage(overlay, message);
    }
});





