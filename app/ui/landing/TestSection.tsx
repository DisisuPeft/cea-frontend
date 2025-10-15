"use client";

import type React from "react";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Award, ArrowRight, BookOpen } from "lucide-react";
import FormRequest from "./form-request";
import { Modal } from "@/app/components/common/Modal";

export default function DiplomadosSection() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const diplomados = [
    {
      id: 1,
      title: "Diplomado en Urgencias Médicas",
      description:
        "Formación especializada en atención de emergencias y cuidados críticos",
      image: "/assets/img-landing/Diplomado-en-urgencias-médicas.webp",
      duration: "6 meses",
      modality: "Virtual",
      // students: "150+",
      // startDate: "Marzo 2025",
      // category: "Medicina",
    },
    {
      id: 2,
      title: "Diplomado en Nutrición y suplementación en la salud hormonal",
      description:
        "Capacita a profesionales en el arte y la ciencia de comprender el sistema hormonal como un reflejo integral del cuerpo.",
      image:
        "/assets/img-landing/Diplomado-nutrición-y-suplementación-en-la-salud-hormonal.webp",
      duration: "6 meses",
      modality: "Virtual",
      // students: "120+",
      // startDate: "Abril 2025",
      // category: "Medicina",
    },
    {
      id: 3,
      title: "Diplomado en Síndrome de Down y Problemas de Aprendizaje",
      description:
        "Una mirada humana y especializada al síndrome de Down y a los retos del aprendizaje.",
      image:
        "/assets/img-landing/Diplomado-síndrome-de-down-y-problemas-de-aprendizaje.webp",
      duration: "6 meses",
      modality: "Virtual",
      // students: "80+",
      // startDate: "Mayo 2025",
      // category: "Medicina",
    },
    // {
    //   id: 4,
    //   title: "Diplomado en Pediatría",
    //   description: "Atención integral de la salud infantil y adolescente",
    //   image: "/placeholder.svg?height=300&width=400",
    //   duration: "6 meses",
    //   modality: "Virtual",
    //   students: "200+",
    //   startDate: "Junio 2025",
    //   category: "Medicina",
    // },
    // {
    //   id: 5,
    //   title: "Diplomado en Gestión Hospitalaria",
    //   description: "Administración y liderazgo en instituciones de salud",
    //   image: "/placeholder.svg?height=300&width=400",
    //   duration: "5 meses",
    //   modality: "Híbrido",
    //   students: "100+",
    //   startDate: "Julio 2025",
    //   category: "Gestión",
    // },
    // {
    //   id: 6,
    //   title: "Diplomado en Salud Pública",
    //   description: "Políticas de salud y epidemiología comunitaria",
    //   image: "/placeholder.svg?height=300&width=400",
    //   duration: "6 meses",
    //   modality: "Virtual",
    //   students: "180+",
    //   startDate: "Agosto 2025",
    //   category: "Salud Pública",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#121829] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#a20519] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a20519] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Formación Continua Especializada
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Diplomados
            <span className="block text-[#a20519]">Disponibles</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Amplía tus conocimientos con nuestros programas de especialización
            diseñados por expertos para profesionales que buscan la excelencia
            en su campo.
          </motion.p>
        </motion.div>

        {/* Diplomados Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {diplomados.map((diplomado) => (
            <motion.div
              key={diplomado.id}
              className="group"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={diplomado.image || "/placeholder.svg"}
                      alt={diplomado.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#a20519] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {/* {diplomado.category} */}
                      </span>
                    </div>

                    {/* Start Date Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#121829] px-3 py-1 rounded-full text-sm font-medium">
                        {/* {diplomado.startDate} */}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-xl text-[#121829] mb-3 group-hover:text-[#a20519] transition-colors duration-300">
                    {diplomado.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    {diplomado.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-[#a20519]" />
                      {diplomado.duration}
                    </div>
                    <div className="flex items-center text-gray-500">
                      {/* <Users className="w-4 h-4 mr-2 text-[#a20519]" /> */}
                      {/* {diplomado.students} */}
                    </div>
                    <div className="flex items-center text-gray-500 col-span-2">
                      <Award className="w-4 h-4 mr-2 text-[#a20519]" />
                      Modalidad {diplomado.modality}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/oferta-educativa"
                      className="inline-flex items-center justify-center w-full bg-[#a20519] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 group"
                      aria-label={`Ver más información sobre ${diplomado.title}`}
                    >
                      Ver Programa
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#a20519] to-red-700 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para impulsar tu carrera profesional?
            </h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Nuestros asesores académicos están listos para ayudarte a elegir
              el diplomado perfecto para tus objetivos profesionales.
            </p>
            <motion.button
              onClick={() => setShowModal(true)}
              // href="https://wa.link/4ljecz"
              className="w-full max-w-xs mx-auto bg-white text-[#a20519] px-6 py-3 rounded-full font-bold text-base sm:text-lg text-center hover:bg-gray-100 transition-all duration-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Solicitar más información sobre diplomados"
            >
              Solicita Más Información
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <FormRequest />
      </Modal>
    </section>
  );
}

/**
 * 
 * 
 * 
 *    // {
    //   id: 2,
    //   title: "Diplomado en medicina interna",
    //   image: "/img/medicina-interna.png",
    // },
    // {
    //   id: 3,
    //   title: "Diplomado en cardiología",
    //   image: "/img/cardiologia.png",
    // },
    // {
    //   id: 4,
    //   title: "Diplomado en pediatría",
    //   image: "/img/pediatria.png",
    // },
    // {
    //   id: 5,
    //   title: "Diplomado en ginecología",
    //   image: "/img/ginecologia.png",
    // },
    // {
    //   id: 6,
    //   title: "Diplomado en traumatología",
    //   image: "/img/traumatologia.png",
    // },
 */
