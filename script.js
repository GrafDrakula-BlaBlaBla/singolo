//mobile menu
document.querySelector(".header #trigger").onclick = function() {
    
    open();
  };
  
  function open() {
    let body = document.querySelector(`body`);
    let icon = document.querySelector(`.header #trigger`);
    let resmenu = document.querySelector(".header .response-menu");
    let deg = -90;
    let backDeg = 180;

    

    if(getComputedStyle(resmenu).display === "none") {
        resmenu.style.display = `block`;
        icon.style.transform = `rotate(${deg}deg)`;
        body.classList.add(`overflow`);
    } else {
        resmenu.style.display = `none`;
        icon.style.transform = `rotate(${backDeg}deg)`;
        body.classList.remove(`overflow`);
    }
}

//Hiliting-Menu

let menu = document.querySelector(`.menu`);


menu.addEventListener(`click`, event => {
    let menuItems = document.querySelectorAll(`#menu li a`);
    let target = event.target;
    if (target.tagName.toLowerCase() !== `a`) return;
    menuItems.forEach(item => {
            item.classList.remove(`active`);
    });
    target.classList.add(`active`);
});


let respon = document.querySelector(`#response-menu`);

respon.addEventListener(`click`, event => {
    let menuItems = document.querySelectorAll(`.response-menu li a`);
    let target = event.target;
    if (target.tagName.toLowerCase() !== `a`) return;
    menuItems.forEach(item => {
        item.classList.remove(`resp-active`);
    });
    target.classList.add(`resp-active`);
});


// Smooth-scroll

const anchors = document.querySelectorAll(`.header .smoothScroll a`);
const respAnchors = document.querySelectorAll(`.header .resp-smoothScroll a`);

for(let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()
    
    const li = anchor.getAttribute('href')
    
    document.querySelector(li).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

for(let anchor of respAnchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()
    
    const li = anchor.getAttribute('href')
    
    document.querySelector(li).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    open();
  })
}

//Display
let s = document.querySelector(`.s-slider .slide .vertical`).addEventListener(`click`,(event) => {
    
    let figure = document.querySelector('.vertical .phone-display');
    console.log(figure);
    figure.classList.toggle('none');
});

document.querySelector(`.s-slider .slide .horizontal`).addEventListener(`click`,(event) => {
    
    let figure = document.querySelector('.horizontal .phone-display');
    console.log(figure);
    figure.classList.toggle('none');
});

// SLIDER
let prev = document.querySelector(`.s-slider .prev`);
let next = document.querySelector(`.s-slider .next`);

  let slides = document.querySelectorAll(`.slide`);
  let slide = [];
    //Удаление картинок со страницы
  slides.forEach((elem, i)=> {
    slide.push(elem);
    elem.remove();
  });

  let step = 0; //Контроль состояния слайдера
  let offset = 0; //Смещение картинки

  let slider = document.querySelector(`.slider`);
  let width = parseInt(getComputedStyle(slider).width);

//Функция создания изображений
  function draw() {
    let div = document.createElement(`div`);
    div = slide[step];
    div.style.left = `${offset * width}px`;

    document.querySelector(`.slider`).append(div);
    if(step + 1 === slide.length) {
      step = 0;
    } else {
      step++;
    }
    offset = 1;
  }

//Смщение изображения
  function offsetFn() {
    prev.onclick = null;
    // next.onclick = null;
    let control = document.querySelector(`#conlrol`);

    let slidesL = document.querySelectorAll(`.slide`);
    let offset2 = 0;

    if(control.classList.contains(`prev`)) {
      slidesL.forEach(elem => {
        elem.style.left = `${offset2 * width - width}px`;
        offset2++;
      });
      setTimeout(function() {
        slidesL[0].remove;
        draw();
        prev.onclick = offsetFn;
      }, 200);
    } else if(control.classList.contains(`next`)){
      slidesL.forEach(elem => {
        elem.style.right = `${offset2 * width + width}px`;
        offset2++;
      });
      setTimeout(function() {
        slidesL[0].remove;
        draw();
        next.onclick = offsetFn;
      }, 200);
    }}

    draw();
    draw();

  prev.onclick = offsetFn;
  next.onclick = offsetFn;


//Hiliting-MenuPortfolio

const buttons = document.querySelector(`.gallery-buttons`);
const images = document.querySelectorAll(`.gallary-images .photo`);

buttons.addEventListener('click', (event) => {
    let images = Array.from(document.querySelectorAll(`.gallary-images .photo`));
    buttons.querySelectorAll('button').forEach(el => el.classList.remove('activeP'));
    event.target.classList.add('activeP');

    let result = changeOrder(images).reverse();
    let gallery = document.querySelector(`.gallary-images`);
    images.forEach(elem => elem.remove());
    
    result.forEach(elem => {
      let img = elem.childNodes[1];
      
      if(img.classList.contains(`activeI`)){
        img.classList.remove(`activeI`);
      }
      gallery.append(elem);
    });
    
    let active = document.querySelectorAll(`.gallary-images .photo .image`)[0];
    active.classList.add(`activeI`);
});

function changeOrder(arr) {
  let insertArr = arr;
  let min = 1;
  let max = insertArr.length - 1;
  

  let start = Math.floor(Math.random() * (max - min + 1)) + min;
  let end = Math.floor(Math.random() * ((max - min) + min));

  let temp = [];

  if(start > Math.ceil(arr.length / 2)) {
    temp = insertArr.splice(start, end);
  } else {
    temp = insertArr.splice(end, start);
  }
  
  insertArr.unshift(...temp);
  
  return insertArr;
}


const borderImg = document.querySelector('.portfolio .gallary-images');
borderImg.addEventListener('click', (event) => {
    borderImg.querySelectorAll('.photo .image').forEach(el => el.classList.remove('activeI'));
    event.target.classList.add('activeI');
});

//FORM

let submit = document.querySelector(`#Contact .form .btn-form`);
function showMessage(overlay, message) {
    let name = document.querySelector(`.form #name`);
    let email = document.querySelector(`.form #email`);
    let subject = document.querySelector(`.form #subject`);
    let description = document.querySelector(`.form #description`);

    overlay.classList.add(`active`);
    message.classList.add(`active`);


    setTimeout(() => {
        name.value = "";
        email.value = "";
        subject.value = "";
        description.value = "";
    },200);
}

let close = document.querySelector(`.message .close`);
function hideMessage(overlay, messege) {
    overlay.classList.remove(`active`);
    messege.classList.remove(`active`);
}

submit.addEventListener(`click`, (event) => {
    let name = document.querySelector(`.form #name`);
    let email = document.querySelector(`.form #email`);
    if(name.value === `` || email.value === ``) {
        return
    }

    event.preventDefault();
    let overlay = document.querySelector(`#overlay`);
    let message = document.querySelector(`.message`);
    let subjectM = document.querySelector(`.subjectM`);
    let descripM = document.querySelector(`.descripM`);

    let subject = document.querySelector(`#subject`).value;
    
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