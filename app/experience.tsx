"use client"
import { useRef, useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"

interface ExperienceItem {
  id: number
  company: string
  role: string
  date: string
  description: string
  skills: string[]
  media?: string[]
  certificate?: string
}

const workExperiences: ExperienceItem[] = [
  {
    id: 1,
    company: "PetroChina International Jabung Ltd.",
    role: "IT & Communication Department",
    date: "Sep 1 - 30, 2026",
    description: "Turut berkontribusi dalam operasional dan pengembangan teknologi di departemen IT perusahaan.",
    skills: ["IT Operations", "Technology Development"],
    media: ["/images/petro_1.jpeg", 
            "/images/petro_2.jpeg", 
            "/images/petro_3.jpeg",
            "/images/AhaConvert_PetroChina 1.jpg",
            "/images/AhaConvert_PetroChina 2.jpg",
            "/images/AhaConvert_PetroChina 3.jpg",
            "/images/AhaConvert_PetroChina 4.jpg",
            "/images/AhaConvert_PetroChina 5.jpg",
            "/images/AhaConvert_PetroChina 6.jpg",
            "/images/AhaConvert_PetroChina 7.jpg",
            "/images/AhaConvert_PetroChina 8.jpg",
            "/images/AhaConvert_PetroChina 9.jpg",
    ],
    certificate: "#"
  },
  {
    id: 2,
    company: "BPK Perwakilan Provinsi Jambi",
    role: "Divisi SDM (Human Resource)",
    date: "Feb 3 - Jun 3, 2026",
    description: "Membantu optimalisasi pengelolaan sumber daya manusia dan tata kelola arsip digital.",
    skills: ["HR Management", "Digital Archiving"],
    media: ["/images/bpk_1.jpeg", "/images/bpk_2.jpeg", "/images/bpk_3.jpeg", "/images/bpk_4.jpeg", "/images/bpk_5.jpeg", "/images/bpk_6.jpeg", "/images/bpk_7.jpeg", "/images/BPK 8.jpeg", "/images/BPK 9.webp", "/images/BPK J1.jpeg", "/images/BPK J2.jpeg", "/images/BPK J3.jpeg", "/images/BPK J4.jpeg"],
    certificate: "#"
  },
  {
    id: 10,
    company: "TPQ Langgar At-Taubah",
    role: "Pengajar Al-Qur'an dan Azan",
    date: "2020 - Present",
    description: "Mengajar membaca Al-Qur'an dan praktik azan kepada anak-anak tingkat sekolah dasar (SD) hingga sekolah menengah pertama (SMP) setiap selesai waktu Maghrib.",
    skills: ["Teaching", "Religious Education", "Mentoring"],
    media: [
      "/images/Ngaji 1.jpeg",
      "/images/Ngaji 2.jpeg",
      "/images/Ngaji 3.jpg",
      "/images/Ngaji 4.jpg",
      "/images/Ngaji 5.jpg",
    ]
  },
]

const leadershipExperiences: ExperienceItem[] = [
  {
    id: 3,
    company: "Salvador Generation (Alumni PKP Al-Hidayah)",
    role: "Kepanitiaan Acara (Berbagai Peran)",
    date: "4 Consecutive Years",
    description: "Terlibat aktif selama 4 tahun berturut-turut dalam kepanitiaan acara bulan Ramadhan. Peran: Divisi Konsumsi (Tahun Ke-1), Ketua Pelaksana (Tahun Ke-2), Divisi Pubdok (Tahun Ke-3), dan Sekretaris (Tahun Ke-4).",
    skills: ["Leadership", "Event Management"],
    media: [
      "/images/ramadhan 1.jpg",
      "/images/ramadhan 2.jpg",
      "/images/ramadhan 3.jpg",
      "/images/ramadhan 4.jpg",
      "/images/ramadhan 5.jpg",
      "/images/ramadhan 6.jpg",
      "/images/ramadhan 7.jpg",
      "/images/ramadhan 8.jpg",
      "/images/ramadhan 9.jpg",
      "/images/ramadhan 10.jpg",
      "/images/ramadhan 11.jpg",
      "/images/ramadhan 12.jpg",
      "/images/ramadhan 13.jpg",
      "/images/ramadhan 14.jpeg",
      "/images/ramadhan 15.jpeg",
      "/images/ramadhan 16.jpeg",
      "/images/ramadhan 17.jpg",
      "/images/ramadhan 18.jpg"
    ],
    certificate: "/images/Sertifikat Panitia RBS.jpg"
  },
  {
    id: 4,
    company: "UMKM Setuju (Selaras Satu Tujuan)",
    role: "Anggota Aktif",
    date: "Present",
    description: "Anggota aktif asosiasi yang berfokus pada pengembangan dan pemberdayaan ekosistem bisnis lokal.",
    skills: ["Community Empowerment", "Local Business"],
    media: [
      "/images/UMKM 1.jpeg",
      "/images/UMKM 2.jpeg",
      "/images/UMKM 3.jpeg",
      "/images/UMKM 4.jpeg"
    ]
  },
  {
    id: 8,
    company: "PBAK UIN Sulthan Thaha Saifuddin Jambi",
    role: "Divisi Konsumsi",
    date: "Aug 2025",
    description: "Berpartisipasi dalam kepanitiaan acara pengenalan budaya akademik kampus.",
    skills: ["Event Management", "Teamwork"],
    media: [
      "/images/PBAK 1.jpeg",
      "/images/PBAK 2.jpeg",
      "/images/PBAK 3.jpeg",
      "/images/PBAK 4.jpeg",
      "/images/PBAK 5.jpg",
      "/images/PBAK 6.jpg",
      "/images/PBAK 7.jpg",
      "/images/PBAK 8.jpeg",
      "/images/PBAK 9.jpeg",
      "/images/PBAK 10.jpeg"
    ]
  },
]

const awardExperiences: ExperienceItem[] = [
  {
    id: 5,
    company: "Event DEMAND 7.0, Universitas Jambi",
    role: "Finalis / Juara Harapan 2 Nasional",
    date: "May 2026",
    description: "Lomba Poster Infografis: 'Transformasi Ekonomi Regional melalui Reaktualisasi Potensi Budaya Lokal Berbasis Inovasi Digital dan Industri Kreatif'.",
    skills: ["Design", "Infographic"],
    media: [
      "/images/Lomba 3.jpeg",
      "/images/Poster 1.jpeg"
    ],
    certificate: "/images/Sertifikat 2.png"
  },
  {
    id: 6,
    company: "KI-PTKIN & UIN Raden Fatah Palembang",
    role: "Juara Favorit 3 Nasional",
    date: "Jul 2025",
    description: "Lomba Poster Infografis KI-PTKIN se-Indonesia.",
    skills: ["Design", "Infographic"],
    media: [
      "/images/Lomba 1.jpg",
      "/images/Lomba 2.jpg"
    ],
    certificate: "/images/Sertifikat 3.png"
  },
  {
    id: 7,
    company: "UIN Sulthan Thaha Saifuddin Jambi",
    role: "Juara 3 Tingkat Universitas",
    date: "May 2025",
    description: "Lomba Cerdas Cermat (LCC) Sistem Informasi Festival 2025.",
    skills: ["Information Systems", "Competition"],
    media: [
      "/images/LCC 2.jpg",
      "/images/LCC 3.jpg"
    ],
    certificate: "/images/Sertifikat LCC.jpg"
  },
  {
    id: 9,
    company: "KST PTKI II, FST UIN Sulthan Thaha Saifuddin Jambi",
    role: "Partisipan - Lomba Poster Infografis",
    date: "April 24 - June 8, 2026",
    description: "Berpartisipasi dalam Lomba Poster Infografis Kompetisi Sains dan Teknologi (KST PTKI) II.",
    skills: ["Design", "Infographic"],
    media: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"],
    certificate: "/images/Sertifikat 1.jpg"
  },
]

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const [modalType, setModalType] = useState<"media" | "certificate" | null>(null)

  return (
    <>
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

          <div className="flex flex-wrap gap-2 mb-4">
            {exp.skills.map((skill, i) => (
              <span key={i} className="text-xs font-bold bg-background md:bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider group-hover/item:bg-background transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>

          {(exp.media && exp.media.length > 0 || exp.certificate) && (
            <div className="mt-2 flex flex-wrap gap-3">
              {exp.media && exp.media.length > 0 && (
                <button 
                  onClick={() => setModalType("media")}
                  className="inline-flex items-center gap-2 text-sm font-bold text-text-primary transition-colors border border-text-secondary/30 px-4 py-2 rounded-lg hover:bg-text-secondary/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  View Details
                </button>
              )}
              {exp.certificate && (
                <button 
                  onClick={() => setModalType("certificate")}
                  className="inline-flex items-center gap-2 text-sm font-bold text-text-primary transition-colors border border-text-secondary/30 px-4 py-2 rounded-lg hover:bg-text-secondary/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  View Certificate
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalType(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-5xl bg-background border border-text-secondary/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-center p-4 border-b border-text-secondary/10">
                <h3 className="font-bold text-text-primary">
                  {modalType === "certificate" ? "Certificate" : "Documentation"} - {exp.role}
                </h3>
                <button onClick={() => setModalType(null)} className="p-2 text-text-secondary hover:text-text-primary bg-text-secondary/5 rounded-full transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
              <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar">
                {modalType === "media" && exp.media && (
                  <div className="columns-1 md:columns-2 gap-4">
                    {exp.media.map((src, i) => (
                      <img key={i} src={src} alt={`Dokumentasi ${i + 1}`} className="w-full rounded-xl border border-text-secondary/10 mb-4 inline-block" />
                    ))}
                  </div>
                )}
                {modalType === "certificate" && exp.certificate && (
                  <div className="flex justify-center items-center">
                    {exp.certificate === "#" ? (
                      <div className="w-full aspect-[1.414/1] bg-text-secondary/10 rounded-xl flex items-center justify-center border-2 border-dashed border-text-secondary/30">
                        <span className="text-text-secondary font-bold tracking-widest uppercase">Certificate Upload Pending</span>
                      </div>
                    ) : (
                      <img src={exp.certificate} alt="Certificate" className="w-full max-w-4xl rounded-xl border border-text-secondary/10" />
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
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
