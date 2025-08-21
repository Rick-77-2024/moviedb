
import {type FC, useEffect, useState} from "react";
import {movieService} from "../../services/movieService";
import type {IMovieModels} from "../../models/IMovieModels";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import Pagination from "../pagination/Pagination";
import './search.css'

interface SearchProps {
    query?: string | null
}

const Search: FC<SearchProps> = ({query}) => {
    const [movies, setMovies] = useState <IMovieModels[]>([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

useEffect(() => {
    const fetchData = async () => {
        if (!query) {
            setMovies([]);
            setTotalPages(1);
            return;
        }
        try {
            const {data} = await movieService.searchMovies(query, page);
            setTotalPages(Math.min(data.total_pages, 500));
            // @ts-ignore
            setMovies(data.results);
        } catch {
            setMovies([]);
            setTotalPages(1);
        }
    };

    fetchData();
}, [query, page]);

    return (
        <div className={'search'}>
            <h1>Search results for {query}</h1>
            {!movies.length && <p>No results</p>}
            
            <ul className={'moviesList'}>
                {Array.isArray(movies) &&
                    movies
                    .filter((movie): movie is IMovieModels => !!movie && !!movie.id)
                    .map((movie) => <MoviesListCard movie={movie} key={movie.id} />)}
            </ul>
            {!!movies.length &&
                <Pagination currentPage={page} totalPages={Math.min(totalPages, 500)} onPageChange={setPage}/>}

        </div>
    );
};
export default Search;
