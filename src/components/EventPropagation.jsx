import "./EV.css";
export const EventPropagation=()=>{

    const handleGrandParent=(event)=>{
        event.stopPropagation()
        console.log("Grand Parent click")
    }

    const handleParentClick=(event)=>{
        event.stopPropagation()
        console.log(" Parent click")
    }

    const handleChildClick=(event)=>{
        event.stopPropagation()
        console.log("Grand Child click")
    }

    return(
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    )
}