"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"

interface ExperienceItem {
  id: number
  company: string
  role: string
  date: string
  description: string
  skills: string[]
}

const workExperiences: ExperienceItem[] = [
  {
    id: 1,
    company: "PetroChina International Jabung Ltd.",
    role: "IT & Communication Department",
    date: "1 - 30 Sep 2026",
    description: "Turut berkontribusi dalam operasional dan pengembangan teknologi di departemen IT perusahaan.",
    skills: ["IT Operations", "Technology Development"],
  },
  {
    id: 2,
    company: "BPK Perwakilan Provinsi Jambi",
    role: "Divisi SDM (Human Resource)",
    date: "3 Feb - 3 Jun 2026",
    description: "Membantu optimalisasi pengelolaan sumber daya manusia dan tata kelola arsip digital.",
    skills: ["HR Management", "Digital Archiving"],
  },
]

const leadershipExperiences: ExperienceItem[] = [
  {
    id: 3,
    company: "Salvador Generation (Alumni Ponpes Al-Hidayah)",
    role: "Kepanitiaan Acara (Berbagai Peran)",
    date: "4 Tahun Berturut-turut",
    description: "Terlibat aktif selama 4 tahun berturut-turut dalam kepanitiaan acara bulan Ramadhan. Peran: Divisi Konsumsi (Tahun Ke-1), Ketua Pelaksana (Tahun Ke-2), Divisi Pubdok (Tahun Ke-3), dan Sekretaris (Tahun Ke-4).",
    skills: ["Leadership", "Event Management"],
  },
  {
    id: 4,
    company: "UMKM Setuju (Selaras Satu Tujuan)",
    role: "Anggota Aktif",
    date: "Present",
    description: "Anggota aktif asosiasi yang berfokus pada pengembangan dan pemberdayaan ekosistem bisnis lokal.",
    skills: ["Community Empowerment", "Local Business"],
  },
  {
    id: 8,
    company: "PBAK UIN Sulthan Thaha Saifuddin Jambi",
    role: "Divisi Konsumsi",
    date: "2025",
    description: "Berpartisipasi dalam kepanitiaan acara pengenalan budaya akademik kampus.",
    skills: ["Event Management", "Teamwork"],
  },
]

const awardExperiences: ExperienceItem[] = [
  {
    id: 5,
    company: "Event DEMAND 7.0, Universitas Jambi",
    role: "Finalis / Juara Harapan 2 Nasional",
    date: "Mei 2026",
    description: "Lomba Poster Infografis: 'Transformasi Ekonomi Regional melalui Reaktualisasi Potensi Budaya Lokal Berbasis Inovasi Digital dan Industri Kreatif'.",
    skills: ["Design", "Infographic"],
  },
  {
    id: 6,
    company: "KI-PTKIN & UIN Raden Fatah",
    role: "Juara Favorit 3",
    date: "Jul 2025",
    description: "Lomba Poster Infografis KI-PTKIN se-Indonesia.",
    skills: ["Design", "Infographic"],
  },
  {
    id: 7,
    company: "UIN Sulthan Thaha Saifuddin Jambi",
    role: "Juara 3 Tingkat Universitas",
    date: "Mei 2025",
    description: "Lomba Cerdas Cermat (LCC) Sistem Informasi Festival 2025.",
    skills: ["Information Systems", "Competition"],
  },
  {
    id: 9,
    company: "KST PTKI II, FST UIN Sulthan Thaha Saifuddin Jambi",
    role: "Partisipan - Lomba Poster Infografis",
    date: "24 April - 8 Juni 2026",
    description: "Berpartisipasi dalam Lomba Poster Infografis Kompetisi Sains dan Teknologi (KST PTKI) II.",
    skills: ["Design", "Infographic"],
  },
]

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: index * 0.1 }} className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-500 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[2px] hover:bg-text-secondary/5 hover:shadow-lg border border-transparent hover:border-text-secondary/10">
      
      {/* Left Column: Date */}
      <div className="md:col-span-1 pt-1 md:pt-2">
        <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">{exp.date}</span>
      </div>

      {/* Right Column: Details */}
      <div className="md:col-span-3 flex flex-col">
        <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/item:text-text-primary transition-colors">{exp.role}</h4>
        <h5 className="text-sm font-bold text-text-secondary tracking-wide uppercase mb-6">{exp.company}</h5>

        <p className="text-base text-text-secondary font-medium leading-relaxed mb-6">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill, i) => (
            <span key={i} className="text-xs font-bold bg-background md:bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider group-hover/item:bg-background transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll position of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Add a slight spring physics to the line growth for smoothness
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10" ref={containerRef}>
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Career Path</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Experience & Achievement</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* Work Experience */}
        <div>
          <FadeDown>
            <h4 className="text-3xl font-black text-text-primary mb-8 border-b border-text-secondary/10 pb-4">Work Experience</h4>
          </FadeDown>
          <div className="relative group/list flex flex-col">
            {workExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Leadership & Community */}
        <div>
          <FadeDown>
            <h4 className="text-3xl font-black text-text-primary mb-8 border-b border-text-secondary/10 pb-4">Leadership & Community</h4>
          </FadeDown>
          <div className="relative group/list flex flex-col">
            {leadershipExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Awards & Competitions */}
        <div>
          <FadeDown>
            <h4 className="text-3xl font-black text-text-primary mb-8 border-b border-text-secondary/10 pb-4">Awards & Competitions</h4>
          </FadeDown>
          <div className="relative group/list flex flex-col">
            {awardExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
