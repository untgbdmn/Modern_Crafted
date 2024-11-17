import { useTranslation } from "react-i18next"
// import AOS from 'aos';
export default function Biography() {
    const { t } = useTranslation();
    return (
        <div className="h-full min-h-[153px] overflow-x-hidden">
            <div className="mt-6 flex flex-col gap-2">
                <p data-aos="fade-right" className="text-sm font-normal text-center"> {t('about.texttentangsaya')} </p>
                <p data-aos="fade-left" className="text-sm font-normal text-center"> {t('about.texttentangsaya2')} </p>
            </div>
        </div>
    )
}
