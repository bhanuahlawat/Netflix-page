import "./EV.css";
export const EventHandling=()=>{

    function handleButtonClick(){
        alert("i clicked");
    }

    return(
        <>
        <button onClick={handleButtonClick}>CLICK ME</button>
        </>
    )
}