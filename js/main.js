// ハンバーガーメニューの開閉
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      menuToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    // メニューリンクをクリックしたらメニューを閉じる
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
