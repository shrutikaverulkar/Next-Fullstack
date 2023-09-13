"use client"
import React, { useEffect, useState } from 'react'

type TODO = {
    _id?: string,
    task: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
    __v?: string
}
const TodoTable = () => {
    const [allTodos, setAllTodos] = useState<TODO[]>([])
    const getTodos = async () => {
        const res = await fetch("http://localhost:3000/api/todo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { result } = await res.json()
        console.log(result);
        setAllTodos(result)

    } 
    useEffect(() => {
        getTodos()
    }, [])
    const deleteTodos = async () => {
        const res = await fetch("http://localhost:3000/api/todo", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { result } = await res.json()
        console.log(result);
        setAllTodos(result)

    }
    useEffect(() => {
        deleteTodos()
    }, [])
    return <>
        {
            allTodos.map(item => <div className='flex gap-2'>
                <h1>{item.task}</h1>
                <button onClick={deleteTodos}>delete</button>
            </div>)
        }
    </>
}

export default TodoTable