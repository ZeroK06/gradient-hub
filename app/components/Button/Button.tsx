import { cn } from '../../../lib/utils'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    variants?: 'glass' | 'normal'
}

const Button: React.FC<ButtonProps> = ({ children, className, variants = 'normal' }) => {
    return (
        <button className={cn('px-6 py-3 font-medium rounded-2xl text-sm hover:opacity-90 transition-opacity duration-500', className, {
            'bg-black/5 backdrop-blur-sm  text-black': variants === 'glass',
            'text-white bg-black': variants === 'normal',
        })}>{children}</button>
    )
}

export default Button