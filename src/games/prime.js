import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const roundsCount = 3;

const getRandomNumber = (min = 2, max = 200) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

export default function runPrimeGame() {
  const name = greetUser(); // ✅ saludo uniforme
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  for (let round = 0; round < roundsCount; round += 1) {
    const number = getRandomNumber();
    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question('Tu respuesta: ');

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}
