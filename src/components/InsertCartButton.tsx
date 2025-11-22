import carrinho from '../assets/carrinho.svg';

export function InsertCartButton() {
    return(
        <div className='bg-(--bg-blue)'>
            <img src={carrinho.src} alt="Carrinho" />
            <span>ADICIONAR AO CARRINHO</span>
        </div>
    )
}