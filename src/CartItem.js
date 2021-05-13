import React from 'react'


class CartItem extends React.Component {
    


	render() {
		console.log(this.props)
		const{id, price, title, qty, img } = this.props.products;
		
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
	                onClick={ this.props.handleIncreaseQty }
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