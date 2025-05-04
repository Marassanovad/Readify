import logo from "../utils/assets/logo.svg"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import LanguageToggle from "./LanguageToggle.tsx";
import SearchBar from "./SearchBar.tsx";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header flex justify-between w-screen items-center px-12 py-4"
                style={{backgroundColor: '#373737'}}>
            <img
                className="h-16 rounded-full bg-white p-1"
                src={logo}
                alt="logo"
            />
            <SearchBar />
            <div className="flex justify-end items-center w-1/2 gap-8 font-semibold">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        `text-xl transition ${
                            isActive ? 'text-white' : 'text-zinc-400'
                        }`
                    }
                >
                    {t('nav.main')}
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({isActive}) =>
                        `text-xl transition ${
                            isActive ? 'text-white' : 'text-zinc-400'
                        }`
                    }
                >
                    {t('nav.favorites')}
                </NavLink>
                <NavLink
                    to="/about"
                    className={({isActive}) =>
                        `text-xl transition ${
                            isActive ? 'text-white' : 'text-zinc-400'
                        }`
                    }
                >
                    {t('nav.about')}
                </NavLink>
                <LanguageToggle />
            </div>
        </header>

    );
};

export default Header;