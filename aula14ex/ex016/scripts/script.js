function contar() {
    let inicio = document.querySelector('input#txtinit')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#res')

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let start = Number(inicio.value)
        let end = Number(fim.value)
        let step = Number(passo.value)

        if (step <= 0) {
            window.alert('Passo inválido! Considerando passo igual à 1')
            step = 1
        }

        if (inicio.value < fim.value){
            //contagem crescente
            for (let cont = start; cont <= end; cont += step) {
                res.innerHTML += ` ${cont}`
            }
        } else {
            //contagem regressiva
            for (let cont = start; cont >= end; cont -= step) {
                res.innerHTML += ` ${cont}`
            }
        }
    }
}