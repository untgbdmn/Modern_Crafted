import { useTranslation } from "react-i18next"
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { motion } from 'framer-motion'
import { useRef } from "react";
import { RiJavascriptFill, RiNextjsLine } from "react-icons/ri";
import { SiMysql, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";

export default function SkillsPage() {
    const { t } = useTranslation();
    const constraintsRef = useRef(null);
    const dragConstrain = {
        top: -40,
        right: 40,
        bottom: 40,
        left: -40,
    };
    return (
        <div className="py-10">
            <div className="">
                <p className="text-center lg:px-20 px-5">{t('skill.desc')} </p>
            </div>

            <div className="px-5 lg:px-20">
                <div className="border">

                </div>
            </div>

        </div>
    )
}
