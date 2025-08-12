import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const roundsCount = 3;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export default function runProgressionGame() {
  const name = greetUser();
  console.log('¿Qué número falta en la progresión?');

  for (let round = 0; round < roundsCount; round += 1) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const progression = generateProgression(start, step, 10);

    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Pregunta: ${progression.join(' ')}`);
    const answer = readlineSync.question('Tu respuesta: ');

    if (Number(answer) === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}
