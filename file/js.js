/*Это обьявление переменной,мы наши кнопку по тегу */
var button = document.querySelector('button')
/* Тут на кнопку навешиваем обработчик, который ждет клика и тогда запустит логику */
button.addEventListener('click', function() {
    alert('Моя мантра- А что если...? ')
})