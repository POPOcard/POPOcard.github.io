document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('.popup-btn');
  const popups = document.querySelectorAll('.popup');

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const popupId = this.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      togglePopup(popup, this);
    });
  });

  function togglePopup(popup, btn) {
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
      btn.classList.add('active');
    } else {
      popup.style.display = 'none';
      btn.classList.remove('active');
    }

    // 获取关闭按钮元素
    const closeBtn = popup.querySelector('.close-btn');
    if (closeBtn) {
      // 修改关闭按钮的样式
      closeBtn.style.display = 'inline-block';
      closeBtn.style.backgroundColor = '#a87f5f';
      closeBtn.style.color = 'transparent';
      closeBtn.style.webkitTextStroke = '0.05px black';
      closeBtn.style.webkitTextFillColor = 'white';
      closeBtn.style.border = 'none';
      closeBtn.style.padding = '10px 18px';
      closeBtn.style.borderRadius = '5px';
      closeBtn.style.marginTop = '5px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.fontSize = '23px';
    }
  }

  popups.forEach(function(popup) {
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = '关闭';
    closeBtn.addEventListener('click', function() {
      togglePopup(popup);
    });
    popup.appendChild(closeBtn);

    popup.addEventListener('click', function(event) {
      event.stopPropagation();
    });

    popup.querySelectorAll('*').forEach(function(el) {
      el.addEventListener('copy', function(event) {
        event.preventDefault();
      });
    });

    document.addEventListener('click', function(event) {
      if (event.target !== popup && !popup.contains(event.target)) {
        popup.style.display = 'none';
        btns.forEach(function(btn) {
          btn.classList.remove('active');
        });
      }
    });
  });

  function togglePopup(popup, btn) {
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
      if (btn) {
        btn.classList.add('active');
      }
    } else {
      popup.style.display = 'none';
      if (btn) {
        btn.classList.remove('active');
      }
    }
  }
});
