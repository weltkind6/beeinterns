
// Задание 1 ---------------------------------------------------------------------------------------
const firstObject = {
  'one': 'number',
};
const secondObject = { //  дописал переменную, поменял значения
  'number': 'one',
};

function resolve1(inputObject) {
 return (secondObject);
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }

// Задание 2----------------------------------------------------------------------------------------

const secondObject = {
  apple: "fruit",
  potato: "vegetable",
  strawberry: "berry",
};
const firstObject = {
  'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry',
};
function resolve2(inputObject) {
 return (firstObject);
}

const result2 = resolve2(secondObject);
console.log(secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(result2);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }




// Задание 3. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math---------------------------------------------------------------------

const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year); // 17.


// решение

const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year2); // 20

function centuryFromYear(year) {
return (Math.ceil(year / 10));
};
