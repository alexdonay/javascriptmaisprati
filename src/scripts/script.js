const btnCadastra = document.getElementById("btnCadastra");
const tabela = document.getElementById("tabela");
const btnSalva = document.getElementById("btnSalva");
btnSalva.disabled = true;

function inserir() {
    var mensagemErro = undefined;
    if(document.getElementById("nome").value == ""|| document.getElementById("telefone").value == ""|| document.getElementById("dataNascimento").value == ""|| document.getElementById("notaFinal").value == ""){
     mensagemErro = "Preencha todos os campos";
    } 
    if (document.getElementById("notaFinal").value>10){
    mensagemErro = "A nota não pode ser maior que 10";
    }
    if (document.getElementById("notaFinal").value<0) {
        mensagemErro = "A nota não pode ser menor que zero";
    }
    if (mensagemErro == undefined){
        var linha = tabela.insertRow(tabela.rows.length);
        var celulaNome = linha.insertCell(0);
        var celulaTelefone = linha.insertCell(1);
        var celulaDataNascimento = linha.insertCell(2);
        var celulaNota = linha.insertCell(3);
        var celulaExcluir = linha.insertCell(4);
        var celulaEditar = linha.insertCell(5);
        celulaNome.innerText = document.getElementById("nome").value;
        celulaTelefone.innerText = document.getElementById("telefone").value;
        celulaDataNascimento.innerHTML = "<input type='date' id='dataNascimento"+tabela.rows.length+"' disabled='true' name='dataNascimento' value='"+document.getElementById("dataNascimento").value+"'>";
        celulaNota.innerText = document.getElementById("notaFinal").value;
        celulaExcluir.innerHTML = "<button id='excluir"+tabela.rows.length+"' onclick='excluir("+tabela.rows.length+")'>Excluir</button>";
        celulaEditar.innerHTML =  "<button id ='editar"+tabela.rows.length+"' onclick='editar("+tabela.rows.length+")'>Editar</button>";
        btnCadastra.disabled = false;
        limpaCampos();
        mensagemErro = "Dados Cadastrados Com Sucesso";
    }
        document.getElementById("mensagem").innerText = mensagemErro;
        mensagemErro = undefined;
    
}

function excluir(linha) {
    var tabela = document.getElementById("tabela");
    tabela.deleteRow(linha-1);
    limpaCampos();
    document.getElementById("mensagem").innerText = "Registro Excluído com Sucesso";
}

function editar(linha) {
    btnCadastra.disabled = true;
    btnSalva.disabled = false;
    btnSalva.setAttribute("onclick","salvar("+linha+")");
    var tabela = document.getElementById("tabela");
    var celulaNome = tabela.rows[linha-1].cells[0];
    var celulaTelefone = tabela.rows[linha-1].cells[1];
    var celulaDataNascimento = document.getElementById("dataNascimento"+linha);
    var celulaNota = tabela.rows[linha-1].cells[3];
    document.getElementById("excluir"+linha).setAttribute("disabled", true);
    document.getElementById("nome").value = celulaNome.innerText;
    document.getElementById("telefone").value = celulaTelefone.innerText;
    document.getElementById("dataNascimento").value = celulaDataNascimento.value;
    document.getElementById("notaFinal").value = celulaNota.innerText;
    document.getElementById("mensagem").innerText = "Editando Registro";
 }

 function limpaCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("notaFinal").value = "";
}
    
function salvar(linha) {
    var mensagemErro = undefined;
    if(document.getElementById("nome").value == ""|| document.getElementById("telefone").value == ""|| document.getElementById("dataNascimento").value == ""|| document.getElementById("notaFinal").value == ""){
        mensagemErro = "Preencha todos os campos";
    } 
    if (document.getElementById("notaFinal").value > 10){
        mensagemErro = "A nota não pode ser maior que 10";
    }
    if (document.getElementById("notaFinal").value < 0) {
        mensagemErro = "A nota não pode ser menor que zero";
    }
    if (mensagemErro == undefined){
        var celulaNome = tabela.rows[linha-1].cells[0];
        var celulaTelefone = tabela.rows[linha-1].cells[1];
        var celulaDataNascimento = document.getElementById("dataNascimento"+linha);
        var celulaNota = tabela.rows[linha-1].cells[3];
        celulaNome.innerText = document.getElementById("nome").value;
        celulaTelefone.innerText = document.getElementById("telefone").value;
        celulaDataNascimento.value = document.getElementById("dataNascimento").value;
        celulaNota.innerText = document.getElementById("notaFinal").value;
        btnSalva.disabled = true;
        btnCadastra.disabled = false;
        document.getElementById("excluir"+linha).removeAttribute("disabled")
        mensagemErro = "Dados Atualizados Com Sucesso"
        limpaCampos();
    }
    document.getElementById("mensagem").innerText = mensagemErro;
    mensagemErro = undefined;
    
}
function masktel(telefone) {
    switch (telefone.value.length) {
        case 0:
            telefone.value = ("(" + telefone.value);
            break;
        case 1:
            telefone.value = telefone.value;
            break;
        case 3:
            telefone.value = telefone.value +")";
            break;
    }
}
document.getElementById("btnCadastra").addEventListener("click", inserir);