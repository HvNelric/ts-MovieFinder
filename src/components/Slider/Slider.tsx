import React, { useEffect, useState } from "react";
import btnNext from "../../icons/slidernextarrow.svg";
import btnPrev from "../../icons/sliderpreviousarrow.svg";
import { getMovies } from "../../services/GetMovies/GetMovies";
import { apiKey } from "../../services/Key/Key";
import { Movies } from "../../Types/Types";

const Slider = () => {

	type Current = number;

	const [movies, setMovies] = useState<Movies[]>([]);
	const [current, setCurrent] = useState<Current>(0);

	const length: number = movies.length;

	const slideNext = (): void => {
		setCurrent(current === length - 3 ? 0 : current + 1);
	};

	const slidePrev = (): void => {
		setCurrent(current === 0 ? length - 3 : current - 1);
	};

	useEffect(() => {
		getMovies(
			`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`, setMovies);
    }, []);

	return (
		<div className="mf-slider">
			<div className="slider__item-container">
				{movies.map(
					({ id, poster_path, title, release_date }, index) => (
						<div
							className="slider__item-wrapper"
							key={id}
							style={{
								transform: `translateX(-${current * 100}%)`,
							}}
						>
							<div
								className={`slider__item ${
									current === index ? "active" : ""
								}`}
							>
								<div className="img-wrapper">
									<img
										src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
										alt={title}
									/>
								</div>
								<h3>{title}</h3>
								<div className="slider__movie-year mf-text">
									{release_date && release_date !== "" && release_date.split("-")[0]}
								</div>
							</div>
						</div>
					)
				)}
			</div>
			<div className="slider__btn slider__btn-prev" onClick={slidePrev}>
				<div className="slider__btn-wrapper">
					<img src={btnPrev} alt="slider précédent" />
				</div>
			</div>
			<div className="slider__btn slider__btn-next" onClick={slideNext}>
				<div className="slider__btn-wrapper">
					<img src={btnNext} alt="slider suivant" />
				</div>
			</div>
		</div>
	);
};

export default Slider;
