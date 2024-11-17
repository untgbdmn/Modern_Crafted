import { useTranslation } from "react-i18next"

export default function Biography() {
    const { t } = useTranslation();
    return (
        <div className="h-full min-h-40">
            <div className="mt-6">
                <p className="text-sm font-normal"> {t('about.texttentangsaya')} </p>
                <p className="text-sm font-normal"> {t('about.texttentangsaya2')} </p>
            </div>
        </div>
    )
}
