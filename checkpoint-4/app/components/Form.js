
function Titulo() {
    const titulo = '';

    return <input value={titulo}></input>

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
        <br></br>
        <Titulo/>
        <p>Conteudo</p>
        <br></br>
        <Conteudo/>
        <br></br>
        <Botao/>
        </>
    )
}

export default Formulario