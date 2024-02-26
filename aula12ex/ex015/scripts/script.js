function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (form_ano.value.length == 0 || form_ano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 15) {
                img.setAttribute('src', 'crianca-homem.jpg')
            } else if (idade < 41) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else {
                img.setAttribute('src', 'velho-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 16) {
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if (idade < 41) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else {    
                img.setAttribute('src', 'velho-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
}