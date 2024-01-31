import { GradientProps } from '@/lib/types'
import React, { useId } from 'react'
import GradientColor from './GradientColor'

const GradientItem: React.FC<GradientProps> = ({ colors, name }) => {


    return (
        <div className='w-[25%] min-w-[180px] p-3'>
            <div className='flex flex-col items-center gap-6 bg-white rounded-2xl p-3 shadow-[0_0_20px_20px_rgba(0,0,0,0.05)]'>
                <h3 className='font-medium font-poppins'>{name}</h3>
                <div>
                    <div className='aspect-square w-[150px] rounded-full' style={{ background: `linear-gradient( 45deg,${colors.join(', ')})` }}>
                    </div>
                </div>
                <div className='w-full flex justify-center gap-2 flex-wrap'>
                    {colors.map(color =>
                        <GradientColor key={color} color={color} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default GradientItem