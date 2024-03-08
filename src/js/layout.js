import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import rigoImage from "/src/img/star_background.jpeg";
import CharInfo from "./views/CharInfo";
import PlanetsInfo from "./views/PlanetsInfo";
import StarShipsInfo from "./views/StarShipsInfo";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container-fluid" style={{backgroundImage: `url(${rigoImage})`, backgroundSize: '100vh 100vw', backgroundPosition: "center", backgroundAttachment: 'fixed'}}>
			<BrowserRouter basename={basename} >
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="characters/:charid" element={<CharInfo/>}/>
						<Route path="planets/:planetid" element={<PlanetsInfo/>}/>
						<Route path="starships/:starShipid" element={<StarShipsInfo/>}/>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
