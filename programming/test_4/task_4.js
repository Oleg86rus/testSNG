//Написать функцию, которая определяет количество разрядов введенного целого числа.

let inputNumber = prompt('Введите целое число.');
let number = Math.abs(inputNumber);
const discharge = (num) => {
	const result = Number.isInteger(Number(inputNumber));
	if (isNaN(number) || inputNumber === '' || !result) return 'Введите целое число!';
	if (!inputNumber) return 'Вы ничего не ввели!';
	const arr = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "-").split('-');
	if (arr.length === 1 && Number(arr[0]) < 10) {
		return `Количество разрядов: ${arr.length}`;
	} else if (arr.length === 1 && Number(arr[0]) >= 10 && Number(arr[0]) < 100) {
		return `Количество разрядов: ${arr.length + 1}`;
	} else if (arr.length === 1 && Number(arr[0]) >= 100) {
		return `Количество разрядов: ${arr.length + 2}`;
	}
	return `Количество разрядов: ${arr.length + 2}`;
}
alert(discharge(number));