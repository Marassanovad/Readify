import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Book } from "../types/booksType.ts";

type FavoriteStarProps = {
    book: Book;
};

const FavoriteStar = ({ book }: FavoriteStarProps) => {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("favoriteBooks");
        if (stored) {
            const favorites: Book[] = JSON.parse(stored);
            setIsFavorited(favorites.some((fav) => fav.id === book.id));
        }
    }, [book.id]);

    const toggleFavorite = () => {
        const stored = localStorage.getItem("favoriteBooks");
        let favorites: Book[] = stored ? JSON.parse(stored) : [];

        if (isFavorited) {
            favorites = favorites.filter((fav) => fav.id !== book.id);
        } else {
            favorites.push(book);
        }

        localStorage.setItem("favoriteBooks", JSON.stringify(favorites));
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="flex justify-end pb-5">
            <FaHeart
                size={25}
                className={`cursor-pointer transition-colors duration-300 ${
                    isFavorited ? "text-white" : "text-transparent stroke-white stroke-20"
                }`}
                onClick={toggleFavorite}
            />
        </div>
    );
};

export default FavoriteStar;
