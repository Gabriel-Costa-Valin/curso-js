function tabuada(){
    let num = document.querySelector('input#txtn')
    let tabuada = document.querySelector('select#celtab')

    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}