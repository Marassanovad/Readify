import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center p-6 mx-auto text-center text-white gap-4">
            <div className="gap-3 max-w-3xl">
                <h1 className="text-4xl font-bold mb-4 mt-6">{t('about.greeting')}</h1>

                <p className="text-lg mb-3">
                    {t('about.name', { name: 'Darya Marassanova', city: 'Almaty' })}
                </p>

                <p className="text-lg mb-3">
                    {t('about.passion', {
                        techStack: 'React, Vue.js, Python, Java, JavaScript, TypeScript',
                    })}
                </p>

                <p className="text-lg mb-6">
                    {t('about.experience')}
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">{t('about.contacts')}</h2>
                <div className="flex gap-6 justify-center text-2xl">
                    <a
                        href="https://github.com/Marassanovad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-400"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-400"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="mailto:marassanovad@gmail.com" className="hover:text-zinc-400">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">{t('about.skills')}</h2>
                <ul className="space-y-1 text-lg">
                    <li>Languages: JavaScript, Python, Java, C#</li>
                    <li>Frameworks: React, Vue.js</li>
                    <li>Tools: Git, MySQL, HTML/CSS, Tailwind, Bootstrap</li>
                    <li>OS: MacOS (basic knowledge of Linux)</li>
                    <li>Languages: Russian — native, English — B2</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
