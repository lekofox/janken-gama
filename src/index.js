/* const rl = require('./interface/')

rl.question('Você está gostando de POO? ', resposta => {
    console.log(`Sua resposta foi ${resposta}`)
    rl.close();
}) */

const options = require('./data');
const User = require('./controller/class/user')

let jogar = new User({opt:options}).game()

jogar
