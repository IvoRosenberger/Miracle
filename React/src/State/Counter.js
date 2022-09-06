import React, {useState} from "react"
import TextCounter from './Text'
import Button from './Button'

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <>
            <TextCounter data={count}/>
            <Button func={increment} type={'incrementar'}/>
            <Button func={decrement} type={'decrementar'}/>
        </>
    )
}

export default Counter