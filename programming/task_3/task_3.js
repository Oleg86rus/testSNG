//Создать массив из 20 элементов в диапазоне (случайным образом)  значений от -15 до 14 включительно. Определить количество элементов по модулю больших, чем максимальный.

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const arrModule = () => {
	const min = -15;
	const max = 14;
	let counter = 0;
	let arr = []
	while (arr.length < 20) {
		arr.push(getRandomIntInclusive(Number(min), Number(max)))
	}
	arr.forEach(el => {
		if (Math.abs(el) > max) counter += 1;
	})
	return `Массив: ${arr}. Количество элементов по модулю больших, чем максимальный(${max}): ${counter}`;
}
alert(arrModule());