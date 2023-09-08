
 const numButtons = 50;
  const closeBtns = document.querySelectorAll('.close');
  const popups = document.querySelectorAll('.popup');

  for (let i = 1; i <= numButtons; i++) {
    const btn = document.getElementById(`btn${i}`);
    const popup = document.getElementById(`popup${i}`);

    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      togglePopup(popup);
    });
  }

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      const popup = this.parentNode;
      togglePopup(popup);
    });
  });

  popups.forEach(function (popup) {
    popup.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    popup.querySelectorAll('*').forEach(function (el) {
      el.addEventListener('copy', function (event) {
        event.preventDefault();
      });
    });

    document.addEventListener('click', function (event) {
      if (event.target !== popup && !popup.contains(event.target)) {
        popup.style.display = 'none';
      }
    });
  });

  function togglePopup(popup) {
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  }
