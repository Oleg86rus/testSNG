--- 1 задание

SELECT * FROM test.testSNG_Task_2_1
LEFT OUTER JOIN test.testSNG_Task_2_2
ON testSNG_Task_2_1.ID = testSNG_Task_2_2.ID_Ребенка
WHERE `Фамилия_И._О.` = 'Седых В. А.'

--- результат

2911	Седых В. А.	Ж	2349	2911
2911	Седых В. А.	Ж	1616	2911

---

SELECT DISTINCT ID FROM test.testSNG_Task_2_1
LEFT OUTER JOIN test.testSNG_Task_2_2
ON testSNG_Task_2_1.ID = testSNG_Task_2_2.ID_Ребенка
WHERE ID_Родителя = 2349 AND Пол = 'М' OR ID_Родителя = 1616 AND Пол = 'М'

--- результат

2593

--- 2 задание

SELECT * FROM test.testSNG_Task_2_1
LEFT OUTER JOIN test.testSNG_Task_2_2
ON testSNG_Task_2_1.ID = testSNG_Task_2_2.ID_Ребенка
WHERE `Фамилия_И._О.` = 'Саенко М. А.'

--- результат

1588	Саенко М. А.	Ж	2349	1588
1588	Саенко М. А.	Ж	1616	1588

---

SELECT DISTINCT `Фамилия_И._О.` FROM test.testSNG_Task_2_1
LEFT OUTER JOIN test.testSNG_Task_2_2
ON testSNG_Task_2_1.ID = testSNG_Task_2_2.ID_Ребенка
WHERE ID_Родителя = 2349 AND Пол = 'М' OR ID_Родителя = 1616 AND Пол = 'М'

--- результат

Билич П. А.

--- 3 задание

SELECT ID_Ребенка FROM test.testSNG_Task_2_2
GROUP BY ID_Ребенка
HAVING COUNT(*) = 1;

--- результат

1974
2339

2 ребенка

