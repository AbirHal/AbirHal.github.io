//sticky header
$(document).ready(function(){
  $(window).scroll(function(){
if(this.scrollY > 20){
$('header').addClass("sticky");

}else{
  $('header').removeClass("sticky");

}
  });
});


function fun() {  
  alert (" This project is not completed yet!!,I will upload it soon ");  
}  



// typing animation script 
var typed = new Typed(".typing",{
  strings: ["Front End Web Developer","Back End Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
  });
  

  //scroll reval
const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true
})
sr.reveal('.services, .about, .portfolio-mf, .skill, .paralax-mf',{delat:200, origin:'bottom'});



// dark mood 

let moon = document.querySelector('#header-social-links');
let bi_moon = document.querySelector('.bi-moon');
let logo = document.querySelector('.logo');

let header = document.querySelector('header');
let li=document.querySelector('nav ');
let body = document.querySelector('body');
let section = document.querySelector('section');
let div = document.querySelector('div .overview ');
let footer = document.querySelector('.footer');
let social_iconb= document.querySelector('.a-social-b ');
let bi_list= document.getElementById('bi-list');

/*
let skill = document.querySelectorAll('.skill .container-fluid h3');

let footer = document.querySelector('.footer');
let services = document.querySelector('.services');
let hire = document.querySelector('.hire');
let title_about = document.querySelector('.about .title');
let title_skill = document.querySelector('.skill .title');
let title_services = document.querySelector('.services .title');
let title_portfolio = document.querySelector('.potfolio .heading h3');
let title_get = document.querySelector('.get .title');


let about1 = document.querySelector('.about .h1');
let about2 = document.querySelector('.about  .p1');

let text = document.querySelector('#text-1');
let social_icon = document.querySelector('.a-social-b'); 
let social_iconb= document.querySelector('.a-social-b a');
*/



moon.onclick = () => {
  li.classList.remove('navbar');
header.classList.toggle('dark')
 li.classList.toggle('navlist-dark');
 li.classList.toggle('navbar');

  header.classList.remove('sticky');

  header.classList.toggle('sticky-dark');

  bi_moon.classList.toggle('fa-solid-dark');
  logo.classList.toggle('logo-dark');
  bi_list.classList.toggle('menu-dark');

  
section.classList.toggle('hero-dark');
social_iconb.classList.remove('a-social-b');
social_iconb.classList.toggle('a-social-b-d');
social_iconb.classList.toggle('a-social-b');

   
  body.classList.toggle('dark');
footer.classList.remove('footer');
   footer.classList.toggle('footer-dark');


}


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

 

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
