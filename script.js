const button = document.querySelector(".add-task");
const input = document.querySelector(".task");
const listaCompleta = document.querySelector(".list")

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = ""

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {
        novaLi = 
            novaLi + `  

             <li class="list-task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="Confirma" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="Deletar" onclick="deletarItem(${index})">
             </li>
    
    `
    })


    listaCompleta.innerHTML = novaLi


}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()
}

function deletarItem(index){
        minhaListaDeItens.splice(index, 1)

        mostrarTarefas()
}


button.addEventListener('click', adicionarNovaTarefa)