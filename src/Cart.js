import React from 'react'

class CartItem extends React.Component {
	render() {
		return(
			<div className='cart-item'>
	          <div className='left-block'>
	            <img style={styles.image} alt=''/>
	          </div>
	          <div className='right-block'>
	           <div>Phone</div>
	           <div>Rs.99</div>
	           <div>Qty</div>
	           <div className='cart-item-actions'>
	              {/*Buttons*/}

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