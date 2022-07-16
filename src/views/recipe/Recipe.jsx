import React, { useMemo } from "react";
import { useMatch } from "react-router-dom";
import { useRecipeContext } from "../../components/providers/RecipeProvider";
import "./recipe.scss";

const Recipe = () => {
	const match = useMatch("/recipes/:recipeId");
	const recipeContext = useRecipeContext();
	const recipe = useMemo(
		() => recipeContext.getRecipe(match?.params?.recipeId),
		[match?.params?.recipeId, recipeContext.getRecipe]
	);

	return (
		<div>
			<h1>{recipe.title}</h1>
			<div>written by: {recipe.authors.map((author) => author)}</div>
			<div>cooking time {recipe.cookingTimeMinutes}mins</div>
			<div>serves {recipe.servings} people</div>
			<br />
			<br />
			<div>
				<b>Ingredients:</b>
				{recipe.ingredients.map((ingredient) => (
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
				{recipe.steps.map((step) => (
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
				{recipe.notes}
			</div>
		</div>
	);
};

export default Recipe;
