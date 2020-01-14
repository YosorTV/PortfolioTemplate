import { TimelineMax } from 'gsap';
const hamburger = document.querySelector('.menu');
const hamburgerLines = document.querySelectorAll('.menu line');
const navOpen = document.querySelector('.nav-open');
const contact = document.querySelector('.contact');
const social = document.querySelector('.social');

const tl = new TimelineMax({paused: true, reversed: true});

tl.to(navOpen, 0.5, {y: 0})
tl.fromTo(contact, 0.5, {opacity: 0, y:10}, {opacity: 1, y: 0}, '-=0.1');
tl.fromTo(social, 0.5, {opacity: 0, y:10}, {opacity: 1, y: 0}, '-=0.5');
tl.fromTo(hamburgerLines, 0.2, {stroke: 'white'}, {stroke: 'black'},'-=1');
tl.to(hamburgerLines[1], 0.2, {x: 13.5},'-=0.5');
tl.to(hamburgerLines[2], 0.2, {x: 25},'-=0.5');

  hamburger.addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();
  })