console.log("teste");
var imagem = document.getElementsByTagName("img")[0];
function RetornaHoraEmString()
{

    var data = new Date();
    var hora = data.getHours();
    if(hora >= 18)
        imagem.src = "../img/noite.webp";
    else if(hora >= 17)
        imagem.src = "../img/tarde.jpg";
    else if(hora >= 8)
        imagem.src = "../img/claro.jpg";
    else if(hora >= 6)
        imagem.src = "../img/manha.jpg";

    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    
    var tempo = `⌚${FormataNumeralHorario(hora)}:${FormataNumeralHorario(minutos)}:${FormataNumeralHorario(segundos)}`;
    return tempo;
}

function FormataNumeralHorario(entrada){

    if(entrada.toString().length == 1)
        return "0" + entrada;
    else 
        return entrada;
}

function AtualizaHora(){
    var displayHoras = document.getElementById("horas");
    displayHoras.innerHTML = RetornaHoraEmString();
}

function Atualizar(){
    setInterval(()=> AtualizaHora(),1000);
    var conteudo = document.getElementsByClassName("conteudo")[0];
    console.log(conteudo);    
}