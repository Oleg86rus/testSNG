//С клавиатуры вводится натуральное число. Найти его наибольшую цифру.
// Например, введено число 764580. Наибольшая цифра в нем 8.

const highestValue = () => {
	const enteredNumber = prompt('Введите натуральное число.');
	const result = Number.isInteger(Number(enteredNumber));
	if (Number(enteredNumber) < 0 || isNaN(enteredNumber) || !result) return 'Ошибка. Введите натуральное число!';
	if (!enteredNumber) return 'Вы ничего не ввели!';
	if (result) {
		const arr = enteredNumber.split('').map(a=>Number(a));
		return `Наибольшая цифра в введенном числе: ${arr.reduce((a,b) => a > b ? a : b)}`;
	}
}
alert(highestValue());