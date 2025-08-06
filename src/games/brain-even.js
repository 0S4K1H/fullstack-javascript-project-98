import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export default function runEvenGame() {
  console.log('Bienvenido a Brain Games!');
  const name = readlineSync.question('Cual es tu nombre? ');
  console.log(`Hola, ${name}!`);
  console.log('Responde "yes" si el numero es par, de lo contrario responde "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${randomNumber}`);
    const answer = readlineSync.question('Tu respuesta: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`Intentemoslo de nuevo, ${name}!`);
      return;
    }

    if (answer === correctAnswer) {
      console.log('Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`Intentemoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`Felicidades, ${name}!`);
}
