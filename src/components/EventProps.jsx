export const EventProps=()=>{
    const HandleWelcomeUser=(user)=>{
        alert(`hey,${user}`);
    }

    const HandleHover=()=>{
        alert(`hey,you hover on me`);
    }

    return(
        <>
        <WelcomeUser 
        onClick={()=>HandleWelcomeUser("Bhanu")}
        onMouseEnter={HandleHover}
        />      
        </>
    )
}

const WelcomeUser=(props)=>{

    const handleGreeting=()=>{
        props.onClick
    } 

    return(
        <>
        <button onClick={props.onClick}> click me</button>
        <button onMouseEnter={props.onMouseEnter}> Hover me</button>
        <button onClick={handleGreeting}> Hover me</button>
        </>
    )
}