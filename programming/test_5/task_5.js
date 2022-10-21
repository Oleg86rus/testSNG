//Пользователь последовательно вводит с клавиатуры числа в консоль. Как только пользователь ввел «пустую строку» вывести на экран сумму введенных чисел и завершить работу программы.
//Заказчик изменил свои требования и теперь необходимо выводить среднеарифметическое
const sumOfInputNumbers = () => {
	const arr = [];
	while (true) {
		let number = prompt('Введите число');
		if (number === '' || number === null || isNaN(number)) break;
		arr.push(Number(number));
	}
  if (arr.length > 0) return arr.reduce((a, b) => Number(a) + Number(b))/arr.length;
	return 0;
};
alert(`Сумма введенных чисел = ${sumOfInputNumbers()}`);