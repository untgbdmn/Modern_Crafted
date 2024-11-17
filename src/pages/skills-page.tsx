import { useTranslation } from "react-i18next"
import { FaCss3, FaHtml5, FaPhp } from "react-icons/fa";
import { motion } from 'framer-motion'
import { useRef } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

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
        <div className="py-10 border border-red-500">
            <div className="">
                <p className="text-center px-20">{t('skill.desc')} </p>
            </div>

            <div className="flex flex-row-reverse gap-2 px-7 mt-8">

                <div className="grid grid-cols-5 w-2/3 gap-4" ref={constraintsRef}>

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

                </div>

                <div className="w-1/3">
                    <div className="h-full w-full border rounded-full">Rounded</div>
                </div>

            </div>
        </div>
    )
}
