 // 检查本地存储中的时间戳
        var lastVisitTime = localStorage.getItem('lastVisitTime');

        // 获取当前时间戳
        var currentTime = new Date().getTime();

        // 如果本地存储中没有时间戳或者当前时间距上次访问时间超过5分钟，则显示公告
        if (!lastVisitTime || currentTime - lastVisitTime > 5 * 60 * 10) {
            // 显示公告
            document.getElementById('announcement').style.display = 'block';

            // 关闭公告
            document.getElementById('closeBtn').addEventListener('click', function() {
                // 隐藏公告
                document.getElementById('announcement').style.display = 'none';
                
                // 更新本地存储的时间戳为当前时间
                localStorage.setItem('lastVisitTime', currentTime);
            });
        }
