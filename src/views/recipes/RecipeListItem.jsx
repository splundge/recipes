import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./recipe-list-item.scss";

const RecipeListItem = ({ recipe }) => {
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		navigate(`/recipes/${recipe.id}`);
	}, [recipe]);

	return (
		<div className="recipe-list-item" onClick={handleClick}>
			<div className="recipe-list-item__title">{recipe.title}</div>
			<div className="recipe-list-item__authors">{recipe.authors}</div>
			<div className="recipe-list-item__cook-time">
				cook time: {recipe.cookingTimeMinutes}m
			</div>
			<div className="recipe-list-item__prep-time">
				prep time: {recipe.prepTimeMinutes}m
			</div>
		</div>
	);
};

export default RecipeListItem;
