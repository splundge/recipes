import * as React from "react";
import { TextField } from "@mui/material";
import "./search-bar.scss";

const SearchBar = (props = {}) => {
	return <TextField placeholder="begin searching for a recipe" {...props} />;
};

export default SearchBar;
