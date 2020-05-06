// $("#slideshow > .slide:gt(0)").hide();

// setInterval(function () {
//   $('#slideshow > .slide:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// }, 3000);


let slides = document.querySelectorAll('#slideshow .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const enlargeText = () => {
  const header1 = document.querySelector('.img1 p');
  const header2 = document.querySelector('.img2 p');
  if (isInViewport(header1)) {
    header1.className = 'ts3 zoomIn';
  }
  if (isInViewport(header2)) {
    header2.className = 'ts3 zoomIn';
  }
}

window.addEventListener('load', enlargeText);
window.addEventListener('scroll', enlargeText);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    document.querySelector('nav').style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
  } else {
    // document.querySelector('nav').style.background = 'rgba(0,0,0,0)';
  }
});

const divsTranslate = () => {
  const imgs = document.querySelectorAll('#offer .img');
  const texts = document.querySelectorAll('#offer .text');
  const headers = document.querySelectorAll('#offer .text h2');
  const icons = document.querySelectorAll('#offer .text .fas');
  for (let index = 0; index < imgs.length; index++) {

    headers[index].classList.add('translateY0');
    icons[index].classList.add('scale1');
    if (index % 2 == 0) {
      imgs[index].classList.add('translateXn');
      texts[index].classList.add('translateXp');
    }
  }
}
window.addEventListener('scroll', divsTranslate);


$('a, button').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100

      },
      800
    );
  }
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  })
  nav.addEventListener('click', () => {
    burger.classList.remove('toggle');
    nav.classList.remove('active');
  });
};

navSlide();

$('.links a').on("click", function () {
  $('.links').removeClass('active');
  $('.burger').removeClass('toggle');
});