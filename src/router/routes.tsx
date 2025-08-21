
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage";
import MoviesDetailsPage from "../pages/MoviesDetailsPage";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter(
    [
        {
            path: '', element: <MainLayout/>, children: [
                {index: true, element: <MoviesPage/>},
                {path: 'movie/:id', element: <MoviesDetailsPage/>},
                {path: 'search', element: <SearchPage/>}
            ]
        }
    ],
    {
        basename: "/moviedb"
    }
)
