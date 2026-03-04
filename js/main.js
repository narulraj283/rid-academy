/* ═══════════════════════════════════════════════════════════
   RID ACADEMY — Main JavaScript
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Nav scroll effect ──
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ──
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

  // ── Scroll animations (robust with fallback) ──
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
    // No IntersectionObserver support — show everything immediately
    animateEls.forEach(el => el.classList.add('visible'));
  }

  // ── Counter animation ──
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
    // Fallback — just show the final values
    counterEls.forEach(function(el) {
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      if (!isNaN(target)) {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    });
  }

  // ── Smooth scroll for anchor links ──
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

  // ── Share functionality ──
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

  // ── Format currency ──
  window.formatCurrency = function(num) {
    return '$' + Math.round(num).toLocaleString();
  };

  // ── Format percentage ──
  window.formatPercent = function(num) {
    return num.toFixed(1) + '%';
  };

})();
