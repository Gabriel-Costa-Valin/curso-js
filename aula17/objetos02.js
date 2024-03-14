class Carro {
    constructor(marca, modelo, cor, ano){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ano = ano
    }

    mudaCor(nova_cor){
        this.cor = nova_cor
    }
}

let carro1 = new Carro("Renault", "Kwid", "Azul", 2018)

console.log(carro1.cor)

carro1.mudaCor("Preto")

console.log(carro1.cor)
