import React from 'react'
import { Navbar } from '../Navbar'
import { Wrapper } from '../Wrapper'
import { Button } from '../Button'

const Hero = () => {
    return (
        <header className='min-h-[70dvh] bg-radial-gradient'>
            <Navbar />
            <Wrapper className='px-4'>
                <section className='flex gap-4 justify-center items-center flex-col min-h-[calc(70dvh-80px)]'>
                    <h1 className='text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500 text-center font-poppins uppercase'>Gradient-Hub</h1>
                    <p className='text-center text-sm md:text-lg text-black/80 max-w-4xl'>
                        Discover a universe of colors on GradientHub. Explore unique gradients, imagine new combinations and share them with a creative community. Unleash your creativity and let the colors speak for you!
                    </p>
                    <Button className='shadow-xl'>
                        All gradients
                    </Button>
                </section>
            </Wrapper>
        </header>
    )
}

export default Hero