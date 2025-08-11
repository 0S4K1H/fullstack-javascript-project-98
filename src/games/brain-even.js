import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const isEven = (num) => num % 2 === 0;

export default function runEvenGame() {
  const name = greetUser();

  console.log('Responde "yes" si el numero es par, de lo contrario responde "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${randomNumber}`);
    const answer = readlineSync.question('Tu respuesta: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`Intentemoslo de nuevo, ${name}!`);
      return;
    }

    console.log('Correcto!');
    correctAnswers += 1;
  }

  console.log(`Felicidades, ${name}!`);
}
