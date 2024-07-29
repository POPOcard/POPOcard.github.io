document.addEventListener('DOMContentLoaded', function () {
        var mainTabs = document.querySelectorAll('.main-tab');

        mainTabs.forEach(function (mainTab) {
            mainTab.addEventListener('click', function () {
                var dropdownTabs = this.nextElementSibling;
                dropdownTabs.classList.toggle('show');

                // 关闭其他选项卡
                document.querySelectorAll('.dropdown-tabs').forEach(function (dropdown) {
                    if (dropdown !== dropdownTabs) {
                        dropdown.classList.remove('show');
                    }
                });
            });
        });
    });

    function handleTabClick(event) {
        // 阻止事件冒泡，不关闭选项卡

event.stopPropagation();
    }

    // 点击页面其他地方时关闭选项卡
    document.addEventListener('click', function (event) {
        var isClickInside = Array.from(document.querySelectorAll('.tab-container')).some(container => container.contains(event.target));
        if (!isClickInside) {
            document.querySelectorAll('.dropdown-tabs').forEach(function (dropdown) {
                dropdown.classList.remove('show');
            });
        }
    });
