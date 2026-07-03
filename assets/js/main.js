(function () {
  // ===== Active nav highlighting =====
  function normalizePath(path) {
    var last = path.split('/').pop();
    if (last === '' || last === undefined) last = 'index.html';
    return last;
  }
  var currentPage = normalizePath(window.location.pathname);
  document.querySelectorAll('.menu-panel nav a[href]').forEach(function (a) {
    var linkPage = normalizePath(a.getAttribute('href'));
    if (linkPage === currentPage) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // ===== Word reveal (home page headline only) =====
  var headline = document.getElementById('headline');
  if (headline) {
    var text = headline.getAttribute('data-text') || '';
    var words = text.split(' ');
    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'word-reveal';
      span.textContent = word;
      span.style.animationDelay = (1 + i * 0.05) + 's';
      headline.appendChild(span);
    });
  }

  // ===== Burger menu toggle =====
  var burgerBtn = document.getElementById('burger-btn');
  var menuPanel = document.getElementById('menu-panel');
  if (burgerBtn && menuPanel) {
    var menuOpen = false;
    burgerBtn.addEventListener('click', function () {
      menuOpen = !menuOpen;
      if (menuOpen) {
        burgerBtn.classList.add('open');
        menuPanel.classList.add('open');
        burgerBtn.setAttribute('aria-label', 'Close menu');
      } else {
        burgerBtn.classList.remove('open');
        menuPanel.classList.remove('open');
        burgerBtn.setAttribute('aria-label', 'Open menu');
      }
    });
    menuPanel.querySelectorAll('nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        menuOpen = false;
        burgerBtn.classList.remove('open');
        menuPanel.classList.remove('open');
      });
    });
  }

  // ===== Spotlight reveal (home page hero only) =====
  var canvas = document.getElementById('reveal-canvas');
  var imgLayer = document.getElementById('reveal-img');
  if (canvas && imgLayer) {
    var SPOTLIGHT_R = 260;
    var ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    var mouse = { x: -999, y: -999 };
    var smooth = { x: -999, y: -999 };

    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function loop() {
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var grad = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT_R);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.4, 'rgba(255,255,255,1)');
      grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      var dataUrl = canvas.toDataURL();
      imgLayer.style.webkitMaskImage = 'url(' + dataUrl + ')';
      imgLayer.style.maskImage = 'url(' + dataUrl + ')';
      imgLayer.style.webkitMaskSize = '100% 100%';
      imgLayer.style.maskSize = '100% 100%';

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
})();
