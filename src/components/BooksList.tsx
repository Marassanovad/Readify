import { useTranslation } from "react-i18next";
import { Book } from "../types/booksType";
import BooksCard from "./BooksCard";

type BooksListProps = {
    books: Book[];
};

const BooksList = ({ books }: BooksListProps) => {
    const { t } = useTranslation();

    if (!books.length) {
        return <p className="text-center text-gray-500">{t('books.no_results')}</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book) => (
                <BooksCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BooksList;
