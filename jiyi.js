
 window.addEventListener('load', function() { 
   // 添加 pagehide 事件监听器 
   window.addEventListener('pagehide', function() { 
     // 存储选项卡索引和滚动位置到 sessionStorage 
     var activeTabIndex = getActiveTabIndex(); 
     var scrollPosition = window.pageYOffset; 
  
     sessionStorage.setItem('activeTabIndex', activeTabIndex); 
     sessionStorage.setItem('scrollPosition', scrollPosition); 
   }); 
  
   // 添加 pageshow 事件监听器 
   window.addEventListener('pageshow', function(event) { 
     // 从 sessionStorage 中获取存储的选项卡索引和滚动位置 
     var activeTabIndex = sessionStorage.getItem('activeTabIndex'); 
     var scrollPosition = sessionStorage.getItem('scrollPosition'); 
  
     // 默认选项卡索引为 0，滚动位置为 0 
     if (activeTabIndex === null) { 
       activeTabIndex = 0; 
     } 
     if (scrollPosition === null) { 
       scrollPosition = 0; 
     } 
  
     // 根据存储的选项卡索引，设置默认选中的选项卡 
     var tabButtons = document.querySelectorAll('.tab-menu button'); 
     tabButtons[activeTabIndex].click(); 
  
     // 将页面滚动到存储的位置 
     window.scrollTo(0, scrollPosition); 
   }); 
  
   // 添加滚动事件监听器 
   window.addEventListener('scroll', function() { 
     // 存储滚动位置到 sessionStorage 
     sessionStorage.setItem('scrollPosition', window.pageYOffset); 
   }); 
 }); 
  
 // 获取当前选中的选项卡索引 
 function getActiveTabIndex() { 
   var tabButtons = document.querySelectorAll('.tab-menu button'); 
   for (var i = 0; i < tabButtons.length; i++) { 
     if (tabButtons[i].classList.contains('active')) { 
       return i; 
     } 
   } 
   return 0; 
 } 
  document.getElementById("close-button").addEventListener("click", function() {
  document.getElementById("floating-container").style.display = "none";
});

  </script>
 <script>window.onload = function() {
  var container = document.getElementById('floating-container');
  if (isWeixinBrowser()) {
    container.style.border = '1px solid black'; // 根据需要调整边框样式
  }
};

function isWeixinBrowser() {
  var userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf('micromessenger') !== -1;
}
 </script> <script>var closeBtn = document.getElementById("closeBtn");
var popup = document.getElementById("popup2");

closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
}); 
