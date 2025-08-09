import readlineSync from 'readline-sync';

const roundsCount = 3;

const getRandomNumber = (min = 2, max = 200) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Predicado: devuelve true si n es primo
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
  console.log('Bienvenido a Brain Games!');
  const name = readlineSync.question('Cual es tu nombre? ');
  console.log(`Hola, ${name}!`);
  console.log('Responde "yes" si el numero dado es primo. De lo contrario, responde "no".');

  for (let round = 0; round < roundsCount; round += 1) {
    const number = getRandomNumber();
    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question('Tu respuesta: ');

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (answer === 'yes' || answer === 'no') {
      if (answer === correctAnswer) {
        console.log('Correcto!');
      } else {
        console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
        console.log(`Intentemoslo de nuevo, ${name}!`);
        return;
      }
    } else {
      console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`Intentemoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`Felicidades, ${name}!`);
}
