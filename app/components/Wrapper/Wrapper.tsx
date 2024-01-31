import { cn } from '@/lib/utils'
import React from 'react'


interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
    return (
        <div className={cn('max-w-6xl w-full mx-auto', className)}>{children}</div>
    )
}

export default Wrapper