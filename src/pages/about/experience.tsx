import { useTranslation } from "react-i18next";

export default function Experience() {
    const { t } = useTranslation();
    return (
        <div className="h-full min-h-24 overflow-x-hidden">
            <div data-aos="fade-right" className="hidden lg:flex items-center justify-center flex-col mt-5">
                <h1 className="text-lg font-bold text-light-first dark:text-dark-fifth">{t('about.ptbelanja')} | <span className="text-base text-gray-600 dark:text-gray-400 font-bold">2024 - {t('sekarang')}</span></h1>
                <h3 className="">{t('about.webdeveloper')}</h3>
            </div>

            <div data-aos="fade-right" className="lg:hidden flex items-end justify-center flex-col mt-5">
                <h1 className="text-lg font-bold text-light-first dark:text-dark-fifth">{t('about.ptbelanja')} | <span className="text-base text-gray-600 dark:text-gray-400 font-bold">2024 - {t('sekarang')}</span></h1>
                <h3 className="">{t('about.webdeveloper')}</h3>
            </div>

            <p data-aos="fade-left" className="text-sm font-normal mt-5 text-start lg:text-center">{t('about.textexperience')}</p>
        </div>
    )
}
