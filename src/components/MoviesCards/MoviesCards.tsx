import React, { FunctionComponent, useState } from 'react'
import { Movies } from '../../Types/Types';
import Modal from '../Modal/Modal';

interface Props {
    cards: Movies[]
}

const MoviesCards: React.FC<Props> = ({cards}) => {

    const [modalMovie, setModalMovie] = useState({});
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleOpen = (id: number, title: string, poster_path: string, release_date: string, overview?: string, popularity?: number, vote_average?: number, vote_count?: number): void => {
        setModalOpen(true); 
        setModalMovie({
            id,
            title,
            poster_path,
            release_date,
            overview,
            vote_average,
            vote_count
        });
        document.body.style.overflow = "hidden";
    };

    const modalClose = (): void => {
        setModalOpen(false);
        document.body.style.overflow = "unset";
    }

    return (
		<>
			<div className="moviescards__container">
				{cards.map(({ id, title, poster_path, release_date, overview, popularity, vote_average, vote_count }: Movies) => (
					<div
						className="moviescards__wrapper"
						key={id}
                        onClick={() => handleOpen(id, title, poster_path, release_date, overview, popularity, vote_average, vote_count)}
					>
						<div className="img-wrapper">
							<img
								src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
								alt={title}
							/>
						</div>
						<h3>{title}</h3>
						<div className="slider__movie-year mf-text">
							{release_date &&
								release_date !== "" &&
								release_date.split("-")[0]}
                        </div>
					</div>
				))}
			</div>
			{modalOpen && <Modal movie={modalMovie} fnClose={modalClose} />}
		</>
	);
}

export default MoviesCards