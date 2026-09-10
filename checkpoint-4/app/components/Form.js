
import Titulo from "./Titulo"
import { useState } from "react"
import Conteudo from "./Conteudo"
import Botao from "./Botao";


function Formulario(){
    const [form, setForm] = useState();
    

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