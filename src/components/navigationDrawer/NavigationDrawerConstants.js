import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const drawerItems = [
	{
		label: "Home",
		path: "/",
		icon: <HomeIcon />,
	},
	{
		label: "Recipes",
		path: "/recipes",
		icon: <RestaurantIcon />,
	},
	{
		label: "About",
		path: "/about",
		icon: <InfoIcon />,
	},
];
