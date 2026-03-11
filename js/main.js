/* ================================================
   RID ACADEMY - Main JavaScript
   ================================================ */

(function() {
  'use strict';

  // -- Skip to content (accessibility) --
  var skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-to-content';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add main-content ID to first main/article/section after nav
  var mainContent = document.querySelector('main') || document.querySelector('.hero') || document.querySelector('article') || document.querySelector('section:nth-of-type(2)');
  if (mainContent && !document.getElementById('main-content')) {
    mainContent.id = 'main-content';
  }

  // -- Nav scroll effect --
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // -- Mobile nav toggle --
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
      // ARIA accessibility
      navToggle.setAttribute('aria-expanded', isOpen);
      navLinks.setAttribute('aria-hidden', !isOpen);
    });
    // Set initial ARIA state
    navToggle.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('aria-hidden', 'true');
    
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true');
      });
    });

    // Close mobile nav on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true');
        navToggle.focus();
      }
    });
  }

  // -- Scroll animations (robust with fallback) --
  const animateEls = document.querySelectorAll('.animate-in');

  if ('IntersectionObserver' in window && animateEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    animateEls.forEach(el => observer.observe(el));

    // Safety fallback: force visible after 3 seconds
    setTimeout(() => {
      animateEls.forEach(el => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    }, 3000);
  } else {
    animateEls.forEach(el => el.classList.add('visible'));
  }

  // -- Counter animation --
  function animateCounter(el, target, duration) {
    duration = duration || 1500;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const startTime = performance.now();

    function update(currentTime) {
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    el.textContent = prefix + '0' + suffix;
    requestAnimationFrame(update);
  }

  var counterEls = document.querySelectorAll('[data-count]');

  if ('IntersectionObserver' in window && counterEls.length > 0) {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var target = parseInt(entry.target.dataset.count, 10);
          if (!isNaN(target)) {
            animateCounter(entry.target, target);
          }
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterEls.forEach(function(el) { counterObserver.observe(el); });
  } else {
    counterEls.forEach(function(el) {
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      if (!isNaN(target)) {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    });
  }

  // -- Smooth scroll for anchor links with nav offset --
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 72;
        var y = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // Set focus for accessibility
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      }
    });
  });

  // -- Share functionality --
  window.shareOnPlatform = function(platform, url, title, text) {
    var encodedUrl = encodeURIComponent(url || window.location.href);
    var encodedTitle = encodeURIComponent(title || document.title);
    var encodedText = encodeURIComponent(text || '');

    var urls = {
      twitter: 'https://twitter.com/intent/tweet?url=' + encodedUrl + '&text=' + encodedText,
      linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodedUrl,
      facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl,
      email: 'mailto:?subject=' + encodedTitle + '&body=' + encodedText + '%0A%0A' + encodedUrl
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  // -- Format currency --
  window.formatCurrency = function(num) {
    return '$' + Math.round(num).toLocaleString();
  };

  // -- Format percentage --
  window.formatPercent = function(num) {
    return num.toFixed(1) + '%';
  };

  // -- Email signup handler --
  window.handleEmailSubmit = function(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button[type="submit"]');

    if (input && input.value.trim()) {
      const originalText = button.textContent;
      button.textContent = 'Thank you! Check your email.';
      button.disabled = true;
      button.style.opacity = '0.6';

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = '1';
        input.value = '';
      }, 3000);
    }
  };

  // -- Add ARIA labels to images without alt text --
  document.querySelectorAll('img:not([alt])').forEach(function(img) {
    img.setAttribute('alt', '');
    img.setAttribute('role', 'presentation');
  });

  // -- Add role="main" to main content areas --
  var mainEl = document.querySelector('main');
  if (mainEl && !mainEl.getAttribute('role')) {
    mainEl.setAttribute('role', 'main');
  }

})();


// -- Blog Index: Progressive Card Loading --
(function() {
  if (!window.location.pathname.match(/\/blog\/?$/)) return;
  
  var BATCH = 30;
  var sections = document.querySelectorAll('section.section');
  
  sections.forEach(function(section) {
    var grid = section.querySelector('.container');
    if (!grid) return;
    var cards = Array.from(grid.children);
    if (cards.length <= BATCH) return;
    
    var shown = BATCH;
    cards.forEach(function(card, i) {
      if (i >= BATCH) {
        card.style.display = 'none';
        card.dataset.lazyHidden = 'true';
      }
    });
    
    var btn = document.createElement('button');
    btn.textContent = 'Show More (' + (cards.length - shown) + ' remaining)';
    btn.className = 'btn btn-primary';
    btn.style.cssText = 'display:block;margin:2rem auto';
    btn.setAttribute('aria-label', 'Load more articles');
    
    btn.addEventListener('click', function() {
      var count = 0;
      for (var i = shown; i < cards.length && count < BATCH; i++) {
        cards[i].style.display = '';
        delete cards[i].dataset.lazyHidden;
        count++;
      }
      shown += count;
      var remaining = cards.length - shown;
      if (remaining > 0) {
        btn.textContent = 'Show More (' + remaining + ' remaining)';
      } else {
        btn.remove();
      }
    });
    
    section.appendChild(btn);
  });
})();
