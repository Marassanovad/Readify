import { useTranslation } from "react-i18next";
import { Book } from "../types/booksType";
import FavoriteStar from "./FavoriteStar.tsx";

type BookCardProps = {
    book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
    const { t } = useTranslation();

    const {
        title,
        authors,
        description,
        imageLinks,
        publishedDate,
        infoLink,
        pageCount,
    } = book.volumeInfo;

    return (
        <div className="w-64 h-96 perspective">
            <div className="flip-card text-white">
                <div className="flip-card-front bg-zinc-800 shadow">
                    <img
                        src={imageLinks?.thumbnail || imageLinks?.smallThumbnail || ""}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flip-card-back bg-zinc-800 p-4 text-sm shadow overflow-y-auto">
                    <FavoriteStar book={book} />
                    <h2 className="font-semibold mb-1">{title}</h2>
                    <p>
                        <strong>{t('books.author')}:</strong> {authors?.join(', ') || t('books.unknown')}
                    </p>
                    <p>
                        <strong>{t('books.published')}:</strong> {publishedDate || t('books.unknown')}
                    </p>
                    <p>
                        <strong>{t('books.pages')}:</strong> {pageCount || t('books.unknown')}
                    </p>
                    <p className="mt-2 line-clamp-4">
                        {description || t('books.no_description')}
                    </p>
                    <a
                        href={infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline block mt-2"
                    >
                        {t('books.more')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
