
import {Link} from "react-router-dom";
import type {FC} from "react";
import type {IMovieShortModel} from "../../models/IMovieModels";
import PosterPreview from "../posterPreview/PosterPreview";
import './MoviesListCard.css'

interface MoviesListCardProps {
    movie: IMovieShortModel
}

const MoviesListCard:FC<MoviesListCardProps> = ({movie}) => {

    return (
        <>
            <li className={'item'}><Link to={'/movie/' + movie.id}>
                <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                <p className={'movie-title'}>{movie.title}</p>
                <p>{movie.release_date}</p>
            </Link>
            </li>
        </>
    );
};
export default MoviesListCard;
