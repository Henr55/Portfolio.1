import React from 'react'
import PropTypes from 'prop-types';

import Cart from './Cart';
export default function Carts(props) {
	return (
		<>
			{props.data.map((elem) =>(
				<Cart 
					key={elem._id}
					id={elem._id}
					title={elem.title}
					color={elem.color}
					price={elem.price}
					url={elem.url}
					size={elem.size}
					quantity={elem.quantity}
					itemNO={elem.itemNO}
					/>
			))}
		</>
	)
}
Carts.propTypes = {
	data: PropTypes.array.isRequired,
}