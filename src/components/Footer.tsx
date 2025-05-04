import {FaGithub, FaTelegram, FaLinkedin, FaEnvelope} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const Footer= () => {
    const { t } = useTranslation();

    return (
        <footer
            className="bg-gray-900 text-white px-6 py-4 flex flex-col justify-between items-center gap-4"
            style={{backgroundColor: '#373737'}}
        >
            <div className="flex gap-4 text-xl">
                <a
                    href="https://github.com/Marassanovad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-300 transition"
                >
                    <FaGithub/>
                </a>
                <a
                    href="https://t.me/marassanovad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-300 transition"
                >
                    <FaTelegram/>
                </a>
                <a
                    href="https://www.linkedin.com/in/darya-marassanova-058a02331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-300 transition"
                >
                    <FaLinkedin/>
                </a>
                <a href="mailto:marassanovad@gmail.com" className="hover:text-red-300">
                    <FaEnvelope/>
                </a>
            </div>
            <p className="text-sm text-gray-400 text-center">
                {t('footer.rights')}
            </p>
        </footer>
    )
        ;
};

export default Footer;