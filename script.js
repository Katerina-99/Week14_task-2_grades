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

//вычисляем количество студентов получивших положительную оценку
const positiveGrade = grades.filter((el) => {
  return el >= 60;
}).length;

console.log(
  `Количество студентов, получивших положительную оценку: ${positiveGrade}`
);

//вычисляем количество студентов получивших отрицательную оценку
const negativeGrade = grades.filter((el) => el < 60).length;

console.log(
  `Количество студентов, получивших отрицательную оценку: ${negativeGrade}`
);

// преобразуем числовые оценки в буквенный формат оценок с помощью метода map
const convertToLetters = (grade) => {
  if (grade >= 80 && grade <= 100) {
    return "A";
  } else if (grade >= 60 && grade <= 79) {
    return "B";
  } else if (grade >= 40 && grade <= 59) {
    return "C";
  } else if (grade >= 20 && grade <= 39) {
    return "D";
  } else {
    return "E";
  }
};

const letterGrades = grades.map(convertToLetters);
console.log(letterGrades);
