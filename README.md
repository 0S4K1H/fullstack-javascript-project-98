# Brain Games

### Hexlet tests and linter status:
[![Actions Status](https://github.com/0S4K1H/fullstack-javascript-project-98/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/0S4K1H/fullstack-javascript-project-98/actions)

### Code Quality:
[![Maintainability](https://qlty.sh/gh/0S4K1H/projects/fullstack-javascript-project-98/maintainability.svg)](https://qlty.sh/gh/0S4K1H/projects/fullstack-javascript-project-98)

## Descripcion del proyecto

Este proyecto contiene una serie de juegos de consola diseñados como parte del curso **Juegos Mentales**. Cada juego se ejecuta desde la terminal y consiste en **3 rondas** para ganar. Incluye logica comun para manejar preguntas, respuestas y validacion, asi como juegos individuales implementados en modulos separados.

## Juegos disponibles

- **brain-games**: Juego de bienvenida
- **brain-even**: Determina si un numero es par o impar
- **brain-calc**: Resuelve operaciones aritmeticas basicas
- **brain-gcd**: Encuentra el maximo comun divisor
- **brain-progression**: Encuentra el numero faltante en una progresion
- **brain-prime**: Determina si un numero es primo

## Instalacion

Para instalar el proyecto en tu maquina local:

```bash
git clone https://github.com/0S4K1H/fullstack-javascript-project-98.git
cd fullstack-javascript-project-98
make setup
npm link
```

## Como jugar

Despues de la instalacion, puedes ejecutar cualquier juego:

```bash
brain-games
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

## Demostraciones

### Brain Even
[![Ver demo en asciinema](https://asciinema.org/a/ifxqSuZsJaOSj568RpYLn1Vkq.svg)](https://asciinema.org/a/ifxqSuZsJaOSj568RpYLn1Vkq)

### Brain Calc
[![Ver demo en asciinema](https://asciinema.org/a/CMUuFPdxCrfSally7u6KmbOqy.svg)](https://asciinema.org/a/CMUuFPdxCrfSally7u6KmbOqy)

### Brain GCD
[![Ver demo en asciinema](https://asciinema.org/a/hBF1UtCgrNHO8UiquRv7SKb2N.svg)](https://asciinema.org/a/hBF1UtCgrNHO8UiquRv7SKb2N)

### Brain Prime
[![Ver demo en asciinema](https://asciinema.org/a/SMxX0srPATIujkuWogqvENaey.svg)](https://asciinema.org/a/SMxX0srPATIujkuWogqvENaey)

## Estructura del proyecto

```
fullstack-javascript-project-98/
├── bin/                  # Archivos ejecutables de cada juego
│   ├── brain-games.js
│   ├── brain-even.js
│   ├── brain-calc.js
│   ├── brain-gcd.js
│   ├── brain-progression.js
│   └── brain-prime.js
├── src/                  # Logica del juego
│   ├── cli.js            # Funcion de saludo
│   └── games/            # Implementacion de cada juego
│       ├── brain-even.js
│       ├── brain-calc.js
│       ├── gcd.js
│       ├── progression.js
│       └── prime.js
├── .eslintrc.yml         # Configuracion de ESLint
├── .gitattributes        # Configuracion de line endings
├── Makefile              # Scripts de construccion
├── package.json          # Dependencias y configuracion
└── README.md




