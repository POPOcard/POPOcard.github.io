window.onload = function() {
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
