"use client"
import React from 'react'

const error = (error: Error) => {
    return <>
        <h1>{error.message}</h1>
    </>

}

export default error