# Week 2 - Challenge 3

Recrear los métodos del objeto Array
En este reto tenemos que recrear los distintos métodos del objeto Array (length, push, pop, slice, indexOf...) y testearlos utilizando jest.

Realizaremos toda la instalación inicial (husky, eslint, y jest), además, necesitaremos instalar el transpilador Babel para poder trabajar con jest usando módulos ECMA6.

Antes de empezar
Primero inicializamos el repositorio con los cuatro archivos básicos(readme.md, package.json, .gitignore y .editorconfig), hacemos el Initial commit y subimos el repositorio. A continuación, creamos una rama nueva de configuración inicial e instalamos husky junto con los dos huskys que vamos a utilizar durante el curso.

Instalar jest
Introducir en el terminal:
npm i -D jest
Crear archivo sample.test.js
Instalar @types/jest (jest interpreta que vamos a usar un módulo de TypeScript) y el transpilador Babel. Para ello introducir en el terminal:
npm i -D @types/jest @babel/plugin-transform-modules-commonjs
Editar .eslintrc.json:
"env": {
"browser": true,
"es2021": true,
"node": true,
"jest": true
},
Crear jsconfig.json y añadir en ese archivo este código:
{ "typeAcquisition": { "include":["jest"] } }`
Métodos recreados
array.length
array.push
array.pop
array.shift
array.unshift
array.some
array.every
array.find
array.filter
array.map
array.findIndex
array.reduce
array.includes
array.indexOf
array.join

const array = [
[0, 1],
[2, 3],
[4, 5],
];
const summ = accumulator.concat(currentValue), []);
const r = arr.arrayReduce(array, summ);
expect(r).toEqual(result);
