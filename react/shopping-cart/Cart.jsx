import React from 'react'
import { addDollor } from './Helpers'

export default function Cart(props) {
	return (
		<div className="watch-wrapper-detail">
			<div className="W-image">
				<img src={props.url} alt={props.title} />
			</div>
			<div className="W-info">
				<h1>{props.title}</h1>
				<p>item NO: {props.itemNO}</p>
				<p>Size: {props.size}</p>
				<p>Color: {props.color}</p>
				<p>QTY: {props.quantity}</p>
				<h4 >Remove | Edit</h4>
			</div>
			<div className="price">
				<p>{addDollor(props.price)}</p>
			</div>
			<div className="total">
				<p>{addDollor(props.price * props.quantity)}</p>
			</div>
		</div>
	)
}
