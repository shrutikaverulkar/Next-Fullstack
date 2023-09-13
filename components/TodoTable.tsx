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
        try {
            const res = await fetch("http://localhost:3000/api/todo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const { result } = await res.json()
            console.warn(result);
            setAllTodos(result)

        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getTodos()
    }, [])
    const deleteTodos = async (id: string) => {
        const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { result } = await res.json()
        console.log(result);
        setAllTodos(result)

    }

    return <>
        {
            allTodos.map(item => <div className='flex gap-2' key={item._id}>
                <h1>{item.task}</h1>
                <button onClick={e => deleteTodos(item._id)}>delete</button>
            </div>)
        }
    </>
}

export default TodoTable