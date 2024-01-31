import { GradientProps } from '@/lib/types'
import GRADIENTS from '../../../gradients.json'
import { Wrapper } from '../Wrapper'
import GradientItem from './GradientItem'


interface GradientsProps {
    gradients: Array<GradientProps>
}


const Gradients: React.FC<GradientsProps> = ({ gradients }) => {
    return (
        <Wrapper className='px-4'>
            <div className='flex flex-wrap'>{gradients.map(item =>
                <GradientItem {...item} />
            )}</div>
        </Wrapper>
    )
}

export default Gradients