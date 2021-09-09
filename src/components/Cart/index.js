import './styles.css'

const Cart = ({currentSale}) =>{
    return(
    <ul className='cartTotal'>
    {(currentSale.map((item, index)=>(<li className='eachProductCart' key={index}>
        <h3>{item.name}</h3>
        <p>Categoria: {item.category}</p>
        <p><span>Preço: R$</span>{item.price}</p>
    </li>)))}              
    </ul>
    )
}

export default Cart