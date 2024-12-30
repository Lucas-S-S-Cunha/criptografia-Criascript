

const letras = "abcdefghijklmnopqrstuvwxyz"
const palavra = "xVlIoo"//dijite aqui a palavra da qual deseja criptografar

//Exemplo utilizando indexOf
const indices = Array.from(palavra.toLocaleLowerCase()).map(letra => letras.indexOf(letra) + 1)
console.log(indices)

//exemplo utilizando chartAt/chartCodeAt
const posicoes = Array.from(palavra.toLocaleLowerCase()).map(letra => letra.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
console.log(posicoes)