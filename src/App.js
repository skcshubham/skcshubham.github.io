import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<React.Fragment>
			<div className="app">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/education" component={Education} />
				</Switch>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
