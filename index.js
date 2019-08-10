// © Matheus Luna
// https://matheusluna.dev/blog
// Clean Code, Code Professional
// ESLint
"use strict";

const { sendMessage } = require("./sendMessage");

// chamando modulos
const {sum, sub, mul, div} = require('./Components/Calculator')

// Declarando variavel global
let item = [];

// escrenvendo um valor Type:String
// na variavel item
// eslint(no-unsued-vars)
item.push("chapeu");

// Chamando as função do Calculator
function Results(){
    console.log(`Sum: ${sum(10, 10)}`)
    console.log(`Sub: ${sub(10, 10)}`)
    console.log(`Mul: ${mul(10, 10)}`)
    console.log(`Div: ${div(10, 10)}`)
}


function Tabuada(){
    let i;
    for(i = 0; i < 10; i++){
        console.log(`[SOMA] 2 + ${i} = ${sum(2, i)}`)
    }
}

// Chamando a Função sendMessage("saidaDeMessage(PT_BR)")
sendMessage();
Results();
Tabuada()