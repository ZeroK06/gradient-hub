import React, { useId } from 'react'

interface GradientColorProps {
    color: string
}

const GradientColor: React.FC<GradientColorProps> = ({ color }) => {

    const randomId = useId()

    return (
        <div key={randomId + color} className='flex items-center gap-1'>
            <div className='w-4 h-3 rounded-full' style={{ backgroundColor: color }}></div>
            <p className='text-xs'>
                {color}
            </p>
        </div>
    )
}

export default GradientColor