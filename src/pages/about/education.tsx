import { useTranslation } from "react-i18next"

export default function Education() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex items-center justify-center flex-col mt-5">
                <h1 className="text-lg font-bold text-light-first dark:text-dark-fifth">{t('about.smknegeri')} | <span className="text-base text-gray-600 dark:text-gray-400 font-bold">2021 - 2024</span></h1>
                <h3 className="">{t('about.teknikjaringankomputer')}</h3>
            </div>
            <p className="text-sm font-normal mt-5">{t('about.texteducation')}</p>
        </div>
    )
}
