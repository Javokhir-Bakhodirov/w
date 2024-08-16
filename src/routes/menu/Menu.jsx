// src/components/menu/Menu.js

import React, { useState } from "react";
import useFetch from "../../hook/useFetch";
import useSearch from "../../hook/useSearch";
import useSort from "../../hook/useSort";
import Card from "../../components/card/Card";

const Menu = () => {
	const [query, setQuery] = useState("");
	const [sortOption, setSortOption] = useState("");

	const baseEndpoint = "/recipes";

	const searchUrl = useSearch(baseEndpoint, query);
	const sortedUrl = useSort(searchUrl, sortOption);

	const { data: foods } = useFetch(sortedUrl);

	const handleSearch = (e) => {
		setQuery(e.target.value);
	};

	const handleSortChange = (e) => {
		setSortOption(e.target.value);
	};

	return (
		<section className="menu-section pt-[80px]">
			<div className="container mx-auto">
				<div className="menu">
					<h1 className="menu__title text-center mb-[35px]">Menu</h1>

					<div className="mb-6 text-center">
						<input
							type="text"
							placeholder="Search for a dish..."
							value={query}
							onChange={handleSearch}
							className="w-full md:w-1/2 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-6 text-center">
						<select
							value={sortOption}
							onChange={handleSortChange}
							className="w-full md:w-1/4 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="">Sort By</option>
							<option value="cuisine">Cuisine</option>
							<option value="rating">Rating</option>
							<option value="difficulty">Difficulty</option>
						</select>
					</div>

					<ul className="menu__list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{foods.map((food) => (
							<Card key={food.id} food={food} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Menu;
