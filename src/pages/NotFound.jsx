import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
	return (
		<div className="not-found-container">
			<div className="not-found-info">
				<h1 className="not-found-title">404 Not Found</h1>
				<h2>This page is not found</h2>
				<form action="/" className="form">
					<button className="primary-button">Go Home</button>
				</form>
			</div>
		</div>
	);
};

export default NotFound;
