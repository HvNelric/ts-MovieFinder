import React from 'react';

interface ModalProps {
    movie: {[key: string]: string | number}
    fnClose: () => void
}

const Modal: React.FC<ModalProps> = ({ movie, fnClose }) => {

    console.log('movie modal : ', movie)

    return (
        <div className='modal-overlay'>
            <div className="modal">
                <button className='btn btn-close' onClick={fnClose}></button>
                <div className="modal__left">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={(movie.title as string)} />
                </div>
                <div className="modal__right">
                    <h2>{movie.title}</h2>
                    <div className="model__right-desc">{movie.overview}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
