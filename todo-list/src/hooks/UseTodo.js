import { useReducer } from "react"
import { todoReducer } from "../todoReducer"

export const useTodo = () =>{
    
    const initialState = []

    const [ state, dispatch ] = useReducer(todoReducer, initialState, init)
}