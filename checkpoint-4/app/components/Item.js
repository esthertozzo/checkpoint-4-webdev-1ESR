import Titulo from "./Titulo"

function infoTitle (){
    return(
        <>
        <h2><Titulo/></h2>
        </>
    )
}

function Item(){
    return(
        <>
        <div>
            <infoTitle/>
        </div>
        </>
    )
}

export default Item