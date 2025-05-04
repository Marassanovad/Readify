import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div
            onClick={toggleLanguage}
            className="relative w-24 h-8 bg-transparent border-2 border-zinc-400 rounded-full cursor-pointer flex items-center p-1"
        >
            <div
                className={`w-12 h-6 bg-white rounded-full shadow-md transform transition-all duration-300
          ${currentLang === 'en' ? 'translate-x-0' : 'translate-x-9'}`}
            />
            <div className="absolute flex justify-between w-4/5 text-s font-semibold text-zinc-400 select-none">
                <span className="ml-2">EN</span>
                <span>RU</span>
            </div>
        </div>
    );
};

export default LanguageToggle;
