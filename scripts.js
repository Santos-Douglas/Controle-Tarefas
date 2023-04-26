const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adiocionarNovaTarefa() {
    minhaListaDeItens.push( {
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas ()
}
/*o PUT irá adicionar alguma informação dentro do "arrei" */

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
        </li>   

        `
    })
    /* o && é como um "SE" */

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista' ,JSON.stringify(minhaListaDeItens))
}
/*local storage - serve para guardar informações e ficarem salvas. */
/*o local storage só aceita textos, caso queira colocar um objeto e usar o JSON.stringif  */
/* JSON.stringif ele transforma todo formato em string e dessa forma guardamos tudo dentro do localstorage*/ 

    function concluirTarefa(posicao) {
        minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida 

        mostrarTarefas()
    }
    /* o ! serve para invertermos a informação entre true|false,  sinal de negação*/
    
    function deletarItem(posicao) {
        minhaListaDeItens.splice(posicao, 1)
        
        mostrarTarefas()
    }

    function recarregarTarefas() {
        const taretasDoLocalStogare = localStorage.getItem('lista')

        if (taretasDoLocalStogare) {
            minhaListaDeItens = JSON.parse(taretasDoLocalStogare)
        }    
        
        mostrarTarefas()
    }

    recarregarTarefas()
    button.addEventListener('click', adiocionarNovaTarefa)
