const readline = require('readline')

const rl = readline.createInterface({input:process.stdin, output:process.stdout});
const result =[]

export const organiza = () => {
    rl.question('Digite propriedades CSS: ',(answer)=>{
        if(answer == 'sair' || answer == 'SAIR') {
            console.log("Suas propiedades em ordem alfabética" + "\n." + result.sort().join("\n-"))
            return rl.close()
        } else {
            result.push(answer)
        }
        organiza()
    })

}
organiza()