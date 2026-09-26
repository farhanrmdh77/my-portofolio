"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import FadeDown from "@/components/animations/FadeDown"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const galleryImages = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
]

export default function Gallery() {
  return (
    <section className="w-full py-16 md:py-24 bg-background relative overflow-hidden border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 w-full text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Highlights</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Moments & Activities</h3>
        </div>
      </FadeDown>

      <div className="w-full relative mx-auto max-w-[100vw] overflow-hidden pt-8 pb-16">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full h-full !pb-12"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="!w-[300px] md:!w-[500px] lg:!w-[600px] aspect-[4/3]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="block w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom Styles for Swiper Pagination */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet {
          background-color: var(--color-text-secondary);
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--color-thirdary);
          opacity: 1;
        }
      `}} />
    </section>
  )
}
