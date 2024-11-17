import { useTranslation } from "react-i18next"

export default function Education() {
    const { t } = useTranslation();
    return (
        <div className="h-full min-h-24 overflow-x-hidden">
            <div data-aos="fade-left" className="hidden lg:flex items-center justify-center flex-col mt-5">
                <h1 className=" text-center lg:text-start text-lg font-bold text-light-first dark:text-dark-fifth">{t('about.smknegeri')}<span className="text-base text-gray-600 dark:text-gray-400 font-bold"> | 2021 - 2024</span></h1>
                <h3 className="text-center lg:text-start">{t('about.teknikjaringankomputer')}</h3>
            </div>

            <div data-aos="fade-left" className="flex lg:hidden items-start justify-center flex-col mt-5">
                <h1 className="text-start text-lg font-bold text-light-first dark:text-dark-fifth">{t('about.smknegeri')}<span className="text-base text-gray-600 dark:text-gray-400 font-bold"> | 2021 - 2024</span></h1>
                <h3 className="text-start">{t('about.teknikjaringankomputer')}</h3>
            </div>

            <p data-aos="fade-right" className="text-sm font-normal mt-5">{t('about.texteducation')}</p>
        </div>
    )
}
