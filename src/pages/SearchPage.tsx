
import {useSearchParams} from "react-router-dom";
import Search from "../components/search/Search";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
        <>
            <Search query={query}/>
        </>
    );
};
export default SearchPage;
