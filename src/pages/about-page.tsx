import { useState } from "react";
import { useTranslation } from "react-i18next"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Biography from "./about/biography";
import Education from "./about/education";
import Experience from "./about/experience";
import { Link } from "react-router-dom";

export default function AboutPage() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
    const data = [
        {
            title: t('about.tentangsaya'),
            subtitle: t('about.subtentangsaya'),
            content: (
                <Biography />
            )
        },
        {
            title: t('about.riwayatpendidikan'),
            subtitle: t('about.subtitleriwayatpendidikan'),
            content: (
                <Education />
            )
        },
        {
            title: t('about.pengalamankerja'),
            subtitle: t('about.subtitlepengalamankerja'),
            content: (
                <Experience />
            )
        },
    ];

    return (
        <div className="lg:p-10 p-5 overflow-y-visible">
            <Link to="/#about" >Klik</Link>
            <div data-aos="zoom-in-up" className="flex flex-col items-center lg:w-[60%] w-full mx-auto rounded-md py-2.5 bg-black/5 shadow-md dark:bg-white/10 dark:shadow-md dark:shadow-gray-300/5">
                <h1 className="text-lg font-bold text__gradient">{t('about.head')}</h1>
                <p className="text-sm font-normal text-center">{t('about.subhead')}</p>
            </div>

            <div data-aos="fade-down" className="my-4 divider__line w-1/3 mx-auto"></div>

            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-center">
                    {data.map((tab, index) => (
                        <button data-aos="fade-down"
                            key={index} className={`${activeTab === index ? 'tab__active' : 'tab__default'}`}
                            onClick={() => setActiveTab(index)}>
                            {tab.title}
                        </button>
                    ))}
                </div>
                {data[activeTab].content}
            </div>

            <div className="flex flex-col gap-y-10 lg:hidden">
                <Biography />
                <Education />
                <Experience />
            </div>

            <div className="lg:hidden flex flex-row gap-3 items-center justify-center lg:mt-8 mt-6">
                <div className="bg-black dark:bg-white p-1.5 flex items-center justify-center rounded-full"><FaGithub className="text-lg text-white dark:text-black" /></div>
                <div className="bg-gradient-to-br from-blue-600 to-sky-500 p-1.5 flex items-center justify-center rounded-full"><FaLinkedinIn className="text-lg text-white" /></div>
                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 p-1.5 flex items-center justify-center rounded-full"><FaInstagram className="text-lg text-white" /></div>
            </div>

            <div className="lg:flex hidden flex-row gap-3 items-center justify-center mt-8">
                <div data-aos="fade-up" className="bg-black dark:bg-white p-1.5 flex items-center justify-center rounded-full"><FaGithub className="text-lg text-white dark:text-black" /></div>
                <div data-aos="fade-up" className="bg-gradient-to-br from-blue-600 to-sky-500 p-1.5 flex items-center justify-center rounded-full"><FaLinkedinIn className="text-lg text-white" /></div>
                <div data-aos="fade-up" className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 p-1.5 flex items-center justify-center rounded-full"><FaInstagram className="text-lg text-white" /></div>
            </div>

        </div>
    )
}
