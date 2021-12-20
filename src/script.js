const btnCadastra = document.getElementById("btnCadastra");
const tabela = document.getElementById("tabela");
const btnSalva = document.getElementById("btnSalva");
btnSalva.disabled = true;

function inserir() {
    var linha = tabela.insertRow(tabela.rows.length);
    var celulaNome = linha.insertCell(0);
    var celulaTelefone = linha.insertCell(1);
    var celulaDataNascimento = linha.insertCell(2);
    var celulaNota = linha.insertCell(3);
    var celulaExcluir = linha.insertCell(4);
    var celulaEditar = linha.insertCell(5);
    if(document.getElementById("nome").value == ""|| document.getElementById("telefone").value == ""|| document.getElementById("dataNascimento").value == ""|| document.getElementById("notaFinal").value == ""){
    document.getElementById("mensagem").innerText = "Preencha todos os campos";
}else{
    celulaNome.innerText = document.getElementById("nome").value;
    celulaTelefone.innerText = document.getElementById("telefone").value;
    celulaDataNascimento.innerHTML = "<input type='date' id='dataNascimento"+tabela.rows.length+"' name='dataNascimento' value='"+document.getElementById("dataNascimento").value+"'>";
    celulaNota.innerText = document.getElementById("notaFinal").value;
    celulaExcluir.innerHTML = "<button onclick='excluir("+tabela.rows.length+")'>Excluir</button>";
    celulaEditar.innerHTML = "<button id ="+tabela.rows.length +" onclick='editar("+tabela.rows.length+")'>Editar</button>";
    btnCadastra.disabled = false;
    document.getElementById("mensagem").innerText = "";
    limpaCampos();
}
}
function excluir(linha) {
    var tabela = document.getElementById("tabela");
    tabela.deleteRow(linha-1);
    limpaCampos();
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
    document.getElementById("nome").value = celulaNome.innerText;
    document.getElementById("telefone").value = celulaTelefone.innerText;
    document.getElementById("dataNascimento").value = celulaDataNascimento.value;
    document.getElementById("notaFinal").value = celulaNota.innerText;
 }

 function limpaCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("notaFinal").value = "";
}
    
function salvar(linha) {
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
    limpaCampos();
}

document.getElementById("btnCadastra").addEventListener("click", inserir)