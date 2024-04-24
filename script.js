var notas = [];
function salvarNota() {
    var titulo = document.getElementById("titulo").value;
    var conteudo = document.getElementById("conteudo").value;

    if (titulo.trim() === "" || conteudo.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var nota = {
        titulo: titulo,
        conteudo: conteudo
    };

    notas.push(nota);

    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";

    exibirNotas();
}

function exibirNotas() {
    var notasSalvasDiv = document.getElementById("notasSalvas");
    notasSalvasDiv.innerHTML = ""; 

        notas.forEach(function(nota, index) {
        var notaDiv = document.createElement("div");
        notaDiv.classList.add("nota");
        notaDiv.innerHTML = "<h3>" + nota.titulo + "</h3><p>" + nota.conteudo + "</p><button onclick='removerNota(" + index + ")'>Excluir</button>";
        notasSalvasDiv.appendChild(notaDiv);
    });
}

function removerNota(index) {
    notas.splice(index, 1); 
    exibirNotas(); 
}

exibirNotas();