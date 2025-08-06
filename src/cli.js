import readline from 'readline-sync';

export default function greetuser() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readline.question('¿Cual es tu nombre? ');
  console.log(`¡Bienvenido ${name}!`);
}
