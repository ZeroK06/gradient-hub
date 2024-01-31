import React from 'react'
import { Wrapper } from '../Wrapper'
import { NAVBAR } from '@/app/constants/components'
import { Button } from '../Button'
import { Logo } from '../Logo'

const Navbar = () => {
    return (
        <Wrapper className='px-4'>
            <nav className='h-20 flex justify-between items-center'>
                <Logo />
                <ul>
                    {NAVBAR.map(item =>
                        <li key={item.name}>
                            <a href={item.href}> {item.name}</a>
                        </li>
                    )}
                </ul>
                <Button variants='glass'>Creator</Button>
            </nav>
        </Wrapper>
    )
}

export default Navbar