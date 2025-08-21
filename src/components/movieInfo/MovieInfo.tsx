
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import type {IMovieModels} from "../../models/IMovieModels";
import {movieService} from "../../services/movieService";
import StarsRating from "../StarsRating/StarsRating";
import GenreBadge from "../genreBadge/GenreBadge";
import MoviesTrailer from "../moviesTrailer/MoviesTrailer";
import './MovieInfo.css';

interface MovieInfoProps {
    id?: string;
}

const MovieInfo = ({id}: MovieInfoProps) => {
    const [movie, setMovie] = useState <IMovieModels | null>(null);
    const [error, setError] = useState <string | null>(null);
    const [loading, setLoading] = useState <boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            setLoading(false);
            setMovie(null);
            return;
        }
        setLoading(true);
        movieService.getMovieById(id)
            .then(({data}) => {
                setMovie(data);
                setError(null);
            })
            .catch(() => setError("Error loading movie info"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!movie) return null;

    const handleSelect = (genreId: number | null) => {
        navigate(`/?genre=${genreId}`);
    };

    return (
        <div className="blur">
            <div className="info-container">
                <h1>{movie.title}</h1>
                <p>{movie.status} • {movie.release_date} • {movie.runtime} min</p>
                <ul className="movie-genres">
                    {movie.genres?.map((genre) => (
                        <li key={genre.id}>
                            <GenreBadge name={genre.name} onClick={() => handleSelect(genre.id)} />
                        </li>
                    ))}
                </ul>
                <StarsRating rating={movie.vote_average} />
                {movie.tagline && <p className="movie-tagline">{movie.tagline}</p>}
                <h4>Overview</h4>
                <p className="movie-overview">{movie.overview}</p>
                {movie.homepage && (
                    <a
                        href={movie.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="official-site-button"
                    >
                        Visit Official Site
                    </a>
                )}
            </div>
            <MoviesTrailer movieId={id!} />
        </div>
    );
};

export default MovieInfo;
