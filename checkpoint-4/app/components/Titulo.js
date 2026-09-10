
function Titulo() {
    const eventDig = () => {
        eventDig(e => e.target.value);

    }

    return (
        <input onChange={eventDig}></input>
    )

} 
export default Titulo