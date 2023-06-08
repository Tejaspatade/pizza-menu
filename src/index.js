import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	return (
		<main className="menu">
			<h2>Our Menu</h2>

			{/* Conditional Rendering Using Ternary Operator */}
			{pizzas.length > 0 ? (
				<ul className="pizzas">
					{pizzas.map((pizza) => (
						<Pizza key={pizza.name} pizza={pizza} />
					))}
				</ul>
			) : (
				<p>
					We're still working on our menu. Please come back later :)
				</p>
			)}
		</main>
	);
}

function Pizza({ pizza }) {
	// if (pizza.soldOut) return null;

	return (
		<li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
			<img src={pizza.photoName} alt={pizza.name} />
			<div>
				<h3>{pizza.name}</h3>
				<p>{pizza.ingredients}</p>
				<span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openingHour = 12;
	const closingHour = 22;
	const isOpen = hour >= openingHour && hour <= closingHour;
	console.log(isOpen);
	return (
		<footer className="footer">
			{isOpen ? (
				<div className="order">
					<p>
						We're open till {closingHour}:00. Come Visit us or Order
						Online.
					</p>
					<button className="btn">Order Now</button>
				</div>
			) : (
				<p>
					We're happy to welcome you between {openingHour}:00-
					{closingHour}:00 :)
				</p>
			)}
		</footer>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	// React.StrictMode Is used in development to render our components twice to see if there are any errors
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
