document.querySelector('.btn-close').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.transform = 'translateX(-270px)';
    document.querySelector('.burger-menu-mask').style.transform = 'translateX(-100%)';
    document.querySelector('.burger-menu-mask').style.opacity = '0';
});

document.querySelector('.burger-menu-mask').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.transform = 'translateX(-270px)';
    document.querySelector('.burger-menu-mask').style.transform = 'translateX(-100%)';
    document.querySelector('.burger-menu-mask').style.opacity = '0';
});

document.querySelector('.toggle-burger-menu').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.transform = 'none';
    document.querySelector('.burger-menu-mask').style.transform = 'none';
    document.querySelector('.burger-menu-mask').style.opacity = '1';
});