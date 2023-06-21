 (function() {
            var announcementContainer = document.getElementById('unique-announcement-container');
            var closeButtons = document.getElementsByClassName('close-button');

            function displayAnnouncement() {
                announcementContainer.style.display = 'block';
            }

            function closeAnnouncement() {
                announcementContainer.style.display = 'none';

                var currentTime = new Date().getTime();
                localStorage.setItem('announcementLastVisitTime', currentTime);
            }

            function checkAnnouncement() {
                var lastVisitTime = localStorage.getItem('announcementLastVisitTime');
                var currentTime = new Date().getTime();

                if (!lastVisitTime || currentTime - lastVisitTime > 5 * 60 * 1000) {
                    displayAnnouncement();
                }
            }

            checkAnnouncement();

            for (var i = 0; i < closeButtons.length; i++) {
                closeButtons[i].addEventListener('click', closeAnnouncement);
            }
        })();
