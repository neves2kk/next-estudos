import seta from '../assets/cameinback.svg'

interface BackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}


export function BackButton({...props} : BackButtonProps) {
    return(
        <div className='flex items-center cursor-pointer'>
            <img src={seta.src} alt="Seta de Voltar" className="inline mr-2 h-auto w-6"/>
            <button className="text-(--text-dark) text-2xl cursor-pointer" {...props}>Voltar</button>
        </div>
    )
}