import React from "react";

function Flip() {

    const [show1, setShow1] = React.useState(false)
    const [show1_1, setShow1_1] = React.useState(false)
    const [show2, setShow2] = React.useState(false)

    return <div>
        Flip
        <button 
        style={{marginLeft: "10px"}}
        onClick={e => {
            setShow1(false)
            setShow1_1(false)
            setShow2(false)
            }}>Collapse</button>
        <div>
            1.
        </div>
        <button onClick={e => {setShow1(!show1)}}>{show1 ? "-" : "+"}</button>

        {show1 ? 
        <>
        <div>1.1</div>

        <button onClick={e => {setShow1_1(!show1_1)}}>{show1_1 ? "-" : "+"}</button>

        {show1_1 ? 
        <>
        <div>1.1.1</div>
        <div>1.1.2</div>
        </>
         : ""}

        <div>1.2</div>
        </>
         : ""}
        

        <div>
            2.
        </div>
        <button onClick={e => {setShow2(!show2)}}>{show2 ? "-" : "+"}</button>

        {show2 ? 
        <>
        <div>2.1</div>
        <div>2.2</div>
        </>
         : ""}
    </div>
}

export default Flip;