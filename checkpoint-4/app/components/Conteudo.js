function Conteudo() {
    const eventDig = () => {
        eventDig(e => e.target.value);

    }

    return (
        <textarea onChange={eventDig}></textarea>
    )

} 
export default Conteudo