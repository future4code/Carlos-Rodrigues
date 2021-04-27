function adicionarTarefa() {
    const novaTarefa = document.getElementById('tarefa')
    const diaSelecionado = document.getElementById('dias-semana')

    if (novaTarefa.value == "") {
        alert("Tarefa em branco, adicione uma tarefa!!")
        return    
    }
    else if (novaTarefa.value !== "") {
        switch (diaSelecionado.value) {
            case 'segunda':
                segunda.innerHTML += `<li onclick = "riscar(this)">${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'terca':
                terca.innerHTML += `<li onclick = "riscar(this)">${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'quarta':
                quarta.innerHTML += `<li onclick = "riscar(this)">${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'quinta':
                quinta.innerHTML += `<li onclick = "riscar(this)">${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'sexta':
                sexta.innerHTML += `<li onclick = "riscar(this)">${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'sabado':
                sabado.innerHTML += `<li onclick = "riscar(this)">${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'domingo':
                domingo.innerHTML += `<li onclick = "riscar(this)">${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;    
        }    
    }

}

function riscar(elemento) {
        elemento.style.textDecoration = 'line-through'
}

function apagarTarefas() {

    
}

