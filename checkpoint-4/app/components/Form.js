
function Titulo() {

    const eventDig = () =>{
        eventDig(e => e.target.value)

    }

    return(
        <input onChange={eventDig}></input>
        
    ) 

} 

function Conteudo() {

    return <textarea></textarea>

} 

function Botao(){
    return <button>Criar Anotação</button>
}



function Formulario(){
    

    return(
        <>
        <h2>Nova Anotação</h2>
        <p>Titulo</p>
        <Titulo/>
        <p>Conteudo</p>
        <Conteudo/>
        <br></br>
        <Botao/>
        </>
    )
}

export default Formulario