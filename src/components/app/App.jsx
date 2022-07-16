import AppRouter from "../appRouter/AppRouter";
import RecipeProvider from "../providers/RecipeProvider";
import "./app.scss";

const App = () => {
	return (
		<div className="App">
			<RecipeProvider>
				<AppRouter />
			</RecipeProvider>
		</div>
	);
};

export default App;
