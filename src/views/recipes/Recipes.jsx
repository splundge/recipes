import React from "react";
import { useRecipeContext } from "../../components/providers/RecipeProvider";
import "./recipes.scss";
import RecipeListItem from "./RecipeListItem";

const Recipes = () => {
	const recipeContext = useRecipeContext();
	return (
		<div>
			<h1>Recipes</h1>
			<div>
				{recipeContext.recipes.map((recipe) => (
					<RecipeListItem key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default Recipes;
