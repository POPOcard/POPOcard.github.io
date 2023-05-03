

                /* 定义呼吸跳动的动画 */ 
                 @keyframes breathing { 
                         0% { 
                                 transform: scale(1); 
                         } 
                         50% { 
                                 transform: scale(1.1); 
                         } 
                         100% { 
                                 transform: scale(1); 
                         } 
                  } 
  
                 /* 设置缩略图标的样式 */ 
                 .menu img { 
                         width: 50px; 
                         height: 50px; 
                         margin-bottom: -1px; /* 调整菜单项与缩略图标的距离 */ 
                 }
		/*禁止图像下载*/
		var headerImage = document.getElementById('header-image');
		headerImage.addEventListener('contextmenu', function(e) {
			e.preventDefault();
		});
		headerImage.addEventListener('dragstart', function(e) {
			e.preventDefault();
		});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-menu button.active").click();
});

        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            tablinks = document.getElementsByTagName("button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        
        var tabs = document.getElementsByClassName("tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click",
function(event) {
event.stopPropagation();
});
}
// 左右箭头切换图片
	prev.addEventListener('click', function() {
		goToSlide(currentSlide - 1);
	});
	next.addEventListener('click', function() {
		goToSlide(currentSlide + 1);
	});
	
var freeGet = document.getElementById("free-get");
  setInterval(function() {
    if (freeGet.style.color === "rgb(255, 117, 117)") {
      freeGet.style.color = "#FF7575";
    } else {
      freeGet.style.color = "#FF7575";
    }
  }, 500);





var freeGet = document.getElementById("free-get");
  setInterval(function() {
    if (freeGet.style.color === "rgb(255, 117, 117)") {
      freeGet.style.color = "#FF7575";
    } else {
      freeGet.style.color = "#FF7575";
    }
  }, 500);
