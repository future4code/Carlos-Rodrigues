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
                segunda.innerHTML += `<li>${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'terca':
                terca.innerHTML += `<li>${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'quarta':
                quarta.innerHTML += `<li>${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'quinta':
                quinta.innerHTML += `<li>${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'sexta':
                sexta.innerHTML += `<li>${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'sabado':
                sabado.innerHTML += `<li>${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;
            case 'domingo':
                domingo.innerHTML += `<li>${novaTarefa.value}</li>`
                novaTarefa.value = ""
                break;    
        }    
    }

}

function riscar() {
       
}

function apagarTarefas() {

    
}

