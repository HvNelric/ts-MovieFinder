import React, { useState } from "react";
import "./App.scss";
import AllMovies from "./components/AllMovies/AllMovies";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import { SearchContext } from "./context/SearchContext/SearchContext";

function App() {

    const [search, setSearch] = useState('')

    return (
		<div className="mf-container">
			<SearchContext.Provider value={{search, setSearch}}>
				<Header />
				<h2>Les 10 meilleurs films</h2>
				<Slider />
				<h2>Tous les films</h2>
				<AllMovies />
			</SearchContext.Provider>
		</div>
	);
}

export default App;
