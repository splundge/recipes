import React, {
	createContext,
	memo,
	useCallback,
	useEffect,
	useState,
} from "react";
import data from "../../data.json";
import AppLoader from "../appLoader/AppLoader";

const RecipeContext = createContext(null);

export const useRecipeContext = () => {
	const context = React.useContext(RecipeContext);
	if (context === undefined) {
		throw new Error("useRecipeContext must be used within a RecipeProvider");
	}
	return context;
};

const RecipeProvider = ({ children }) => {
	const [isInitialized, setIsInitialized] = useState(false);
	const [recipes, setRecipes] = useState(false);

	const handleInitialize = useCallback(async () => {
		setIsInitialized(false);
		setRecipes(data.recipes);
		setIsInitialized(true);
	}, []);

	useEffect(() => {
		handleInitialize();
	}, [handleInitialize]);

	const handleGetRecipe = useCallback(
		(recipeId) => {
			recipeId = parseInt(recipeId, 10);
			return recipes.find((recipe) => recipe.id === recipeId);
		},
		[recipes]
	);

	return (
		<RecipeContext.Provider
			value={{
				isInitialized,
				getRecipe: handleGetRecipe,
				recipes,
			}}
		>
			{isInitialized ? children : <AppLoader />}
		</RecipeContext.Provider>
	);
};

export default memo(RecipeProvider);
