"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Contact from "@/shared/components/contact/Contact"

export function ContactSection2() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className="relative bg-[#0517C7] overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.18, 0.1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.12, 0.05],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-[10%] right-[20%] w-72 h-72 bg-white/4 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Spinning concentric rings */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/6 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/4 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                opacity: [0.15, 0.4, 0.15],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 container mx-auto px-6 py-16 md:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            {/* Badge - fade in + slide down */}
            <motion.div
              className="flex justify-center mb-8 mt-5"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {t('contactPage.badge')}
              </motion.span>
            </motion.div>

            {/* Main heading - staggered word reveal */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center mb-8 tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {t('contactPage.title1')}
              </motion.span>
              <motion.span
                className="block text-white/90"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {t('contactPage.title2')}
              </motion.span>
            </motion.h1>

            {/* Description - fade in */}
            <motion.p
              className="text-lg md:text-xl text-white/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >
              {t('contactPage.description')}
            </motion.p>

            {/* CTA Buttons - staggered entrance */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-[50px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center bg-white text-[#0517C7] px-8 py-4 text-lg font-semibold rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                whileHover={{ scale: 1.06, boxShadow: "0 0 60px rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-[#0517C7]/10 to-transparent"
                  animate={{ translateX: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                />
                <span className="relative z-10 flex items-center">
                  {t('contactPage.contactBtn')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </motion.button>

              <motion.button
                onClick={handleScrollToProjects}
                className="relative border-2 border-white/30 text-white px-8 py-4 text-lg font-medium rounded-full overflow-hidden backdrop-blur-sm"
                whileHover={{
                  scale: 1.06,
                  borderColor: "rgba(255,255,255,0.6)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 0 40px rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {t('contactPage.portfolioBtn')}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0517C7] to-transparent" />
      </section>

      <Contact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}