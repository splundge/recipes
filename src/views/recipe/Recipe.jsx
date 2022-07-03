import React from "react";
import data from "../../data.json";
import "./recipe.scss";

const Recipe = () => {
	const pancakes = data.recipes.find((recipe) => recipe.title === "Pancakes");

	return (
		<div>
			<h1>{pancakes.title}</h1>
			<div>written by: {pancakes.authors.map((author) => author)}</div>
			<div>cooking time {pancakes.cookingTimeMinutes}mins</div>
			<div>serves {pancakes.serves}</div>

			<br />
			<br />
			<div>
				<b>Ingredients:</b>
				{pancakes.ingredients.map((ingredient) => (
					<div>
						<div>{ingredient.ingredient}</div>
						<div>amount: {ingredient.amount}</div>
						<hr />
					</div>
				))}
			</div>

			<br />
			<br />
			<div>
				<b>Method:</b>
				{pancakes.steps.map((step) => (
					<div>
						<div>{step}</div>
						<hr />
					</div>
				))}
			</div>

			<br />
			<br />
			<div>
				<b>Notes:</b>
				{pancakes.notes}
			</div>
		</div>
	);
};

export default Recipe;
