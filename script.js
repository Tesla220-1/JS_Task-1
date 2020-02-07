'use strict';

let money = +prompt('Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


appData.expenses = prompt('Введите обязательную статью расходов в этом месяце');
appData.expenses = +prompt('Во сколько обойдется?');

console.log(appData);

alert((appData.budget - appData.expenses) / 30);

/* Вопросы к этому заданию

1.Сколько типов данных существует в JS? Ответ: 7

2. Как вывести информацию в консоль? Ответ: console.log(...);



3. Какая функция операторов || и &&? 

Ответ: Логические операторы. 

|| - 'или', возвращает true если выполнено хотя бы одно условие из нескольких. Иначе, false

&& - 'и', возвращает true если выполнены все условия из нескольких. 


*/