import Product from "../Product"

const MenuContainer = ({products, handleClick, filteredProducts,currentSale})=> {
    
    return(
        
            <>
             {filteredProducts.length > 0} ?
                <ul>
                    {(filteredProducts.map((item, index)=>(<li key={index}><Product handleClick={handleClick} item={item}/></li>)))}              
                </ul>
                :
                <ul>
                    {(products.map((item, index)=>(<li key={index}><Product handleClick={handleClick} item={item}/></li>)))}              
                </ul>
            </>
        
    )
}

export default MenuContainer