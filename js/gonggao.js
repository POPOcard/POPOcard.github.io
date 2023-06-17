// 检查本地存储中的时间戳
        var lastVisitTime = localStorage.getItem('announcementLastVisitTime');

        // 获取当前时间戳
        var currentTime = new Date().getTime();

        // 如果本地存储中没有时间戳或者当前时间距上次访问时间超过5分钟，则显示公告
        if (!lastVisitTime || currentTime - lastVisitTime > 5 * 60 * 1000) {
            // 显示公告
            var announcementContainer = document.getElementById('unique-announcement-container');
            announcementContainer.style.display = 'block';
        }

        // 关闭公告
        var closeButtons = document.getElementsByClassName('close-button');
        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function() {
                var announcementContainer = document.getElementById('unique-announcement-container');
                announcementContainer.style.display = 'none';

                // 更新本地存储的时间戳为当前时间
                localStorage.setItem('announcementLastVisitTime', currentTime);
            });
        }