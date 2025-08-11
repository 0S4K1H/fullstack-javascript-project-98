import readlineSync from 'readline-sync';

export default function greetUser() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  return name; // ← 🔥 este return es clave
}
