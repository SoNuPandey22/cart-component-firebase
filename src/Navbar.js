import React from 'react'

const Navbar = (props) => {
   // console.log(props)
   const { count } = props;
		return(
			<div>
	          <div style={styles.nav} >
	           {/*cart icon*/}
	            <img style={styles.cartIcon} src='https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1620968021~hmac=b77e87579291ed82f0e9afeb0ee22b35' alt='cart-icon' /> 
	            <span style={styles.cartCount}>{count}</span>

	          </div>
			</div>
		);
}

const styles = {
   cartIcon: {
   	height: 32,
   	marginRight: 20,
   },
   nav: {
   	height: 80,
   	backgroundColor: 'skyblue',
   	display: 'flex',
   	justifyContent: 'flex-end',
   	alignItems: 'center'
   },
   cartIconContainer: {
   	position:'relative'
   },
   cartCount: {
   	backgroundColor: 'yellow',
   	borderRadius: '50%',
   	padding: '4px 8px',
   	position: 'absolute',
   	right: 0,
   	top: -2
   }

};

export default Navbar;