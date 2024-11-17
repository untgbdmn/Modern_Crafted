import { useTranslation } from "react-i18next"

export default function Home() {
const { t } = useTranslation();

  return (
    <div className="">
        <h1 className="">{t('home.title')}</h1>
    </div>
  )
}
