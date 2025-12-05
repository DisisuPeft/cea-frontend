"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    image: "/assets/logos/unsza_logo (1).webp",
    imageMobile: "/assets/logos/unsza_logo (1).webp",
    subtitle: "Excelencia Académica",
    title: "Educar para conquistar virtudes",
    description:
      "Descubre nuestros diplomados diseñados para transformar tu práctica profesional y ampliar tus horizontes académicos.",
    primaryButton: {
      text: "Explorar Oferta Educativa",
      href: "/oferta-educativa",
    },
    secondaryButton: {
      text: "Conoce UNSZA",
      href: "/about-us",
    },
  },
  {
    image: "/assets/diplomados/DiplomadoInhaloterapiav2.webp",
    imageMobile: "/assets/diplomados/responsive/DiplomadoInhaloterapia.webp",
    subtitle: "Ciencia y Bienestar",
    title: "Diplomado en Inhaloterapia",
    description:
      "Este diplomado responde a la necesidad urgente de contar con recursos humanos con formación sólida y actualizada en inhaloterapia, capaces de aplicar los avances tecnológicos y terapéuticos de manera efectiva.",
    primaryButton: { text: "Más Información", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete", href: "#cta" },
  },
  {
    image: "/assets/diplomados/DiplomadoZoonosis.webp",
    imageMobile: "/assets/diplomados/responsive/DiplomadoZoonosisM.webp",
    subtitle: "Ciencia y Bienestar",
    title: "Diplomado en Zoonosis y Medicina Preventiva",
    description:
      "La realidad sanitaria mexicana demuestra la importancia de contar con especialistas capaces de identificar y responder de manera oportuna a enfermedades zoonóticas.",
    primaryButton: { text: "Más Información", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete", href: "#cta" },
  },
  {
    image: "/assets/diplomados/DiplomadoUrgenciasMedicas16-9.webp",
    imageMobile: "/assets/diplomados/responsive/DiplomadoUrgenciasMedicas.webp",
    subtitle: "Educación en Salud",
    title: "Diplomado en Urgencias Médicas",
    description:
      "Diplomado orientado a profesionales y estudiantes del área de la salud, con enfoque teórico–práctico para diagnosticar, reanimar y estabilizar pacientes en urgencias.",
    primaryButton: { text: "Ver Diplomado", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete Ahora", href: "#cta" },
  },
  {
    image: "/assets/diplomados/Diseñoderechoanimal16-9.webp",
    imageMobile: "/assets/diplomados/Diseñoderechoanimal16-9.webp",
    subtitle: "Educación en Salud",
    title: "Diplomado en Derecho Animal ",
    description:
      "El creciente reconocimiento de los animales como seres sintientes, es de interes y dignidad propia, ha generado la necesidad urgente de replantear su estatus juridico.",
    primaryButton: { text: "Ver Diplomado", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete Ahora", href: "#cta" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const hovering = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance (pausa al hacer hover sobre el hero)
  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) setCurrent((p) => (p + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setCurrent(i);
  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  // Seleccionar imagen según dispositivo
  const currentImage = isMobile
    ? slides[current].imageMobile
    : slides[current].image;

  return (
    <div
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center bg-white text-white overflow-hidden"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      {/* Fondo slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.01 }} // <= menos upscale
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={currentImage}
            alt={slides[current].title}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover object-[90%_center] pointer-events-none transform-gpu will-change-transform transition-transform duration-700"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-primary/50 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Contenido (mismo layout) */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Texto */}
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <h1 className="font-bold leading-tight mb-6 text-[clamp(2rem,6vw,4.5rem)]">
              {slides[current].title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={slides[current].primaryButton.href}
                className="group inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-secondary-foreground font-semibold shadow-md hover:shadow-lg transition"
              >
                {slides[current].primaryButton.text}
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna derecha para balance (se mantiene vacía) */}
          <div className="lg:col-span-6" />
        </div>

        {/* Controladores: flechas y puntos (opcionales) */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center transition"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center transition"
          >
            ›
          </button>
        </div>

        {/* Cards debajo (sin cambios) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white text-black p-8 rounded-sm shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-3">
              Descubre tu próximo paso
            </h3>
            <p className="text-sm mb-4 opacity-90">
              Encuentra el diplomado que te llevará al siguiente nivel
              profesional. Aprende con expertos y transforma tu práctica.
            </p>
            <Link
              href="/oferta-educativa"
              className="bg-white text-[#0D1B48] font-semibold px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            >
              Explorar oferta educativa
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white text-black p-8 rounded-sm shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-3">Conoce UNSZA</h3>
            <p className="text-sm mb-4 opacity-90">
              Somos una institución comprometida con la formación integral y el
              desarrollo de virtudes que transforman comunidades.
            </p>
            <Link
              href="/about-us"
              className="bg-white text-[#0D1B48] font-semibold px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            >
              Saber más →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
