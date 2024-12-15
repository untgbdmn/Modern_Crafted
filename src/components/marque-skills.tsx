import Marquee from 'react-fast-marquee'
import { BiLogoFlutter, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { DiDart } from 'react-icons/di';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from 'react-icons/fa'
import { SiMariadb, SiMysql, SiNextdotjs } from 'react-icons/si';

interface MarqueSkillsProps {
    direction?: 'left' | 'right' | 'up' | 'down'; // Change here
    delay?: number;
  }

export default function MarqueSkills({ direction = "left", delay = 0 }: MarqueSkillsProps) {
  return (
    <Marquee pauseOnClick pauseOnHover direction={direction} className="" delay={delay}>
      <div className="border border-[#E34F26] text-[#E34F26] hover:bg-[#E34F26] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaHtml5 className="size-5" /> HTML
      </div>

      <div className="border border-[#1572B6] text-[#1572B6] hover:bg-[#1572B6] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaCss3Alt className="size-5" /> CSS
      </div>

      <div className="border border-[#F7DF1E] text-[#F7DF1E] hover:bg-[#F7DF1E] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaJs className="size-5" /> Javascript
      </div>

      <div className="border border-[#3178C6] text-[#3178C6] hover:bg-[#3178C6] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <BiLogoTypescript className="size-5" /> Typescript
      </div>

      <div className="border border-[#777BB4] text-[#777BB4] hover:bg-[#777BB4] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaPhp className="size-5" /> PHP
      </div>

      <div className="border border-[#0175C2] text-[#0175C2] hover:bg-[#0175C2] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <DiDart className="size-5" /> Dart
      </div>

      <div className="border border-[#FF2D20] text-[#FF2D20] hover:bg-[#FF2D20] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaLaravel className="size-5" /> Laravel
      </div>

      <div className="border border-[#61DAFB] text-[#61DAFB] hover:bg-[#61DAFB] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaReact className="size-5" /> ReactJs
      </div>

      <div className="border border-[#000000] dark:border-white text-[#000000] dark:text-white hover:bg-[#000000] dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <SiNextdotjs className="size-5" /> NextJs
      </div>

      <div className="border border-[#02569B] text-[#02569B] hover:bg-[#02569B] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <BiLogoFlutter className="size-5" /> Flutter
      </div>

      <div className="border border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <BiLogoPostgresql className="size-5" /> PostgreSQL
      </div>

      <div className="border border-[#003545] text-[#003545] hover:bg-[#003545] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <SiMariadb className="size-5" /> MariaDB
      </div>

      <div className="border border-[#4479A1] text-[#4479A1] hover:bg-[#4479A1] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <SiMysql className="size-5" /> MySQL
      </div>

      <div className="border border-[#7952B3] text-[#7952B3] hover:bg-[#7952B3] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaBootstrap className="size-5" /> Bootstrap
      </div>

      <div className="border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <BiLogoTailwindCss className="size-5" /> Tailwind
      </div>
    </Marquee>
  )
}
