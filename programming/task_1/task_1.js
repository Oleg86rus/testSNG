//Вводится целое число, обозначающее код символа по таблице ASCII. Определить, это код английской буквы или какой-либо иной символ.

const findingLetter = () => {
	const enteredNumber = prompt('Введите целое число, обозначающее код символа.');
	const result = Number(enteredNumber);
	if (isNaN(result)) return 'Ошибка. Введите число!';
	if (result >= 65 && result <= 90 || result >= 97 && result <= 122) return 'Это код английской буквы!';
	if (!enteredNumber) return 'Вы ничего не ввели!';
	return 'Это код иного символа';
}
alert(findingLetter());