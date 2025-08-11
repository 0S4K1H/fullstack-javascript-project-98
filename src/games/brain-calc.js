import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }
};

export default function runCalcGame() {
  const name = greetUser();
  console.log('Cual es el resultado de la expresion?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator);

    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`Intentemoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`Felicidades, ${name}!`);
}
