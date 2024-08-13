document.addEventListener('DOMContentLoaded', function () {
        var mainTabs = document.querySelectorAll('.main-tab');

        mainTabs.forEach(function (mainTab) {
            mainTab.addEventListener('click', function () {
                var dropdownTabs = this.nextElementSibling;
                dropdownTabs.classList.toggle('show');

                // �ر�����ѡ�
                document.querySelectorAll('.dropdown-tabs').forEach(function (dropdown) {
                    if (dropdown !== dropdownTabs) {
                        dropdown.classList.remove('show');
                    }
                });
            });
        });
    });

    function handleTabClick(event) {
        // ��ֹ�¼�ð�ݣ����ر�ѡ�

event.stopPropagation();
    }

    // ���ҳ�������ط�ʱ�ر�ѡ�
    document.addEventListener('click', function (event) {
        var isClickInside = Array.from(document.querySelectorAll('.tab-container')).some(container => container.contains(event.target));
        if (!isClickInside) {
            document.querySelectorAll('.dropdown-tabs').forEach(function (dropdown) {
                dropdown.classList.remove('show');
            });
        }
    });