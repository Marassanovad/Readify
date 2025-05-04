import { useEffect, useState } from "react";
import { Book } from "../types/booksType";
import { useTranslation } from 'react-i18next';
import BooksList from "../components/BooksList"; // Импортируем компонент BooksList

const FavoritesPage = () => {
    const { t } = useTranslation();
    const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoriteBooks");
        if (storedFavorites) {
            setFavoriteBooks(JSON.parse(storedFavorites));
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center p-4 gap-4 text-white">
            <h1 className="text-3xl font-bold mb-2">{t('favorites.title')}</h1>
            <p className="mb-4">{t('favorites.description')}</p>

            {favoriteBooks.length === 0 ? (
                <p className="text-gray-500">{t('favorites.empty')}</p>
            ) : (
                <BooksList books={favoriteBooks} />
                )}
        </div>
    );
};

export default FavoritesPage;
