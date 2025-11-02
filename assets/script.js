
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.onclick = function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
};

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && e.target !== menuBtn) {
        menu.style.display = 'none';
    }
});