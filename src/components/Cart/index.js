const Cart = ({currentSale}) =>{
    return(
    <ul>
    {(currentSale.map((item, index)=>(<li key={index}>
        <h3>{item.name}</h3>
        <p>Categoria: {item.category}</p>
        <p><span>Preço: R$</span>{item.price}</p>
    </li>)))}              
    </ul>
    )
}

export default Cart