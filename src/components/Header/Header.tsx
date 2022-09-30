import React, { useContext, useRef, useState } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import logoMF from "../../icons/logo.svg";
import svgSearch from "../../icons/searchicon.svg";
import './header.scss'

const Header = () => {

    const searchRef = useRef<HTMLInputElement>(null);
    const context = useContext(SearchContext)
    const {setSearch} = context

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchRef.current) {
			const queryWords = searchRef.current.value.replace(/ /g, "+");
			setSearch(queryWords);
		}
	};

	return (
		<header>
			<div className="header__wrapper">
				<div className="header__logo-wrapper">
					<img src={logoMF} alt="logo MovieFinder" />
				</div>
				<div className="header__search-wrapper">
					<form className="mf-form-group" onSubmit={handleSubmit}>
						<input
							ref={searchRef}
							type="text"
							placeholder="Rechercher un film"
						/>
						<button type="submit">
							<img src={svgSearch} alt="bouton rechercher" />
						</button>
					</form>
				</div>
			</div>
		</header>
	);
};

export default Header;
