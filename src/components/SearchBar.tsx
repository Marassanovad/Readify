import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const SearchBar = () => {
    const {t} = useTranslation();
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchClick = () => {
        if (query.trim()) {
            navigate(`/search?query=${query}`);
        }
    };

    return (
        <div className="flex items-center border text-white pl-4 rounded-xl">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('search.placeholder')}
            />
            <button
                onClick={handleSearchClick}
                className="text-gray-600"
            >
                <FaSearch size={20}/>
            </button>
        </div>
    );
};

export default SearchBar;
