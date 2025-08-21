
import {axiosInstance} from "./api.service";
import type {IBaseResponseModel} from "../models/IBaseResponseModel";
import type {IMovieModels} from "../models/IMovieModels";
import type {IBaseGenres} from "../models/IBaseGenres";
import type {IBaseVideo} from "../models/IVideo";

export const movieService = {
    getMovies: (page: number, genreId?: number | null): Promise<{ data: IBaseResponseModel }> =>
        axiosInstance.get(`/discover/movie`, {
            params: {
                with_genres: genreId,
                page,
            }
        }),

    getPopularMovies: (): Promise<{ data: IBaseResponseModel }> =>
        axiosInstance.get(`/movie/popular`),

    getMovieById: (id: string): Promise<{ data: IMovieModels }> =>
        axiosInstance.get(`/movie/${id}`),

    getMovieVideos: (id: string): Promise<{ data: IBaseVideo }> =>
        axiosInstance.get(`/movie/${id}/videos`),

    getGenres: (): Promise<{ data: IBaseGenres }> =>
        axiosInstance.get(`/genre/movie/list`),

    searchMovies: (query: string | null, page: number): Promise<{ data: IBaseResponseModel }> =>
        axiosInstance.get(`/search/movie`, {
            params: {query, page},
        }),
};
