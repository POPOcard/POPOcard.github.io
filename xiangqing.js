	const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');const btn14 = document.getElementById('btn14');
const btn15 = document.getElementById('btn15');const btn16 = document.getElementById('btn16');
const btn17 = document.getElementById('btn17');const btn18 = document.getElementById('btn18');
const btn19 = document.getElementById('btn19');const btn20 = document.getElementById('btn20');
const btn21 = document.getElementById('btn21');
const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');
const popup5 = document.getElementById('popup5');
const popup6 = document.getElementById('popup6');
const popup7 = document.getElementById('popup7');
const popup8 = document.getElementById('popup8');
const popup9 = document.getElementById('popup9');
const popup10 = document.getElementById('popup10');
const popup11 = document.getElementById('popup11');
const popup12 = document.getElementById('popup12');
const popup13 = document.getElementById('popup13');
const popup14 = document.getElementById('popup14');
const popup15 = document.getElementById('popup15');
const popup16 = document.getElementById('popup16');
const popup17 = document.getElementById('popup17');
const popup18 = document.getElementById('popup18');
const popup19 = document.getElementById('popup19');
const popup20 = document.getElementById('popup20');
const popup21 = document.getElementById('popup21');
const closeBtns = document.querySelectorAll('.close');
const popups = document.querySelectorAll('.popup');

function togglePopup(popup) {
  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
}


btn1.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup1);
});

btn2.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup2);
});

btn3.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup3);
});

btn4.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup4);
});

btn5.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup5);
});

btn6.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup6);
});
btn7.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup7);
});

btn8.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup8);
});

btn9.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup9);
});
btn10.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup10);
});

btn11.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup11);
});
btn12.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup12);
});

btn13.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup13);
});
btn14.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup14);
});

btn15.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup15);
});

btn16.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup16);
});
btn17.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup17);
});

btn18.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup18);
});

btn19.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup19);
});
btn20.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup20);
});
btn21.addEventListener('click', function(event) {
  event.stopPropagation();
  togglePopup(popup21);
});


closeBtns.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    event.stopPropagation();
    const popup = this.parentNode;
    togglePopup(popup);
  });
});

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
    }
  });
});
