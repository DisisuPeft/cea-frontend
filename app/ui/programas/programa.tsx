"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DiplomadoResponse } from "@/redux/interface/request/type";
import FormConversion from "../landing/form-conversion";
import Image from "next/image";

interface Props {
  diplomado: DiplomadoResponse;
}
export default function DiplomadoLanding({ diplomado }: Props) {
  // Accordion state for Temario
  const [openModule, setOpenModule] = useState<number | null>(null);

  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cuáles son los requisitos de ingreso?",
      answer:
        "Acta de nacimiento, INE, CURP, certificado de preparatoria, certificado de licenciatura, titulo o carta pasante y 2 fotografías tamaño diploma.",
    },
    {
      question: "¿El diplomado tiene validez oficial?",
      answer:
        "Respaldo Universitario por la Universidad UNSZA con clave de registro: 07MSU0242F. Podrá corroborarlo en la página oficial de la SEP:",
    },
    {
      question: "¿Cuál es la modalidad de estudio?",
      answer: `La modalidad en totalmente ${diplomado?.programa.modalidad.toLowerCase()}`,
    },
    {
      question: "¿Ofrecen facilidades de pago?",
      answer:
        "Sí, contamos con becas y descuentos especiales para que aproveches al máximo tu inversión en formación.",
    },
    {
      question: "¿Qué incluye la inversión?",
      answer:
        "Incluye material didáctico digital, acceso a nuestra plataforma virtual, prácticas supervisadas, acompañamiento académico y certificación oficial.",
    },
    // {
    //   question: "¿Cuándo inician las clases?",
    //   answer:
    //     "Tenemos convocatorias trimestrales. La próxima inicia en marzo 2025. Los cupos son limitados a 25 estudiantes por grupo para garantizar atención personalizada.",
    // },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0D1B48] via-[#1a2d5f] to-[#9B1C31] overflow-hidden"
      >
        {/* Imagen de fondo */}
        <Image
          src={diplomado?.programa?.banner_url || "/images/default-hero.jpg"}
          alt="Fondo del diplomado"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          fill
          priority
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            {diplomado?.programa?.nombre}
          </h1>

          {/* <p className="text-xl md:text-2xl text-gray-200 mb-10 text-pretty">
      Domina las técnicas más avanzadas en tratamientos dermocosméticos y
      transforma tu práctica profesional
    </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <motion.a
              href="#temario"
              whileHover={{ y: -2 }}
              className="px-8 py-4 bg-white text-[#0D1B48] rounded-full font-semibold text-lg hover:shadow-2xl transition"
            >
              Ver temario
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ y: -2 }}
              className="px-8 py-4 bg-[#9B1C31] text-white rounded-full font-semibold text-lg hover:bg-[#7d1628] transition"
            >
              Solicitar información
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0D1B48] mb-16"
          >
            ¿Por qué elegir nuestro diplomado?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Docentes Expertos",
                desc: "Aprende de profesionales con amplia trayectoria.",
              },
              {
                title: "Práctica Real",
                desc: "Acceso a recursos digitales actualizados y análisis de casos clínicos reales guiados por especialistas.",
              },
              {
                title: "Certificación Oficial",
                desc: "RVOE ante SEP.",
              },
              {
                title: "Modalidad en linea",
                desc: "Clases en linea totalmente flexibles.",
              },
              // {
              //   title: "Networking",
              //   desc: "Conecta con profesionales del sector y amplía tu red de contactos",
              // },
              {
                title: "Actualización Continua",
                desc: "Contenido basado en las últimas tendencias y evidencia científica",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-xl text-[#9B1C31] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-bold">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Datos Clave */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                label: "Duración en horas",
                value: diplomado?.programa?.duracion_horas,
              },
              {
                label: "Modalidad",
                value: `${diplomado?.programa?.modalidad}`,
              },
              // { label: "Inicio", value: "Marzo 2025" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0D1B48] to-[#1a2d5f] p-6 rounded-2xl text-center shadow-lg"
              >
                <div className="text-sm text-gray-300 mb-2">{item.label}</div>
                <div className="text-2xl font-bold text-white">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temario */}
      <section id="temario" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0D1B48] mb-16"
          >
            Temario del Diplomado
          </motion.h2>
          <div className="space-y-4">
            {diplomado?.modulos?.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(i)}
                  aria-expanded={openModule === i}
                  aria-controls={`module-${i}`}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-lg text-[#0D1B48]">
                    {module.nombre}
                  </span>
                  {/* <span className="text-2xl text-[#9B1C31]">
                    {openModule === i ? "−" : "+"}
                  </span> */}
                </button>
                {/* {openModule === i && (
                  <div
                    id={`module-${i}`}
                    role="region"
                    className="px-6 pb-5 text-gray-600 leading-relaxed"
                  >
                    {module.content}
                  </div>
                )} */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Docentes */}
      {/* <section id="docentes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0D1B48] mb-16"
          >
            Nuestros Docentes
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dra. María Fernández",
                specialty: "Dermatóloga - Especialista en Cosmiatría",
              },
              {
                name: "Dr. Carlos Mendoza",
                specialty: "Médico Estético - Experto en Tecnologías",
              },
              {
                name: "Dra. Ana Gutiérrez",
                specialty: "Dermatóloga - Especialista en Peelings",
              },
              {
                name: "Dr. Luis Ramírez",
                specialty: "Cirujano Plástico - Docente Universitario",
              },
            ].map((docente, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0D1B48] to-[#9B1C31] shadow-lg"></div>
                <h3 className="text-xl font-bold text-[#0D1B48] mb-2">
                  {docente.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {docente.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Intermedio */}
      <div id="contacto">
        <FormConversion />
      </div>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0D1B48] mb-16"
          >
            Preguntas Frecuentes
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-${i}`}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-lg text-[#0D1B48] pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-[#9B1C31] flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className="px-6 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
