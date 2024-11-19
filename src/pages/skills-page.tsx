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

            <div className="grid lg:grid-cols-6 lg:w-[80%] px-10 lg:px-0 mx-auto mt-10 grid-cols-2 w-full gap-4" ref={constraintsRef}>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #E44D26" }}
                        whileTap={{ boxShadow: "0px 0px 15px #E44D26" }} className="border rounded-md border-[#E34F26] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#E34F26] hover:text-white group backdrop-blur-md">
                        <FaHtml5 className="text-xl text-[#E34F26] group-hover:text-white" />html
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #1572B6" }}
                        whileTap={{ boxShadow: "0px 0px 15px #1572B6" }} className="border rounded-md border-[#1572B6] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#1572B6] hover:text-white group backdrop-blur-md">
                        <FaCss3 className="text-xl text-[#1572B6] group-hover:text-white" />css
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #F7DF1E" }}
                        whileTap={{ boxShadow: "0px 0px 15px #F7DF1E" }} className="border rounded-md border-[#F7DF1E] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#F7DF1E] hover:text-white group backdrop-blur-md">
                        <RiJavascriptFill className="text-xl text-[#F7DF1E] group-hover:text-white" />javascript
                    </motion.div>


                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #3178C6" }}
                        whileTap={{ boxShadow: "0px 0px 15px #3178C6" }} className="border rounded-md border-[#3178C6] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#3178C6] hover:text-white group backdrop-blur-md">
                        <SiTypescript className="text-xl text-[#3178C6] group-hover:text-white" />typescript
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #777BB4" }}
                        whileTap={{ boxShadow: "0px 0px 15px #777BB4" }} className="border rounded-md border-[#777BB4] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#777BB4] hover:text-white group backdrop-blur-md">
                        <FaPhp className="text-xl text-[#777BB4] group-hover:text-white" />php
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #06B6D4" }}
                        whileTap={{ boxShadow: "0px 0px 15px #06B6D4" }} className="border rounded-md border-[#06B6D4] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#06B6D4] hover:text-white group backdrop-blur-md">
                        <BiLogoTailwindCss className="text-xl text-[#06B6D4] group-hover:text-white" />tailwind
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #7952B3" }}
                        whileTap={{ boxShadow: "0px 0px 15px #7952B3" }} className="border rounded-md border-[#7952B3] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#7952B3] hover:text-white group backdrop-blur-md">
                        <FaBootstrap className="text-xl text-[#7952B3] group-hover:text-white" />Bootstrap
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #61DAFB" }}
                        whileTap={{ boxShadow: "0px 0px 15px #61DAFB" }} className="border rounded-md border-[#61DAFB] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#61DAFB] hover:text-white group backdrop-blur-md">
                        <FaReact className="text-xl text-[#61DAFB] group-hover:text-white" />ReactJs
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #979797 " }}
                        whileTap={{ boxShadow: "0px 0px 15px #979797" }} className="border rounded-md border-[#979797] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#979797] hover:text-white group backdrop-blur-md">
                        <RiNextjsLine className="text-xl text-[#979797] group-hover:text-white" />Nextjs
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #FF2D20" }}
                        whileTap={{ boxShadow: "0px 0px 15px #FF2D20" }} className="border rounded-md border-[#FF2D20] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#FF2D20] hover:text-white group backdrop-blur-md">
                        <FaLaravel className="text-xl text-[#FF2D20] group-hover:text-white" />Laravel
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #4169E1" }}
                        whileTap={{ boxShadow: "0px 0px 15px #4169E1" }} className="border rounded-md border-[#4169E1] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#4169E1] hover:text-white group backdrop-blur-md">
                        <BiLogoPostgresql className="text-xl text-[#4169E1] group-hover:text-white" />Postgres
                    </motion.div>

                    <motion.div drag
                        dragConstraints={dragConstrain}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px #4479A1" }}
                        whileTap={{ boxShadow: "0px 0px 15px #4479A1" }} className="border rounded-md border-[#4479A1] px-3 py-1 inline-flex items-center justify-between uppercase gap-3 font-bold hover:bg-[#4479A1] hover:text-white group backdrop-blur-md">
                        <SiMysql className="text-xl text-[#4479A1] group-hover:text-white" />mysql
                    </motion.div>

                </div>
        </div>
    )
}
