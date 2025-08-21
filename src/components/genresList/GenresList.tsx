
import {useEffect, useState, type FC} from "react";
// @ts-ignore
import React from 'react';
import {movieService} from "../../services/movieService";
import type {IGenres} from "../../models/IBaseGenres";
import GenreBadge from "../genreBadge/GenreBadge";
import './GenreList.css';

interface Props {
    onSelect: (genreId: number | null) => void;
}

const GenresList: FC<Props> = ({ onSelect }) => {
    const [genres, setGenres] = useState <IGenres[]>([]);
    const [loading, setLoading] = useState <boolean>(true);
    const [error, setError] = useState <string | null>(null);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                setLoading(true);
                const {data} = await movieService.getGenres();
                setGenres(data.genres);
                setError(null);
            } catch (e) {
                setError("Error loading genres");
            } finally {
                setLoading(false);
            }
        };
        fetchGenres();
    }, []);

    if (loading) {
        return <div>Loading genres...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

return (
    <ul className="genres-menu">
        <li>
            <GenreBadge name="All" isActive={false} onClick={() => onSelect(null)} />
        </li>
        {genres.map(genre => (
            <li key={genre.id}>
                <GenreBadge
                    name={genre.name}
                    onClick={() => onSelect(genre.id)}
                />
            </li>
        ))}
    </ul>
);
}

export default GenresList;

