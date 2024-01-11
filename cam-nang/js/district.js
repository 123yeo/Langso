const sidebar = document.querySelector('.sidebar-docs');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const sidebarY = sidebar.getBoundingClientRect().top;

    sidebar.style.top = `${scrollY - sidebarY}px`;
});

