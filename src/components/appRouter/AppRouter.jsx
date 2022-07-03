import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../views/about/About";
import Home from "../../views/home/Home";
import Recipe from "../../views/recipe/Recipe";
import Recipes from "../../views/recipes/Recipes";
import NavigationDrawerContextProvider from "../navigationDrawer/NavigationDrawer";
import View from "../view/View";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavigationDrawerContextProvider>
				<Routes>
					<Route path="/" element={<View Component={Home} />} />
					<Route path="/about" element={<View Component={About} />} />
					<Route path="/recipes" element={<View Component={Recipes} />} />
					<Route
						path="/recipe/:recipeId"
						element={<View Component={Recipe} />}
					/>
				</Routes>
			</NavigationDrawerContextProvider>
		</BrowserRouter>
	);
};

export default AppRouter;
