document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    const themeSwitchContainer = document.querySelector('.theme-switch-container');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // เลื่อนลง
            nav.classList.add('hidden');
            themeSwitchContainer.classList.add('hidden');
        } else {
            // เลื่อนขึ้น
            nav.classList.remove('hidden');
            themeSwitchContainer.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});
