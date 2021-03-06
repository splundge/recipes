import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigationDrawerContext } from "../navigationDrawer/NavigationDrawer";
import SearchBar from "../searchBar/SearchBar";

const AppBar = () => {
	const navigationDrawerContext = useNavigationDrawerContext();

	const handleHamburgerClick = () => {
		navigationDrawerContext.open();
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<MuiAppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={handleHamburgerClick}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Mel's Recipes
						</Typography>
					</Toolbar>
				</MuiAppBar>
			</Box>
		</>
	);
};

export default AppBar;
