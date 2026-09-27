"use client"

import { motion } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"

interface EducationItem {
  id: number
  institution: string
  degree: string
  date: string
  description: string
  skills: string[]
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "UIN Sulthan Thaha Saifuddin Jambi",
    degree: "S1 Sistem Informasi",
    date: "2023 - Present",
    description: "Aktif mengikuti berbagai lomba akademik maupun non-akademik tingkat kampus dan luar kampus.",
    skills: ["Information Systems", "Academic", "Competitions"],
  },
  {
    id: 2,
    institution: "MA PKP Al-Hidayah Provinsi Jambi",
    degree: "Jurusan IPA (Ilmu Pengetahuan Alam)",
    date: "2020 - 2023",
    description: "Awardee Pengurus Terbaik 2021. Aktif sebagai Anggota Ekstrakurikuler Ambalan Pramuka dan pengurus Organisasi Santri Al-Hidayah 2022-2023.",
    skills: ["Leadership", "Organization", "Scouts"],
  },
  {
    id: 3,
    institution: "MTs PKP Al-Hidayah Provinsi Jambi",
    degree: "Pendidikan Menengah Pertama",
    date: "2017 - 2020",
    description: "Menempuh pendidikan menengah pertama dengan pembekalan nilai-nilai keagamaan dan kedisiplinan sebagai santri.",
    skills: ["Discipline", "Religious Education"],
  },
]

function EducationCard({ edu, index }: { edu: EducationItem; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: index * 0.1 }} className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-500 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[2px] hover:bg-text-secondary/5 hover:shadow-lg border border-transparent hover:border-text-secondary/10">
      
      {/* Left Column: Date */}
      <div className="md:col-span-1 pt-1 md:pt-2">
        <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">{edu.date}</span>
      </div>

      {/* Right Column: Details */}
      <div className="md:col-span-3 flex flex-col">
        <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/item:text-text-primary transition-colors">{edu.degree}</h4>
        <h5 className="text-sm font-bold text-text-secondary tracking-wide uppercase mb-6">{edu.institution}</h5>

        <p className="text-base text-text-secondary font-medium leading-relaxed mb-6">{edu.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {edu.skills.map((skill, i) => (
            <span key={i} className="text-xs font-bold bg-background md:bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider group-hover/item:bg-background transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Academic Background</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Education</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative group/list flex flex-col">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
