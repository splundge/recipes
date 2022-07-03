import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { drawerItems } from "./NavigationDrawerConstants";

const NavigationDrawerContext = React.createContext(null);

export const useNavigationDrawerContext = () => {
	const context = React.useContext(NavigationDrawerContext);
	if (context === undefined) {
		throw new Error(
			"useNavigationDrawerContext must be used within a NavigationDrawerContextProvider"
		);
	}
	return context;
};

const NavigationDrawerContextProvider = ({ children }) => {
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();

	const handleDrawerItemClick = (e, path) => {
		navigate(path);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const renderDrawer = () => {
		return (
			<MuiDrawer anchor="left" open={open} onClose={handleClose}>
				<Box
					sx={{ width: 250 }}
					role="presentation"
					onClick={handleClose}
					onKeyDown={handleClose}
				>
					<List>
						{drawerItems.map(({ label, path, icon }) => (
							<ListItem key={label} disablePadding>
								<ListItemButton onClick={(e) => handleDrawerItemClick(e, path)}>
									<ListItemIcon>{icon}</ListItemIcon>
									<ListItemText primary={label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</MuiDrawer>
		);
	};

	return (
		<NavigationDrawerContext.Provider
			value={{
				open: handleOpen,
				close: handleClose,
			}}
		>
			{renderDrawer()}
			{children}
		</NavigationDrawerContext.Provider>
	);
};

export default NavigationDrawerContextProvider;
