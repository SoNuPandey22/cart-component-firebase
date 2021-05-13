import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component {
	constructor(){
    	super();
    	this.state = {
    		products: 
    		[
	    		{
	    		 id:1,
	             price: 999,
	    		 title: 'phone',
	    		 qty: 1,
	    		 img: 'https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg'
	    	    },
	    	    {
	    	     id:2,
	             price: 1000,
	    		 title: 'mobile',
	    		 qty: 1,
	    		 img: 'https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg'
	    	    },
	    	    {
	    	     id:3,
	             price: 200,
	    		 title: 'laptop',
	    		 qty: 1,
	    		 img: 'https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg'
	    	    }

    		]
    	}

    }
    // fucntion to increae the quantity
    handleIncreaseQty = (product)=>{
       console.log('quantity badha de iski ')
    }
  render() {
  	const { products } = this.state;
  	return(
  		<div className='cart'>
	        {products.map((product)=>{
	        	return (
	        		<CartItem 
	        		    products={product} 
	        		    key={product.id} 
	        		    handleIncreaseQty = {this.handleIncreaseQty}
	        		/>
	        		)
	        	
	        })}

        </div>

  		)
  }
}


export default Cart;