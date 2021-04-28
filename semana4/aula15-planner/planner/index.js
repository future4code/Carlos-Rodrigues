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

function apagarTarefa() {

const apagar1 = document.getElementById("segunda")
const apagar2 = document.getElementById("terca")
const apagar3 = document.getElementById("quarta")
const apagar4 = document.getElementById("quinta")
const apagar5 = document.getElementById("sexta")
const apagar6 = document.getElementById("sabado")
const apagar7 = document.getElementById("domingo")

apagar1.innerHTML = ""
apagar2.innerHTML = ""
apagar3.innerHTML = ""
apagar4.innerHTML = ""
apagar5.innerHTML = ""
apagar6.innerHTML = ""
apagar7.innerHTML = ""

// const apagar = document.getElementsByClassName("dia")
// apagar.innerHTML = "" (Pq não funciona?)

}
