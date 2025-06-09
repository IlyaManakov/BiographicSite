const menuArea = document.querySelector(".block-user-login");
const menu = document.querySelector(".left-click-menu");

if (menuArea && menu) {
    // Показать меню при клике
    menuArea.addEventListener("click", event => {
        // Проверяем, что клик не по самому меню
        if (!event.target.closest('.left-click-menu')) {
            menu.classList.toggle("active");
        }
    });

    // Скрыть меню при клике вне области
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.block-user-login')) {
            menu.classList.remove("active");
        }
    });
}