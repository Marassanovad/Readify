import { useTranslation } from 'react-i18next';
import { GENRES } from "../utils/constants";

type GenreSelectorProps = {
    selectedGenre: string;
    onSelectGenre: (genre: string) => void;
};

const GenreSelector = ({ selectedGenre, onSelectGenre }: GenreSelectorProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex gap-4 flex-wrap justify-center">
            {GENRES.map(({ code, translationKey }) => (
                <div
                    key={code}
                    onClick={() => onSelectGenre(code)}
                    className={`cursor-pointer text-xl font-medium px-3 py-1 rounded transition
                        ${
                        selectedGenre === code
                            ? 'bg-gray-300 text-black dark:bg-gray-600 dark:text-white'
                            : 'text-white hover:text-black'
                    }`}
                >
                    {t(translationKey)}
                </div>
            ))}
        </div>
    );
};

export default GenreSelector;
