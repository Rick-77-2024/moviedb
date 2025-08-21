
import {useEffect, useState} from "react";
import {movieService} from "../../services/movieService";
import type {IMovieShortModel} from "../../models/IMovieModels";
import MoviesListCard from "../moviesListCard/MoviesListCard";

const PopularMovieList = () => {
    const [movies, setMovies] = useState <IMovieShortModel[]>([]);
    const [error, setError] = useState <string | null>(null);

    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const {data} = await movieService.getPopularMovies();
                setMovies(data.results);
                setError(null);
            } catch (e) {
                setError("Error loading popular movies!!!");
            }
        };
        fetchPopular();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {movies.map(movie => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default PopularMovieList;
