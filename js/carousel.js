(function () {
  var carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  var track = carousel.querySelector('[data-carousel-track]');
  var slides = Array.prototype.slice.call(track.querySelectorAll('.carousel-slide'));
  var prevBtn = carousel.querySelector('[data-carousel-prev]');
  var nextBtn = carousel.querySelector('[data-carousel-next]');
  var dotsWrap = carousel.querySelector('[data-carousel-dots]');
  var index = 0;

  if (slides.length <= 1) {
    carousel.classList.add('is-single');
    return;
  }

  function goTo(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + index * 100 + '%)';
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === index);
    });
    if (dotsWrap) {
      Array.prototype.forEach.call(dotsWrap.children, function (dot, i) {
        dot.classList.toggle('is-active', i === index);
        dot.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
    }
  }

  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Go to project ' + (i + 1));
    if (i === 0) dot.setAttribute('aria-current', 'true');
    dot.addEventListener('click', function () {
      goTo(i);
    });
    dotsWrap.appendChild(dot);
  });

  prevBtn.addEventListener('click', function () {
    goTo(index - 1);
  });
  nextBtn.addEventListener('click', function () {
    goTo(index + 1);
  });

  document.addEventListener('keydown', function (event) {
    if (!carousel.contains(document.activeElement) && document.activeElement !== document.body) {
      return;
    }
    if (event.key === 'ArrowLeft') goTo(index - 1);
    if (event.key === 'ArrowRight') goTo(index + 1);
  });

  var touchStartX = 0;
  track.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', function (event) {
    var delta = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) < 40) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  }, { passive: true });

  goTo(0);
})();
