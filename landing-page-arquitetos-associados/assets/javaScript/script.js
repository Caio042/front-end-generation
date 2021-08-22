let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');

function validarCampos(){
    let nomeOk = false;
    let emailOk = false;
    let telefoneOk = false;

    if (nome.value.length > 3){
        nomeOk = true;
    }
    if (email.value.indexOf('@') != -1){
        emailOk = true;
    }
    if (telefone.value.length > 11){
        telefoneOk = true;
    }

    if (nomeOk && emailOk && telefoneOk){
        alert ("Solicitação efetuada com sucesso")
    } else {
        alert ("um ou mais campos inválidos")
    }
}