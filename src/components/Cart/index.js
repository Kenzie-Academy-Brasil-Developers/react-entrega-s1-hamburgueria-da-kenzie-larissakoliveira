const Cart = (currentSale) =>{
    return(
    <ul>
    {(currentSale.map((item, index)=>(<li key={index}>
        <h3></h3>
    </li>)))}              
    </ul>
    )
}

export default Cart