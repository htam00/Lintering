// © Matheus Luna
// https://matheusluna.dev/blog
// Clean Code, Code Professional
// ESLint

// Declarando variavel global
let item

// escrenvendo um valor Type:String
// na variavel item
item = ["chapeu", "camisa", "sticker"]

// Declarando a função sendMessage()
function sendMessage(){
    // Variavel local
    const Message = "Hello Like Logs" 

    // loops 
    for(let i = 0; i < 5; i++){
        console.log(`${i}: ${item[i]}`) // mostrar 5 vezes a mensagem
    }
}

// Chamando a Função sendMessage("saidaDeMessage(PT_BR)")
sendMessage()
