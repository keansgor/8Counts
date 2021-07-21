/*======= SHOW MENU ======*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}



/*======= SHOW APPOINTMENT ======*/
const appointLayer = document.getElementById('appoint__container-cover'),
      appointBtn = document.getElementById('appoint-btn'),
      appointClose = document.getElementById('appoint-close')

if(appointBtn){
    appointBtn.addEventListener('click', ()=>{
        appointLayer.classList.add('show-appoint');
        document.body.style.overflow = 'hidden'
    })
}


if(appointClose){
    appointClose.addEventListener('click', ()=>{
        appointLayer.classList.remove('show-appoint')
        document.body.style.overflow = ''
    })
}



/*========= CHANGE HEADER BACKGROUND COLOR =========*/
window.addEventListener('scroll', scrollHeader)

function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}



/*================= SERVICES SLIDER ====================*/
var swiper = new Swiper(".mySwiper", {
    //Responsive breakpoints (media query)
    breakpoints: {
        //When media screen is less than 576px
        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },

        //When media screen is in between 576px & 767px
        576: {
            slidesPerView: 2,
            spaceBetween: -60,
        },

        //When media screen is more than 768px
        768: {
            slidesPerView: 3,
            spaceBetween: -60,
        },   
    },

    //slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });



/*================= FAQ SECTION ====================*/
const faqHeaders = document.querySelectorAll(".faq__link");

faqHeaders.forEach(faqHeader => {
    faqHeader.addEventListener('click', event => {
      faqHeader.classList.toggle("active");

        //When we clicked a faqHeader, the other opened faqHeader will be automatically closed
        //const currentActiveFaqHeader = document.querySelector(".faq__link.active");
       
        //if(currentActiveFaqHeader && currentActiveFaqHeader !== faqHeader){
           //currentActiveFaqHeader.classList.toggle("active");
          //currentActiveFaqHeader.nextElementSibling.style.maxHeight = 0;
        //}

        //When we clicked the faqHeader, the faqAnswer will pop-up with its content's height
        //nextElementSibling refers to the next ".faq__answer-body"
        const faqAnswer = faqHeader.nextElementSibling;
        if(faqHeader.classList.contains("active")){
           faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        }

        else{
           faqAnswer.style.maxHeight = 0;
        }

    });
});

    
