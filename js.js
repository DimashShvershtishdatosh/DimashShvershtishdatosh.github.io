/* Это объявление переменной, где мы нашли нашу кнопку по тегу 'button' */
var button = document.querySelector('button');

/* Тут на кнопку навешиваем обработчик, который ждёт клика и тогда выдаст сообщение */
button.addEventListener('click', function() {
	alert('HIRE ME AND YOU WILL GET SOMETHING SPECIAL!!!')
})
