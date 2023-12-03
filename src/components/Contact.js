import { useState } from "react";

//rafce
const Contact = () => {
    let b = Math.random();
    let [a,setA] = useState(Math.random());
    return (
        <>
        <div>contact us</div>
        <button onClick={()=>{
            console.log(a);
            setA(Math.random());
            console.log(a);
        }}>
change value of {a}
        </button>
        </>
    )
}

export default Contact;