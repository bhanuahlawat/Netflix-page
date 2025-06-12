export const State=()=>{

    let value=0;

    const handleButtonClick=()=>{
        value++;
        console.log(value)
    }

    // const[count,setCount]= useState();

    return(
        <>
            <section className="main-div">
                <h1>{count}</h1>
                <button onClick={handleButtonClick}>Increment</button>
            </section>
        </>
    )
} 