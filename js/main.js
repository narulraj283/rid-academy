/* Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ
   RID ACADEMY Ã¢ÂÂ Main JavaScript
   Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ */

(function() {
  'use strict';

  // Ã¢ÂÂÃ¢ÂÂ Nav scroll effect Ã¢ÂÂÃ¢ÂÂ
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // Ã¢ÂÂÃ¢ÂÂ Mobile nav toggle Ã¢ÂÂÃ¢ÂÂ
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // Ã¢ÂÂÃ¢ÂÂ Scroll animations (robust with fallback) Ã¢ÂÂÃ¢ÂÂ
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

    // Safety fallback: if any elements are STILL hidden after 3 seconds,
    // force them visible (handles edge cases, bot crawlers, weird viewports)
    setTimeout(() => {
      animateEls.forEach(el => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    }, 3000);
  } else {
    // No IntersectionObserver support Ã¢ÂÂ show everything immediately
    animateEls.forEach(el => el.classList.add('visible'));
  }

  // Ã¢ÂÂÃ¢ÂÂ Counter animation Ã¢ÂÂÃ¢ÂÂ
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

    // Set initial value to 0 with proper formatting before animation starts
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
    // Fallback Ã¢ÂÂ just show the final values
    counterEls.forEach(function(el) {
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      if (!isNaN(target)) {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    });
  }

  // Ã¢ÂÂÃ¢ÂÂ Smooth scroll for anchor links Ã¢ÂÂÃ¢ÂÂ
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return; // skip bare '#' links
      var targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Ã¢ÂÂÃ¢ÂÂ Share functionality Ã¢ÂÂÃ¢ÂÂ
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

  // Ã¢ÂÂÃ¢ÂÂ Format currency Ã¢ÂÂÃ¢ÂÂ
  window.formatCurrency = function(num) {
    return '$' + Math.round(num).toLocaleString();
  };

  // Ã¢ÂÂÃ¢ÂÂ Format percentage Ã¢ÂÂÃ¢ÂÂ
  window.formatPercent = function(num) {
    return num.toFixed(1) + '%';
  };

  // Ã¢ÂÂÃ¢ÂÂ Email signup handler Ã¢ÂÂÃ¢ÂÂ
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

      // Reset after 3 seconds
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = '1';
        input.value = '';
      }, 3000);
    }
  };

})();


// ââ Blog Index: Progressive Card Loading ââ
(function() {
  // Only run on blog index page
  if (!window.location.pathname.match(/\/blog\/?$/)) return;
  
  var BATCH = 30;
  var sections = document.querySelectorAll('section.section');
  
  sections.forEach(function(section) {
    var grid = section.querySelector('.container');
    if (!grid) return;
    var cards = Array.from(grid.children);
    if (cards.length <= BATCH) return;
    
    // Hide cards beyond first batch
    var shown = BATCH;
    cards.forEach(function(card, i) {
      if (i >= BATCH) {
        card.style.display = 'none';
        card.dataset.lazyHidden = 'true';
      }
    });
    
    // Create "Show More" button
    var btn = document.createElement('button');
    btn.textContent = 'Show More (' + (cards.length - shown) + ' remaining)';
    btn.style.cssText = 'display:block;margin:2rem auto;padding:0.75rem 2rem;background:#00B4A6;color:white;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:background 0.2s';
    btn.addEventListener('mouseenter', function() { btn.style.background = '#009e92'; });
    btn.addEventListener('mouseleave', function() { btn.style.background = '#00B4A6'; });
    
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
