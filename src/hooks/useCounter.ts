import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    // const initialValue = 0
    const [counter, setCounter] = useState(initialValue)
    const increment = () => setCounter(c => c + 1)
    const decrement = () => setCounter(c => c - 1)
    const reset = () => setCounter(initialValue)

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}