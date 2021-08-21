let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let endereco = document.querySelector('#endereco');

function validarCampos(){
    let nomeOk = false;
    let emailOk = false;
    let enderecoOk = false;
    if (nome.value.length > 3){
        nomeOk = true;
    }
    if (email.value.indexOf('@') != -1){
        emailOk = true;
    }
    if (endereco.value.length > 5){
        enderecoOk = true;
    }

    if (nomeOk && emailOk && enderecoOk){
        alert ("Solicitação efetuada com sucesso")
    } else{
        alert ("um ou mais campos inválidos")
    }
}