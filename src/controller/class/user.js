const MachineOptions = require(".");
const inquirer = require('inquirer');
const options = require('../../data')
const gameby = require('../../data/gameby')

class User extends MachineOptions {
    constructor({ opt, name, selected }) {
        super({ opt });
        this._name = name;
        this._selected = selected
        this._sort = this.sort()

    }
    set name(string) {
        this._name = string
    }

    get name() {
        return this._name
    }

    set selected(string) {
        this._selected = string
    }

    get selected() {
        return this.selected
    }

    logic() {
        if (this._selected === this._sort) {
            return `${this._name}, o  resultado foi: empate com a máquina \n\nUsuario: ${this._selected} | Maquina : ${this._sort}`
        } else if ((this._selected === 'Pedra' && this._sort ==='Tesoura') || this._selected === 'Tesoura' && this._sort ==='Papel' || this._selected === 'Papel' && this._sort ==='Pedra'){
            return `${this._name}, o resultado foi: ganhou da máquina \n\nUsuario: ${this._selected} | Maquina : ${this._sort}\n`
        } else{
            return `${this._name}, o resultado foi: perdeu para a máquina \n\nUsuario: ${this._selected} | Maquina : ${this._sort}\n`
        }
    }

    game() {
        console.info(gameby)
        return inquirer.prompt([
            {
                name: 'name',
                message: 'Qual o seu nome?',
                default: 'Jogador'
            },
            {
                type: 'list',
                name: 'joken',
                message: 'Selecione sua jogada',
                choices: options
            }
        ]).then((answers) => {
            this._name = answers.name
            this._selected = answers.joken
            console.info('\n' + this.logic())
        })
    }
}


module.exports = User