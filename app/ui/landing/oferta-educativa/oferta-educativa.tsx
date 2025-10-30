"use client";

import {
  GraduationCap,
  Clock,
  Users,
  Award,
  BookOpen,
  // CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Variants } from "framer-motion";
import { useGetOfertaQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import Image from "next/image";
import FormConversion from "../form-conversion";
// Custom hook for animation on scroll
const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = true; // Always visible for simplicity in this example

  return { ref, isVisible };
};

export default function EducationalOfferingsSection() {
  const { ref, isVisible } = useInView();
  const { data: ofertas } = useGetOfertaQuery();
  // const oferta = [
  //   {
  //     tipo: "Diplomados",
  //     items: [
  //       {
  //         id: 1,
  //         title: "Diplomado en Curación de Heridas, Pie Diabético",
  //         description:
  //           "Manejo avanzado en el tratamiento de heridas crónicas y pie diabético.",
  //         duration: "6 meses",
  //         featured: true,
  //         icon: Star,
  //       },
  //       {
  //         id: 2,
  //         title: "Diplomado en Nutrición y Suplementación en la Salud Hormonal",
  //         description:
  //           "Especialízate en el equilibrio hormonal a través de la nutrición funcional.",
  //         duration: "6 meses",
  //         featured: false,
  //         icon: Star,
  //       },
  //       {
  //         id: 3,
  //         title:
  //           "Diplomado en Rehabilitación de la Articulación Temporomandibular",
  //         description:
  //           "Técnicas de rehabilitación para trastornos de la articulación temporomandibular.",
  //         duration: "6 meses",
  //         featured: false,
  //         icon: Star,
  //       },
  //       {
  //         id: 4,
  //         title: "Diplomado en Síndrome de Down y Problemas de Aprendizaje",
  //         description:
  //           "Atención integral para niños con Síndrome de Down y dificultades escolares.",
  //         duration: "6 meses",
  //         featured: false,
  //         icon: Star,
  //       },
  //       {
  //         id: 5,
  //         title: "Diplomado en Urgencias Médicas",
  //         description:
  //           "Capacitación intensiva en la atención prehospitalaria y emergencias clínicas.",
  //         duration: "6 meses",
  //         featured: true,
  //         icon: Star,
  //       },
  //       {
  //         id: 6,
  //         title: "Diplomado en Derecho Animal",
  //         description:
  //           "Estudio legal y ético sobre la protección y el bienestar de los animales en distintos contextos.",
  //         duration: "6 meses",
  //         featured: true,
  //         icon: Star,
  //       },
  //       {
  //         id: 7,
  //         title: "Diplomado en Protección legal para el ejercicio médico",
  //         description:
  //           "Formación especializada en responsabilidad jurídica, derechos del paciente y defensa profesional en el ámbito médico.",
  //         duration: "6 meses",
  //         featured: true,
  //         icon: Star,
  //       },
  //     ],
  //   },
  // {
  //   tipo: "Maestrías",
  //   items: [
  //     {
  //       id: 101,
  //       title: "Administración de Instituciones y Servicios de Salud",
  //       description:
  //         "Formación directiva en el manejo estratégico del sistema de salud.",
  //       duration: "2 años",
  //       featured: true,
  //       icon: Star,
  //     },
  //     {
  //       id: 102,
  //       title: "Estrategias Didácticas y Evaluación por Competencias",
  //       description:
  //         "Domina las metodologías modernas de enseñanza y evaluación.",
  //       duration: "2 años",
  //       featured: false,
  //       icon: Star,
  //     },
  //     {
  //       id: 103,
  //       title: "Educación",
  //       description:
  //         "Desarrolla capacidades para el diseño y gestión de procesos educativos.",
  //       duration: "2 años",
  //       featured: false,
  //       icon: Star,
  //     },
  //     {
  //       id: 104,
  //       title: "Administración y Legislación Empresarial",
  //       description:
  //         "Lidera empresas con conocimiento legal y administrativo.",
  //       duration: "2 años",
  //       featured: false,
  //       icon: Star,
  //     },
  //     {
  //       id: 105,
  //       title: "Evaluación de Estadísticas en Salud Pública",
  //       description:
  //         "Aplica herramientas estadísticas para mejorar políticas sanitarias.",
  //       duration: "2 años",
  //       featured: false,
  //       icon: Star,
  //     },
  //     {
  //       id: 106,
  //       title: "Docencia en Enfermería",
  //       description:
  //         "Forma a los futuros profesionales de enfermería desde la práctica educativa.",
  //       duration: "2 años",
  //       featured: true,
  //       icon: Star,
  //     },
  //   ],
  // },
  // {
  //   tipo: "Doctorado",
  //   items: [
  //     {
  //       id: 201,
  //       title: "Dirección y Gestión de Instituciones y Servicios de Salud",
  //       description:
  //         "Programa doctoral para líderes en políticas y administración sanitaria.",
  //       duration: "2 años y 6 meses",
  //       featured: true,
  //       icon: Star,
  //     },
  //   ],
  // },
  // ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-[110px] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#121b6a] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a20519] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#121829] text-sm font-semibold px-4 py-2 rounded-full mb-6 border-l-4 border-[#121b6a] shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookOpen className="w-4 h-4 mr-2 text-[#121b6a]" />
            Formación Especializada
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121829] mb-6 leading-tight tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oferta
            <span className="block text-[#a20519]">Educativa</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Diplomados en línea diseñados para transformar tu carrera
            profesional en el área de la salud con metodologías innovadoras y
            contenido de vanguardia.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#121b6a] to-[#a20519] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        {/* Diplomados Grid */}
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ofertas?.map((programa) => (
              <motion.article
                key={programa.id}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden h-full flex flex-col"
              >
                {/* Imagen de portada */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {programa.imagen_url ? (
                    <Image
                      src={programa.imagen_url} // URL absoluta o /ruta-local
                      alt={programa.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      priority={false}
                    />
                  ) : (
                    // Fallback si no hay imagen
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B48] via-[#40143e] to-[#9B1C31]" />
                  )}
                  {/* Overlay sutil para legibilidad del título si lo quisieras arriba */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#121829] mb-3 leading-tight group-hover:text-[#a20519] transition-colors duration-300">
                    {programa.nombre}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base line-clamp-4 mb-6">
                    {programa.descripcion}
                  </p>

                  {/* Botón / CTA opcional */}
                  <div className="mt-auto">
                    {/* Reemplaza href según tu routing */}
                    <Link
                      href={`/programa/${programa.id}`}
                      className="inline-flex items-center gap-2 text-[#0D1B48] font-semibold hover:text-[#a20519] transition-colors"
                    >
                      Ver más
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Barra inferior animada */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-[#121b6a] to-[#a20519] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-gray-100 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#121829] text-center mb-12 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            ¿Por qué elegir nuestros diplomados?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {[
              {
                icon: GraduationCap,
                title: "Certificación Oficial",
                description: "RVOE ante SEP",
                color: "#121b6a",
              },
              {
                icon: Clock,
                title: "Flexibilidad Horaria",
                description:
                  "Estudia a tu ritmo con acceso a nuestros tutores académicos",
                color: "#a20519",
              },
              {
                icon: Users,
                title: "Expertos Docentes",
                description:
                  "Profesores especialistas con amplia experiencia clínica",
                color: "#121b6a",
              },
              {
                icon: Award,
                title: "Contenido Actualizado",
                description:
                  "Material didáctico basado en las últimas evidencias científicas",
                color: "#a20519",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}, ${
                      feature.color === "#121b6a" ? "#1a2580" : "#c01122"
                    })`,
                  }}
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-lg text-[#121829] mb-3 group-hover:text-[#a20519] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-700 text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          id="contacto"
        >
          <FormConversion />
        </motion.div>

        {/* Contact Information */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        > */}
        {/* <p className="text-gray-600 mb-6 text-lg">
            ¿Tienes dudas? Contáctanos
          </p> */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6"> */}
        {/* <motion.a
              href="https://wa.link/xcxh5p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(37, 211, 102, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="mr-3 group-hover:animate-bounce"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.974 7.974 0 0 0 8.003 0a7.998 7.998 0 0 0-6.703 12.184L0 16l3.891-1.277A7.974 7.974 0 0 0 8 16c4.411 0 8-3.589 8-8 0-2.122-.847-4.122-2.399-5.674zM8 14.5a6.47 6.47 0 0 1-3.272-.89l-.234-.138-2.305.756.756-2.305-.138-.234A6.47 6.47 0 0 1 1.5 8c0-3.584 2.916-6.5 6.5-6.5 1.736 0 3.368.675 4.6 1.899A6.468 6.468 0 0 1 14.5 8c0 3.584-2.916 6.5-6.5 6.5z" />
                <path d="M11.107 9.113c-.158-.079-.934-.462-1.078-.515-.144-.054-.249-.079-.354.08-.105.158-.406.515-.498.62-.092.105-.184.118-.342.04-.158-.079-.666-.245-1.27-.78-.469-.417-.785-.933-.877-1.09-.092-.158-.01-.243.069-.322.071-.07.158-.184.237-.276.08-.092.105-.158.158-.263.053-.105.026-.197-.013-.276-.04-.079-.354-.855-.485-1.168-.127-.305-.258-.263-.354-.263-.092 0-.197-.013-.303-.013-.105 0-.276.04-.42.197-.144.158-.552.54-.552 1.31 0 .77.566 1.513.644 1.616.079.105 1.115 1.702 2.703 2.385.378.163.672.26.902.332.379.12.725.103.998.063.305-.046.934-.38 1.066-.746.131-.366.131-.679.092-.746-.04-.066-.144-.105-.303-.184z" />
              </svg>
              Conecta con tu ejecutivo por WhatsApp
              <motion.div
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <CheckCircle className="w-5 h-5" />
              </motion.div>
            </motion.a> */}
        {/* </div> */}

        {/* Trust Indicators */}
        {/* <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
              Respuesta inmediata
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
              Asesoría personalizada
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
              Sin compromiso
            </div>
          </motion.div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}
