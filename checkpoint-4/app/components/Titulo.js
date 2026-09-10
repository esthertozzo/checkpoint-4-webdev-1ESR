
function Titulo() {
    const eventDig = () => {
        eventDig(e => e.target.value);

    }

    return (
        <input value={eventDig}></input>
    )

} 

export default Titulo