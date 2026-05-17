(function () {
  'use strict';

  /* ── 星星背景 ── */
  function initStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--dur', Math.random() * 3 + 2 + 's');
      star.style.setProperty('--delay', Math.random() * 2 + 's');
      star.style.opacity = Math.random() * 0.5 + 0.2;
      fragment.appendChild(star);
    }
    container.appendChild(fragment);
  }

  /* ── Hero 光暈視差 ── */
  function initParallax() {
    const glow = document.getElementById('hero-glow');
    if (!glow) return;
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY * 0.3;
          glow.style.transform =
            'translate(-50%, calc(-50% + ' + y + 'px))';
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ── 捲動進場動畫 ── */
  function initScrollAnimations() {
    const els = document.querySelectorAll('[data-animate]');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = parseFloat(el.dataset.delay || '0');
          setTimeout(() => {
            el.classList.add('is-visible');
            if (el.classList.contains('service-line')) {
              el.classList.add('is-visible');
            }
          }, delay * 1000);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  /* ── 手機選單 ── */
  function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (iconMenu) iconMenu.hidden = open;
      if (iconClose) iconClose.hidden = !open;
    };

    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });
  }

  /* ── 平滑捲動 ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── 合作品牌輪播 ── */
  function initPartnerSlider() {
    const root = document.querySelector('.partner-slider-wrap');
    if (!root) return;

    const track = root.querySelector('.partner-track');
    const slides = Array.from(root.querySelectorAll('.partner-slide'));
    const prevBtn = root.querySelector('.slider-btn--prev');
    const nextBtn = root.querySelector('.slider-btn--next');
    const dotsContainer = root.querySelector('.slider-dots');

    if (!track || slides.length === 0) return;

    let index = 0;
    let autoplayTimer;
    let slidesPerView = 1;

    function getSlidesPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }

    function maxIndex() {
      return Math.max(0, slides.length - slidesPerView);
    }

    function buildDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const count = maxIndex() + 1;
      for (let i = 0; i < count; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-label', '第 ' + (i + 1) + ' 頁');
        if (i === index) btn.classList.add('is-active');
        btn.addEventListener('click', () => goTo(i, true));
        dotsContainer.appendChild(btn);
      }
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('button').forEach((btn, i) => {
        btn.classList.toggle('is-active', i === index);
      });
    }

    function goTo(i, userAction) {
      slidesPerView = getSlidesPerView();
      index = Math.max(0, Math.min(i, maxIndex()));
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = 'translateX(-' + index * slideWidth + 'px)';
      updateDots();
      if (userAction) resetAutoplay();
    }

    function next() {
      goTo(index >= maxIndex() ? 0 : index + 1);
    }

    function prev() {
      goTo(index <= 0 ? maxIndex() : index - 1);
    }

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, 3000);
    }

    function onResize() {
      const prevSpv = slidesPerView;
      slidesPerView = getSlidesPerView();
      if (prevSpv !== slidesPerView) {
        index = Math.min(index, maxIndex());
        buildDots();
      }
      goTo(index);
    }

    prevBtn?.addEventListener('click', () => {
      prev();
      resetAutoplay();
    });
    nextBtn?.addEventListener('click', () => {
      next();
      resetAutoplay();
    });

    root.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    root.addEventListener('mouseleave', resetAutoplay);

    window.addEventListener('resize', onResize);
    slidesPerView = getSlidesPerView();
    buildDots();
    goTo(0);
    resetAutoplay();
  }

  /* ── 表單送出 ── */
  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('感謝您的訊息！此為展示頁面，表單尚未連接後端。');
    });
  }

  initStars();
  initParallax();
  initScrollAnimations();
  initMobileMenu();
  initSmoothScroll();
  initPartnerSlider();
  initForm();
})();
