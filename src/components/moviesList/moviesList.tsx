
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import type {IMovieShortModel} from "../../models/IMovieModels";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import Pagination from "../pagination/Pagination";
import GenresList from "../genresList/GenresList";
import './moviesList.css'


const MoviesList = () => {
    const [searchParams] = useSearchParams();
    const initialGenreId = searchParams.get('genre') ? Number(searchParams.get('genre')) : null;

    const [movies, setMovies] = useState <IMovieShortModel[]>([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedGenreId, setSelectedGenreId] = useState <number | null>(initialGenreId);

    useEffect(() => {
        movieService.getMovies(page, selectedGenreId)
            .then(({data}) => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
            })

    }, [page, selectedGenreId]);

    const handleGenreSelect = (genreId: number | null) => {
        setSelectedGenreId(genreId);
        setPage(1);
    };
    return (
        <>
            {<GenresList onSelect={handleGenreSelect}/>}
            <ul className={'moviesList'}>{movies.map((movie) => (<MoviesListCard movie={movie} key={movie.id}/>))}</ul>
            {<Pagination currentPage={page} totalPages={Math.min(totalPages, 500)} onPageChange={setPage}/>}
        </>
    );
};
export default MoviesList;
