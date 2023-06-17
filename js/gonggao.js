(function() {
  var announcementContainer = document.createElement('div');
  announcementContainer.id = 'unique-announcement-container';
  announcementContainer.innerHTML = `
    <h2>公告</h2>
    <p>这里是公告内容。</p>
    <button class="close-button">已知晓</button>
  `;
  document.body.appendChild(announcementContainer);

  var closeButtons = document.getElementsByClassName('close-button');

  function displayAnnouncement() {
    announcementContainer.style.display = 'block';
  }

  function closeAnnouncement() {
    announcementContainer.style.display = 'none';

    // 更新本地存储的时间戳为当前时间
    var currentTime = new Date().getTime();
    localStorage.setItem('announcementLastVisitTime', currentTime);
  }

  function checkAnnouncement() {
    // 检查本地存储中的时间戳
    var lastVisitTime = localStorage.getItem('announcementLastVisitTime');

    // 获取当前时间戳
    var currentTime = new Date().getTime();

    // 如果本地存储中没有时间戳或者当前时间距上次访问时间超过5分钟，则显示公告
    if (!lastVisitTime || currentTime - lastVisitTime > 5 * 60 * 1000) {
      displayAnnouncement();
    }
  }

  // 检查公告显示
  checkAnnouncement();

  // 关闭公告
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', closeAnnouncement);
  }
})();
