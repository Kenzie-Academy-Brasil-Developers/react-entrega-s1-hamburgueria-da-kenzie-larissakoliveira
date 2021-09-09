import './style.css'
const Product = ({handleClick, item}) => {
    return(
       
        <div className='product'>
           <h3>{item.name}</h3>
           <p>Categoria: {item.category}</p>
           <p><span>Preço: R$</span>{item.price}</p>
           <button onClick={()=>handleClick(item.id)}>Adicionar</button>
        </div>
      
    )
}

export default Product