import GenreSelector from "../components/GenreSelector.tsx";
import { useEffect, useState } from "react";
import { getBooksByCategory } from "../utils/api/googleBooksApi.ts";
import BooksList from "../components/BooksList.tsx";

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("Science");

    useEffect(() => {
        getBooksByCategory(selectedGenre).then(setBooks);
    }, [selectedGenre]);

    return (
        <div className="flex flex-col justify-center items-center p-4 gap-4">
            <GenreSelector selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
            <BooksList books={books} />
        </div>
    );
};

export default HomePage;


