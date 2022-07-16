import React from "react";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Home</h1>
			<p>Welcome to my website!</p>
			<Link onClick={() => navigate("/recipes")}>View all recipes</Link>
		</div>
	);
};

export default Home;
