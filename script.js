
var result = window.document.getElementById("result")
var aux = false
var num = 1
var timer
var cont = 0

function atualizar(){
    result.innerHTML = "<h1>"+num+"</h1>"
    num++    
}

function play(){   
    if(aux==false){
        aux = true
        timer = setInterval(atualizar,1000)
    }
        
}

function pause(){
    clearInterval(timer)
    aux = false
}

function reset(){
    clearInterval(timer)
    num=0
    result.innerHTML = "<h1>0</h1>"
    aux = false
}