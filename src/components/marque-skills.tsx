import Marquee from 'react-fast-marquee'
import { BiLogoTypescript } from 'react-icons/bi';
import { DiDart } from 'react-icons/di';
import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from 'react-icons/fa'

interface MarqueSkillsProps {
  direction?: string;
  delay?: number;
}

export default function MarqueSkills({ direction = "left", delay = 0 }: MarqueSkillsProps) {
  return (
    <Marquee pauseOnClick direction={direction} className="" delay={delay}>
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

      <div className="border border-[#E34F26] text-[#E34F26] hover:bg-[#E34F26] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaHtml5 className="size-5" /> NextJs
      </div>

      <div className="border border-[#E34F26] text-[#E34F26] hover:bg-[#E34F26] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaHtml5 className="size-5" /> HTML
      </div>

      <div className="border border-[#E34F26] text-[#E34F26] hover:bg-[#E34F26] hover:text-white transition-all duration-300 hover:-translate-y-3  rounded-md px-7 mx-4 py-2 font-semibold my-5 inline-flex items-center justify-center gap-3">
        <FaHtml5 className="size-5" /> HTML
      </div>
    </Marquee>
  )
}
