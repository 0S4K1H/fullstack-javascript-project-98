import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Refactor para evitar reasignar parámetros
const gcd = (x, y) => {
  let a = x;
  let b = y;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

export default function runGcdGame() {
  const name = greetUser();
  console.log('Encuentra el máximo común divisor de los números dados.');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    console.log(`Pregunta: ${num1} ${num2}`);

    const answer = readlineSync.question('Tu respuesta: ');
    const correctAnswer = gcd(num1, num2);

    if (Number(answer) === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}
