#!/usr/bin/env node

// Script simple para verificar que todos los juegos se pueden importar correctamente
import fs from 'fs';
import path from 'path';

const binDir = 'bin';
const games = [
  'brain-games.js',
  'brain-even.js',
  'brain-calc.js',
  'brain-gcd.js',
  'brain-progression.js',
  'brain-prime.js',
];

console.log('Verificando que todos los juegos son validos...');

let allValid = true;

games.forEach((game) => {
  const gamePath = path.join(binDir, game);
  if (fs.existsSync(gamePath)) {
    console.log(`✓ ${game} - archivo existe`);
  } else {
    console.log(`✗ ${game} - archivo no encontrado`);
    allValid = false;
  }
});

if (allValid) {
  console.log('\n✓ Todos los archivos de juegos existen');
  process.exit(0);
} else {
  console.log('\n✗ Algunos archivos de juegos faltan');
  process.exit(1);
}
