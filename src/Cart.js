import React from 'react'
import CartItem from './CartItem'

const Cart =(props) => {
	
     // console.log('props', props);
    const { 
    	products, 
	    onIncreaseQty, 
	    onDecreaseQty,
	    onDeleteQty, 
    } = props;
    // console.log('functiontype',typeof onIncreaseQty);

  	
  	return(
  		<div className='cart'>
	        {products.map((product)=>{
	        	// console.log('id',product.id)
	        	return (
	        		<CartItem 
	        		   products={product}
	        		   onIncreaseQty = {onIncreaseQty} 
	        		   onDecreaseQty = {onDecreaseQty}
	        		   onDeleteQty =   {onDeleteQty}
	        		   key = { products.id }
	        		/>
	        		)
	        	
	        })}

        </div>

  		)
  
}


export default Cart;