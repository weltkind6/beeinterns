// Задание 1

let i = 0;

for (??; i <= 50; ??) {
  console.log(i);
}
// Ожидаемый результат: 10 20 30 40 50
// Решение

let i = 0;

for (i; i <= 50; i +=10) {
  console.log(i);
}


// Задание 2
/*
 Написать функцию-конструктор Men с ДВУМЯ аргументами
  С помощью которой можно создать объект
  { profession: 'hero', name: 'Кларк', secondName: 'Кент' }
*/

const superman = new Men('Кларк', 'Кент');
console.log('superman: ', superman);
// Men { profession: 'hero', name: 'Кларк', secondName: 'Кент' }

// Решение 
function Men(name, secondName) {
        this.name = name;
        this.secondName = secondName;
      }

      let user = {
        profession: "hero",
        name: "Кларк",
        secondName: "Кент",
      };
      const superman = new Men("Кларк", "Кент");

      console.log("superman: ", superman);


// Задание 3
// Напишите функцию sum, которая работает так: sum(a)(b) возвращает a + b.
sum(1)(2);  // 3
sum(5)(-1); // 4

// 
function sum(a) {
        let currentSum = a;

        function f(b) {
          currentSum += b;
          return f;
        }

        f.toString = function () {
          return currentSum;
        };

        return f;
      }

      alert(sum(1)(2)); // 3


// Задание 4
// Измените код так, чтобы console.log выводил последовательно символы 'П т и ц а'
const bird = ['П', 'т', 'и', 'ц', 'а'];

for (var index = 0; index < bird.length; index++) {
  setTimeout(function(index) {
    console.log(bird[index]);
  }, 100);
}


// Решение

const bird = ['П', 'т', 'и', 'ц', 'а'];

for (var index = 0; index < bird.length; index++) {
    console.log(bird[index]);
}
