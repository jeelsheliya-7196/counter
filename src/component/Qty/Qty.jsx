import React, {useState} from 'react'


function Qty() {
    const [count, setCount] = useState(1)
    const inc = () =>{
        setCount(count + 1);
    }
    const dic = () =>{
        if(count > 1){
            // useState(0)
        setCount(count - 1);

        }
    }
    return(
        <div>
            <button onClick={inc} className='b1'>+</button>
                <span>
                    {
                        count
                    }
                </span>
            <button onClick={dic} className='b2'>-</button>

        </div>
    )
 
}

export default Qty
