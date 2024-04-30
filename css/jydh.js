
    var tabs = document.querySelectorAll('.tabs a');
    var tabContents = document.querySelectorAll('.tab-content > div');

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            tabContents.forEach(function(tabContent) {
                tabContent.style.display = 'none';
            });

            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });

            document.getElementById(tab.dataset.tab).style.display = 'block';
            tab.classList.add('active');
        });
    });

    function toggleDrawer() {
        var drawer = document.querySelector('.drawer-menu');
        drawer.classList.toggle('active');
    }

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 65 || e.keyCode === 88)) {
            e.preventDefault();
        }
    });

    var defaultTab = document.querySelector('.tabs a.active');
    var defaultTabContent = document.getElementById(defaultTab.dataset.tab);
    defaultTabContent.style.display = 'block';

