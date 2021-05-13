import React from 'react'


class CartItem extends React.Component {
    constructor(){
    	super();
    	this.state = {
    		price: 999,
    		title: 'phone',
    		qty: 1,
    		img: 'https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg'
    	}

    }

    testing = () =>{
    	const promise = new Promise((resolve, reject)=>{
    		setTimeout(()=>{
    			resolve('done');
    		}, 6000)
    	})

    	promise.then(()=>{
    		this.setState({ qty: 100 })

    		console.log(this.state);
    	})
    }
    increaseQty = ()=> {
		this.setState((prevState)=>{
           return{
           	 qty : prevState.qty + 1           }
		}, ()=>{
			console.log(this.state);
		})
	}
	decreaseQty = ()=> {
		 // shalow merging
		// this.setState({
		// 	qty : this.state.qty+1,
		// })

	
	    this.setState((prevState)=>{
	    	if(prevState.qty === 0) {
	    		return;
	    	}
	    	return {
	    	 qty : prevState.qty-1,

	    	}
	    })
	}

	render() {
		const{ price, title, qty, img } = this.state;
		// console.log(img);
		
		return(
			<div className='cart-item'>
	          <div className='left-block'>
	            <img src= {img} style={styles.image} alt=''/>
	          </div>
	          <div className='right-block'>
	           <div>{title}</div>
	           <div>Rs.{ price }</div>
	           <div>Qty: { qty }</div>
	           <div className='cart-item-actions'>
	              {/*Buttons*/}
	              <img 
	                src='https://t4.ftcdn.net/jpg/00/70/16/29/240_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg' 
	                alt='' 
	                className='action-icons'
	                onClick={ this.increaseQty }
	              />
	              <img src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg'  
	                alt='' 
	                className='action-icons'
	                onClick={ this.decreaseQty }
	              />
	              <img 
	                src='https://as1.ftcdn.net/jpg/00/65/77/26/500_F_65772602_cPboY4Oamnswse6bN2r9ky4hXDQEVNix.jpg' 
	                alt='' 
	                className='action-icons'
	              />


	           </div>

	          </div>
			</div>
		);
	}
}

const styles = {
   image: {
   	height: 110,
   	width: 110,
   	borderRadius: 4,
   	backgroundColor: 'gray'
   }
}

export default CartItem;