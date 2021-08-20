let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let mensagem = document.querySelector('#mensagem');
let mapa = document.querySelector('#mapa');
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validarNome(){

    let txt = document.querySelector('#txtNome');

    if(nome.value.length < 3){
        txt.innerHTML ="Nome inválido";
        txt.style.color = 'red';
        txt.style.display = 'block';
        nomeOk = false;
    } else {
        txt.style.display = 'none';
        nomeOk = true;
    }
}

function validarEmail(){

    let txt = document.querySelector('#txtEmail');

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML ="email inválido";
        txt.style.color = 'red';
        txt.style.display = 'block';
        emailOk = false;
    } else {
        txt.style.display = 'none';
        emailOk = true;
    }
}

function validarMensagem(){

    let txt = document.querySelector('#txtMensagem');

    if(mensagem.value.length > 100){
        txt.innerHTML ="Mensagem muito grande, digite menos de 100 caracteres";
        txt.style.color = 'red';
        txt.style.display = 'block';
        mensagemOk = false;
    } else {
        txt.style.display = 'none';
        mensagemOk = true;
    }
}

function validarEnvio(){
    if (mensagemOk && nomeOk && emailOk){
        alert ("Mensagem enviada com sucesso!!")
    }
    else{
        alert ("Preencha corretamente os campos")
    }
}

function mapaZoom(){
    mapa.style.width =  '800px';
    mapa.style.height = '600px';
}

function mapaNormal(){
    mapa.style.width =  '300px';
    mapa.style.height = '165px';
}