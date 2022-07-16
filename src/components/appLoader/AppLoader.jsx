import { CircularProgress } from "@mui/material";
import "./app-loader.scss";

const AppLoader = () => {
	return (
		<div className="app-loader">
			<CircularProgress size={60} />
		</div>
	);
};

export default AppLoader;
