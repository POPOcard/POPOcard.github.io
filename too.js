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
  }

  popups.forEach(function(popup) {
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
});
