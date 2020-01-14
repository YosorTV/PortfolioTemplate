import {TimelineMax} from "gsap/all";
import gsap from 'gsap';

gsap.registerPlugin(TimelineMax);

function init() {
  const tl = new TimelineMax({
    onStart: () => {
      slides.forEach(slide => {
        slide.style.pointerEvents = 'none';
      });
    },
    onComplete: () => {
      slides.forEach(slide => {
        slide.style.pointerEvents = 'all';
      });
    }
    
  });

  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".page");
  const backgrounds = [
    `radial-gradient(#2B3760, #0B1023)`,
    `radial-gradient(#4E3022, #161616)`,
    `radial-gradient(#4E4342, #151515)`
  ];
//Tracker's
  let current = 0; 
  let scrollSlide = 0;
//Switch Dots
const changeDots = (dot) => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  dot.classList.add('active');
}

//Switch Slides
  slides.forEach((slide, index) => {
    slide.addEventListener('click', function() {
      changeDots(this);
      nextSlide(index);
      scrollSlide = index;
    });
  });

//Slide animation
  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .model-left");
    const nextRight = nextPage.querySelector(".hero .model-right");
    const currentLeft = currentPage.querySelector(".hero .model-left");
    const currentRight = currentPage.querySelector(".hero .model-right");
    const nextText = nextPage.querySelector(".details");
    const portfolio = document.querySelector(".portfolio");
//Animation
    tl.fromTo(currentLeft,  .3, {y: '-10%'}, {y: '-100%'});
    tl.fromTo(currentRight, .3, {y: '10%'}, {y:'-100%'}, '-=0.2');

    tl.to(portfolio, .3, {backgroundImage: backgrounds[pageNumber]});

    tl.fromTo(currentPage, .3, {opacity: 1, pointerEvents: 'all'}, {opacity: 0, pointerEvents: 'none'});
    tl.fromTo(nextPage, .3, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'});

    tl.fromTo(nextLeft, .3, {y:'-100%'}, {y: '-10%'}, '-=0.6');
    tl.fromTo(nextRight,  .3, {y:'-100%'}, {y:'10%'}, '-=0.8' );

    tl.fromTo(nextText, .3, {opacity: 0, y: 200}, {opacity: 1, y:0});
    tl.set([nextLeft,nextRight], { clearProps: 'all'});
    current = pageNumber;
  }
  //Optional
  const swithcDots = (dotNumber) => {
    const activateDot = document.querySelectorAll('.slide')[dotNumber];
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    activateDot.classList.add('active');
  }

  const scrollChange = (e) => {
    e.deltaY > 0 ? scrollSlide += 1 : scrollSlide -= 1;
    scrollSlide > 2 ? scrollSlide = 0 : scrollSlide < 0 ? scrollSlide = 2 : null;
      swithcDots(scrollSlide);
      nextSlide(scrollSlide);
  }

  document.addEventListener('wheel', throttle(scrollChange, 1500));
  document.addEventListener('touchmove', throttle(scrollChange, 1500));

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if(!inThrottle){
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}
init();