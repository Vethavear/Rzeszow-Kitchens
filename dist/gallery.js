document.addEventListener('click', e => {
  if (e.target.closest('.item')) {
    let currentImg = e.target;
    const children = currentImg.parentNode.children;
    const len = children.length;
    let ind = [].indexOf.call(children, currentImg);
    let nextEl = children[ind === len ? len : ind + 1];
    let prevEl = children[ind === 0 ? -1 : ind - 1];
    const nav = document.getElementById('nav');
    const footer = document.getElementById('footer');
    const gallery = document.getElementById('gallery');
    const imgnav = document.getElementById('img-nav');
    const thumbnails = document.getElementById('thumbnails');
    const arrowLeft = document.getElementById('left');
    const arrowRight = document.getElementById('right');

    thumbCenter = currentImg.cloneNode(true);

    if (prevEl) {
      console.log(prevEl);
      console.log(currentImg);
      thumbLeft = prevEl.cloneNode(true);
      thumbnails.appendChild(thumbLeft);
    } else {
      arrowLeft.style.display = "none";
    }
    thumbnails.appendChild(thumbCenter);
    if (nextEl) {
      thumbRight = nextEl.cloneNode(true);
      thumbnails.appendChild(thumbRight);
    } else {
      arrowRight.style.display = "none";
    }

    currentImg.classList.add('enlarge');
    currentImg.classList.remove('item');
    nav.classList.add('hide');
    footer.classList.add('hide');
    thumbnails.classList.remove('hide');
    gallery.classList.add('adjustheight');
    imgnav.classList.remove('hide');


    document.addEventListener('click', x => {

      if (x.target.matches('#x')) {
        location.reload();
      }
    });

    document.addEventListener('click', left => {
      if (left.target.matches('#left')) {
        arrowRight.style.display = 'flex';
        if (prevEl) {
          currentImg.classList.add('item');
          currentImg.classList.remove('enlarge');
          currentImg = prevEl;
          ind = [].indexOf.call(children, currentImg);
          nextEl = children[ind === len ? -1 : ind + 1];
          prevEl = children[ind === 0 ? -1 : ind - 1];
        }

        while (thumbnails.firstChild) {
          thumbnails.removeChild(thumbnails.firstChild);
        }
        if (prevEl) {
          thumbLeft = prevEl.cloneNode(true);
          thumbnails.appendChild(thumbLeft);

        } else {
          arrowLeft.style.display = "none";
        }

        thumbCenter = currentImg.cloneNode(true);
        thumbnails.appendChild(thumbCenter);

        thumbRight = nextEl.cloneNode(true);
        thumbnails.appendChild(thumbRight);

        currentImg.classList.add('enlarge');
        currentImg.classList.remove('item');
      }

    });

    document.addEventListener('click', right => {
      if (right.target.matches('#right')) {
        arrowLeft.style.display = 'flex';
        if (nextEl) {
          currentImg.classList.add('item');
          currentImg.classList.remove('enlarge');
        }
        if (!nextEl) {

          nav.classList.add('hide');
        } else {

          currentImg = nextEl;
          ind = [].indexOf.call(children, currentImg);
          nextEl = children[ind === len ? len : ind + 1];
          prevEl = children[ind === 0 ? 0 : ind - 1];

          while (thumbnails.firstChild) {
            thumbnails.removeChild(thumbnails.firstChild);
          }

          thumbLeft = prevEl.cloneNode(true);
          thumbnails.appendChild(thumbLeft);

          thumbCenter = currentImg.cloneNode(true);
          thumbnails.appendChild(thumbCenter);
          if (nextEl) {
            thumbRight = nextEl.cloneNode(true);
            thumbnails.appendChild(thumbRight);
          } else {
            arrowRight.style.display = "none";
          }

          currentImg.classList.add('enlarge');
          currentImg.classList.remove('item');
        }
      }
    });
  }
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  })
};

navSlide();
