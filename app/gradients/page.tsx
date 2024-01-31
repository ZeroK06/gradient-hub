import React from 'react'
import { Navbar } from '../components/Navbar'
import gradients from '../../gradients.json'
import { Gradients } from '../components/Gradients'
const Page = () => {
    return (
        <div>
            <Navbar />
            <Gradients gradients={gradients} />
        </div>
    )
}

export default Page