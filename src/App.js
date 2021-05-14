import React from 'react'
// import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {
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
	    		 img: 'https://picsum.photos/200/300'
	    	    },
	    	    {
	    	     id:2,
	             price: 1000,
	    		 title: 'mobile',
	    		 qty: 1,
	    		 img: 'https://picsum.photos/200/300'
	    	    },
	    	    {
	    	     id:3,
	             price: 200,
	    		 title: 'laptop',
	    		 qty: 1,
	    		 img: 'https://picsum.photos/200/300'
	    	    }

    		]
    	}

    }
    // fucntion to increae the quantity
    handleIncreaseQty = (product)=>{
    	//get the list of products from this state
    	//find the index of the product in the list of product
    	//update the qty of the particular product
    	const { products } = this.state;
    	const index = products.indexOf(product);
    	// console.log(index)
    	products[index].qty += 1;
    	//call the setState after changing the value
    	this.setState({
    		products
    	})
    }
    // fucntion to increae the quantity
    handleDecreaseQty = (product)=>{
    	//get the list of products from this state
    	//find the index of the product in the list of product
    	//update the qty of the particular product
    	const { products } = this.state;
    	const index = products.indexOf(product);
    	// console.log(index)
    	if(products[index].qty === 0)
    		return;
    	products[index].qty -= 1;
    	//call the setState after changing the value
    	this.setState({
    		products
    	})
    }
    handleDeleteQty = (id)=>{
    	//get the list of products from this state
    	//find the index of the product in the list of product
    	//update the qty of the particular product
    	const { products } = this.state;
    	const items = products.filter((item) => item.id !== id);
    	
    	console.log(id)
    	
    	//call the setState after changing the value
    	this.setState({
    		//value and the variable name is same so we can sorthand
    		products: items
    	})
    }
    getCartCount = () =>{
    	const { products } = this.state;
    	var count = 0;
    	products.forEach((product)=>{
          count += product.qty;
    	})
    	return count;
    }
    getCartTotal = () => {
    	const { products } = this.state;
    	var price =0;
    	products.forEach( (product) =>{
    		price += product.price * product.qty;
    	})
    	return price;
    }

  render() {
  	 const { products } = this.state;
	  return (
	     <div>
	         <Navbar count= { this.getCartCount() }/>
	         <Cart 
	            products={products} 
    		    key={products.id} 
    		    onIncreaseQty = {this.handleIncreaseQty}
    		    onDecreaseQty = {this.handleDecreaseQty}
    		    onDeleteQty = { this.handleDeleteQty }
	         />
	         <div style={{fontSize: 20, padding: 10}}>
               Total: {this.getCartTotal()}
	         </div>

	     </div>
	    );
	}
}


export default App;