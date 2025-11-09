function avancar(){
    let inputNome = document.getElementById("inputNome")
    let nome = inputNome.value

    document.getElementById("msgCadastro").textContent = "Realize seu cadastro, " + nome

    inputNome.value = ""
}

function finish(){
    let inputEmail = document.getElementById("inputEmail")
    inputEmail.value = ""
    let inputSenha = document.getElementById("inputSenha")
    inputSenha.value = ""
    alert("Cadastro finalziado!")
}