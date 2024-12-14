
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
import { RiContactsBook3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/hero.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="">
            {/* Hero Section */}
            <HeroHighlight containerClassName="h-[35rem]" className="">
                <div className="w-full min-w-[1250px] flex items-center justify-center">
                    <motion.h1
                        className="text-4xl font-bold text-center leading-relaxed">
                        {t('home.title')}
                        <Highlight className="text-black dark:text-white">
                            {t('home.subtitle')}
                        </Highlight>
                    </motion.h1>
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="text-xl font-bold mt-5 text-center">Untung Budiman</h1>
                    <div className="flex flex-row items-center justify-center gap-4 mt-4">
                        <Link to="/contact" className="py-1 px-3 inline-flex items-center justify-center gap-2 rounded-md bg-white/15 backdrop-blur-md font-semibold dark:hover:bg-white dark:hover:text-black transition-colors duration-200 hover:bg-black hover:text-white"><RiContactsBook3Line className="size-5" />{t('home.kontaksaya')}</Link>

                        <Link to="/about" className="py-1 px-3 inline-flex items-center justify-center gap-2 rounded-md backdrop-blur-md font-semibold bg-light-third dark:bg-dark-third text-white hover:bg-white/10 hover:text-black dark:hover:bg-white/20 dark:hover:text-white transition-colors duration-200">{t('home.aboutme')}</Link>
                    </div>
                </div>
            </HeroHighlight>
            {/* End Hero Section */}

            {/* About Section */}
            <div id="#about" className="py-20">
                <div className="grid grid-cols-3">
                    <div className="flex items-center justify-center">
                        <img src={HeroImage} alt="Image Hero" className="w-auto h-3/4" />
                    </div>
                    <div className="col-span-2 px-2 flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold text-light-third dark:text-dark-third">{t('home.tentangsaya')}</h1>
                        <div className="w-full mt-5">
                            <table className="w-full grid grid-cols-2">

                                <div className="flex flex-row gap-5 items-center">
                                    <p className="font-bold">{t('home.name')}</p>
                                    <p className="text-sm">Untung Budiman</p>
                                </div>
                                <div className="flex flex-row gap-5 items-center">
                                    <p className="font-bold">{t('home.nomor')}</p>
                                    <p className="text-sm">+62 851-8480-8340</p>
                                </div>
                                <div className="flex flex-row gap-5 items-center">
                                    <p className="font-bold">{t('home.email')}</p>
                                    <p className="text-sm">untungbudiman629@gmail.com</p>
                                </div>
                                <div className="flex flex-row gap-5 items-center">
                                    <p className="font-bold">{t('home.alamat')}</p>
                                    <p className="text-sm">Tirtorahayu, Galur, Kulon Progo, DI Yogyakarta</p>
                                </div>

                            </table>
                        </div>

                        <div className="mt-5">
                            {t('home.deskripsitentangsaya')}
                        </div>

                        <div className="flex flex-row-reverse items-center justify-end w-full mt-8">
                            <Link to="/about" className="flex flex-row-reverse items-center justify-end group w-fit py-2 pr-5 transition-transform duration-200">
                                <MdKeyboardDoubleArrowRight className="size-5 group-hover:translate-x-3 transition-transform duration-200" />
                                <span className="text-sm font-semibold group-hover:translate-x-3 transition-transform duration-200">{t('bacaselengkapnya')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Section */}

            {/* SKills Section */}
            <div className="py-20">
                da
            </div>
            {/* End SKills Section */}
        </div>
    )
}
