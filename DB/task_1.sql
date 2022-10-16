SELECT * FROM test.testSNG
WHERE Категория_Поезда = 'Скорый' OR Пункт_Назначения = 'Павелецкий'

---  8 записей

SELECT * FROM test.testSNG
WHERE Категория_Поезда = 'Скорый' OR Время_В_Пути = '40:00'

--- 0 записей

SELECT * FROM test.testSNG
WHERE Вокзал = 'Павелецкий' OR Время_В_Пути = '35:00'

--- 4 записи