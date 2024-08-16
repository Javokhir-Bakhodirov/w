import React from "react";
import { Link } from "react-router-dom";

const Card = ({ food }) => {
	return (
		<li className="menu__item p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
			<div className="menu__item-image mb-4">
				<img
					src={food.image}
					alt={food.name}
					className="w-full h-40 object-cover rounded-lg"
				/>
			</div>
			<div className="menu__item-content text-center">
				<h2 className="text-lg font-medium text-gray-900 mb-2 line-clamp-1">
					{food.name}
				</h2>
				<p className="text-xl font-semibold text-gray-700 mb-2">
					{food.reviewCount} $
				</p>
				<p className="text-lg text-yellow-500 mb-2">Rating: {food.rating}/5 </p>
				<p className="text-md text-gray-600 mb-2">Cuisine: {food.cuisine}</p>
				<p className="text-md text-gray-600 mb-4">
					Difficulty: {food.difficulty}
				</p>
				<Link
					to={`/recipes/${food.id}`}
					className="block px-6 py-2 bg-[#A6835E] text-white rounded-md hover:bg-brown-600 transition-colors duration-300"
				>
					Single Page
				</Link>
			</div>
		</li>
	);
};

export default Card;
