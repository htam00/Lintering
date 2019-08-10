"use strict"

// Soma os params...(a + b)
function sum(a, b){
    return a + b
}

// Subtrair os params...(a - b)
function sub(a, b){
    return a - b
}

// Multiplicar os params...(a * b)
function mul(a, b){
    return a * b
}

// Dividir os params...(a / b)
function div(a, b){
    return a / b
}

// exportando as funções para a index
module.exports = {
    sum,
    sub,
    mul,
    div
}