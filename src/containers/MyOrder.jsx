import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" onClick={() => toggleOrder()} />
				<p className="title" onClick={() => toggleOrder()}>
					My Order
				</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem indexValue={index} product={product} key={index} />
				))}

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<button className="primary-button">Checkout</button>
			</div>
		</aside>
	);
};

export default MyOrder;
