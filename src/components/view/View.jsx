import AppBar from "../appBar/AppBar";
import "./view.scss";

const View = ({ Component, componentProps = {} }) => {
	return (
		<div className="view">
			<AppBar />
			<div className="view__component">
				<Component {...componentProps} />
			</div>
		</div>
	);
};

export default View;
