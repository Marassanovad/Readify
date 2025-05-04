import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BooksList from "../components/BooksList";
import { searchBooks } from "../utils/api/googleBooksApi.ts";

const SearchResultsPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('query') || "";

    useEffect(() => {
        const fetchBooks = async () => {
            if (query) {
                setLoading(true);
                setError(null);
                try {
                    const searchResults = await searchBooks(query);
                    setBooks(searchResults);
                } catch {
                    setError("An error occurred while fetching search results.");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchBooks();
    }, [query]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center p-4 gap-4 text-white">
            <h1 className="text-3xl font-bold mb-2">Search Results</h1>
            <p className="">Showing results for: "{query}"</p>
            <BooksList books={books} />
        </div>
    );
};

export default SearchResultsPage;
