const grades = [];

//создаем массив из рандомных чисел(оценок)
for (let i = 0; i < 12; i++) {
  const randomGrade = Math.floor(Math.random() * 100 + 1);
  grades.push(randomGrade);
}

console.log(grades);

//суммируем все оценки
const sum = grades.reduce((currentSum, currentNum) => {
  return currentSum + currentNum;
}, 0);

//вычисляем средний балл, и округляем его до двух знаков после запятой
const averageGrade = sum / grades.length;

console.log(`Средний балл студентов: ${averageGrade.toFixed(2)}`);

//максимальный балл среди студентов
const maxGrade = Math.max(...grades);
console.log(`Максимальный балл среди студентов: ${maxGrade}`);

//минимальный балл среди студентов
const minGrade = Math.min(...grades);
console.log(`Минимальный балл среди студентов: ${minGrade}`);
