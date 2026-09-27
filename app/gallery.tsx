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
  "/images/petro_1.jpeg",
  "/images/petro_2.jpeg",
  "/images/petro_3.jpeg",
  "/images/moment 1.jpg",
  "/images/moment 2.jpg",
  "/images/moment 3.jpg",
  "/images/moment 4.jpg",
  "/images/moment 5.jpeg",
  "/images/moment 6.jpg",
  "/images/moment 7.jpg",
  "/images/moment 8.jpg",
  "/images/moment 9.jpg",
  "/images/moment 10.jpg",
  "/images/Lomba 1.jpg",
  "/images/Lomba 2.jpg",
  "/images/Lomba 3.jpeg",
  "/images/LCC 2.jpg",
  "/images/LCC 3.jpg"
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
