class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    mudaIdade(nova_idade){
        this.idade = nova_idade
    }
}

let p1 = new Pessoa("Gabriel", 25, "Programador")
let p2 = new Pessoa("Maria", 19, "Administradora")
let p3 = new Pessoa("Álvaro", null, "Contador")

console.log(p3.idade)

p3.mudaIdade(23)
