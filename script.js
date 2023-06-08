function contar(){
var ini = window.document.getElementById('txti')
var fim = window.document.getElementById('txtf')
var pas = window.document.getElementById('txtp')
var res = window.document.getElementById('res')

var n1 = Number(ini.value)
var n2 = Number(fim.value)
var n3 = Number(pas.value)
res.innerHTML = `Contando:<br>`

if(ini.value.length == 0 || Number(ini.value)<0){
    alert('Erro! Algo deu errado! Preencha o campo de forma correta!')
    res.innerHMTL = `Impossível contar`
}else if(fim.value.length == 0 || Number(fim.value)<=0){
    alert('ERRO! Algo deu errado! Preencha o campo de forma correta!')
    res.innerHTML =`Impossível contar!`
}else if(pas.value.length == 0){
    alert('ERRO!PASSO INVÁlIDO!O valor será reajustado para 1!')
    pas.value = 1
    res.innerHTML = 'Tente Novamente'
}else if(Number(fim.value)<Number(ini.value)){
    for(var n1;n1>n2;n1-=n3)
    res.innerHTML += `${n1}  \u{1F449}`
    res.innerHTML += `\u{1F3C1}`
}else{
    for(var n1;n1<=n2;n1 +=n3){
        res.innerHTML += ` ${n1} \u{1F449} `
    }
        res.innerHTML += `\u{1f3C1}`

}}
//for(let c = i;c < f;c += p)