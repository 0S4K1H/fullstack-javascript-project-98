#!/usr/bin/env node

/**
 * Setup script for CI/CD compatibility
 * This script ensures all dependencies are installed correctly
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Iniciando setup del proyecto...');

// Verificar que package.json existe
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json no encontrado');
  process.exit(1);
}

console.log('✅ package.json encontrado');

try {
  // Instalar dependencias
  console.log('📦 Instalando dependencias...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencias instaladas');

  // Verificar ESLint
  console.log('🔍 Verificando ESLint...');
  execSync('npx eslint --version', { stdio: 'pipe' });
  console.log('✅ ESLint disponible');

  // Ejecutar linting
  console.log('🧹 Ejecutando linter...');
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting completado sin errores');

  console.log('🎉 Setup completado exitosamente');
} catch (error) {
  console.error('❌ Error durante el setup:', error.message);
  process.exit(1);
}
