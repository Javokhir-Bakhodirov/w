import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiAxios from "../../api/axios";

const SinglePage = () => {
	const { id } = useParams();
	const [food, setFood] = useState({});

	useEffect(() => {
		apiAxios.get(`/recipes/${id}`).then((response) => {
			setFood(response.data);
		});
	}, [id]);

	if (!food) {
		return <div className="pt-[85px]">Loading...</div>;
	}

	return (
		<div className="single-page pt-[80px] max-w-5xl mx-auto">
			<div className="flex flex-col md:flex-row md:space-x-8 bg-white shadow-lg p-6 rounded-lg">
				<div className="md:w-1/2 mb-6 md:mb-0">
					<img
						src={food.image}
						alt={food.name}
						className="w-full h-80 object-cover rounded-lg border"
					/>
				</div>
				<div className="md:w-1/2">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">{food.name}</h1>
					<p className="text-lg text-gray-700 mb-2">Rating: {food.rating}/5</p>
					<p className="text-lg text-gray-700 mb-2">Cuisine: {food.cuisine}</p>
					<p className="text-lg text-gray-700 mb-2">
						Difficulty: 1 {food.difficulty}
					</p>
					<p className="text-lg text-gray-700 mb-2">
						Calories: {food.caloriesPerServing} kcal
					</p>
					<p className="text-lg text-gray-700 mb-2">
						Servings: {food.servings}
					</p>
					<p className="text-lg text-gray-700 mb-4">
						Prep Time: {food.prepTimeMinutes} minutes | Cook Time:{" "}
						{food.cookTimeMinutes} minutes
					</p>
					<button className="bg-yellow-500 text-white text-lg py-2 px-4 rounded hover:bg-yellow-600 mb-4">
						Buy Now
					</button>
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						Ingredients:
					</h2>
					<ul className="list-disc list-inside mb-4">
						{food.ingredients?.map((ingredient, index) => (
							<li key={index} className="text-lg text-gray-700">
								{ingredient}
							</li>
						))}
					</ul>
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						Instructions:
					</h2>
					<ol className="list-decimal list-inside">
						{food.instructions?.map((instruction, index) => (
							<li key={index} className="text-lg text-gray-700 mb-2">
								{instruction}
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default SinglePage;
