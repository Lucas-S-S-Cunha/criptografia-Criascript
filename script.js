

const letras = "abcdefghijklmnopqrstuvwxyz"
const palavra = "xVlIoo"//dijite aqui a palavra da qual deseja criptografar

//Exemplo utilizando indexOf
function cripWithIndexOf(palavra) {
    
const indices = Array.from(palavra.toLocaleLowerCase()).map(letra => letras.indexOf(letra) + 1)
console.log(indices)

}
//exemplo utilizando chartAt/chartCodeAt
function cripWithCharCodeAt(palavra) {

const posicoes = Array.from(palavra.toLocaleLowerCase()).map(letra => letra.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
console.log(posicoes)

}
cripWithIndexOf(palavra)
cripWithCharCodeAt(palavra)