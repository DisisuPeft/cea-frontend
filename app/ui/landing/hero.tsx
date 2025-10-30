"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    image: "/assets/logos/unsza_logo (1).webp",
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
    image: "/assets/diplomados/DiplomadoDermatocosmiatria.webp",
    subtitle: "Educación en Salud",
    title: "Diplomado en Dermocosmetria",
    description:
      "Orientado a quienes deseen desarrollar competencias para gestionar consultorios, clínicas estéticas o servicios de cuidado de la piel, garantizando una práctica ética, segura y fundamentada en la evidencia científica.",
    primaryButton: { text: "Ver Diplomado", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete Ahora", href: "#cta" },
  },
  {
    image: "/assets/diplomados/DiplomadoInhaloterapiav2.webp",
    subtitle: "Ciencia y Bienestar",
    title: "Diplomado en Inhaloterapia",
    description:
      "Este diplomado responde a la necesidad urgente de contar con recursos humanos con formación sólida y actualizada en inhaloterapia, capaces de aplicar los avances tecnológicos y terapéuticos de manera efectiva.",
    primaryButton: { text: "Más Información", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete", href: "#cta" },
  },
  {
    image: "/assets/diplomados/DiplomadoZoonosis.webp",
    subtitle: "Ciencia y Bienestar",
    title: "Diplomado en Zoonosis y Medicina Preventiva",
    description:
      "La realidad sanitaria mexicana demuestra la importancia de contar con especialistas capaces de identificar y responder de manera oportuna a enfermedades zoonóticas.",
    primaryButton: { text: "Más Información", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete", href: "#cta" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const hovering = useRef(false);

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
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover object-[90%_center] pointer-events-none transform-gpu will-change-transform transition-transform duration-700"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none" />
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
            {/* Subtítulo dinámico */}
            {/* <motion.h5
              className="text-white/90 text-sm md:text-base lg:text-lg uppercase tracking-widest font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {slides[current].subtitle}
            </motion.h5> */}

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

              {/* Secundario (opcional) */}
              {/* <Link
                href={slides[current].secondaryButton.href}
                className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/20 hover:border-white/50 transition"
              >
                {slides[current].secondaryButton.text}
              </Link> */}
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
          {/* <button
            // href={`#`}
            className="relative h-32 rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10 flex h-full items-center p-6">
              <p className="text-white/90 font-medium">
                Tu próximo logro comienza aquí. Contacta con nosotros
              </p>
            </div>
          </button> */}
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
          {/* <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white text-black p-8 rounded-sm shadow-2xl"
          >
            <div className="text-red-600 text-xs font-bold tracking-widest mb-4">
              NEWS
            </div>
            <h3 className="text-xl font-bold leading-tight">
              Loyola ranked No. 19 in Wall Street Journal/College Pulse "Best
              Colleges" list
            </h3>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useRef } from "react";

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const hovering = useRef(false);
//   const slides = [
//     {
//       image:
//         "/assets/img-landing/Diplomado-rehabilitación-de-la-articulación-temperomandibular-01.webp",
//       subtitle: "Excelencia Académica",
//       title: "Educar para conquistar virtudes",
//       description:
//         "Descubre nuestros diplomados diseñados para transformar tu práctica profesional y ampliar tus horizontes académicos.",
//       primaryButton: {
//         text: "Explorar Oferta Educativa",
//         href: "/oferta-educativa",
//       },
//       secondaryButton: {
//         text: "Conoce UNSZA",
//         href: "/about-us",
//       },
//     },
//     {
//       image: "/assets/img-landing/UNSZN-01-Diplomado-UM-R.webp",
//       subtitle: "Educación en Salud",
//       title: "Diplomado en Urgencias Médicas",
//       description:
//         "Formación especializada para actuar de manera rápida y eficaz ante emergencias. Ideal para profesionales que buscan salvar vidas y mejorar la calidad del servicio médico.",
//       primaryButton: {
//         text: "Ver Diplomado",
//         href: "/oferta-educativa",
//       },
//       secondaryButton: {
//         text: "Inscríbete Ahora",
//         href: "#cta",
//       },
//     },
//     {
//       image:
//         "/assets/img-landing/Diplomado-nutrición-y-suplementación-en-la-salud-hormonal01.webp",
//       subtitle: "Ciencia y Bienestar",
//       title: "Diplomado en Nutrición y Salud Hormonal",
//       description:
//         "Analiza el sistema hormonal y aprende estrategias nutricionales para equilibrarlo. Ideal para quienes buscan aplicar conocimientos científicos al bienestar integral.",
//       primaryButton: {
//         text: "Más Información",
//         href: "/oferta-educativa",
//       },
//       secondaryButton: {
//         text: "Inscríbete",
//         href: "#cta",
//       },
//     },
//   ];
//   // const [timer, setTimer] = useState<number | null>(null);
//   // Auto-advance slides

//   useEffect(() => {
//     const id = setInterval(() => {
//       if (!hovering.current) setCurrentSlide((p) => (p + 1) % slides.length);
//     }, 8000);
//     return () => clearInterval(id);
//   }, [currentSlide, slides.length]);

//   const goTo = (i: number) => setCurrentSlide(i);
//   const next = () => setCurrentSlide((p) => (p + 1) % slides.length);
//   const prev = () =>
//     setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

//   return (
//     <>
//       {/* Hero Section */}
//       {/* <section className="relative h-screen flex items-center justify-center overflow-hidden"> */}
//         {/* Background Image Overlay */}
//         {/* <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url(/placeholder.svg?height=1080&width=1920&query=college+athlete+lacrosse+player+action+shot)",
//             filter: "brightness(0.4) contrast(1.1)",
//           }}
//         /> */}

//         {/* Gradient Overlay  bg-gradient-to-b from-black/60 via-black/40 to-black/80*/}
//         {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" /> */}
//         {/* <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden"> */}
//           {/* Capa 1 (ola principal) */}
//           {/* <div className="unsza-wave unsza-wave-1 h-[50vh] opacity-80" /> */}

//           {/* Capa 2 (ola secundaria, más sutil) */}
//           {/* <div className="unsza-wave unsza-wave-2 h-[18vh] -mt-6 opacity-60" /> */}
//         {/* </div> */}
//         {/* Center Badge */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative z-10"
//         >
//           <div className="relative">
//             {/* Shield Shape */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 className="absolute inset-0"
//                 initial={{ opacity: 0, scale: 1.01 }} // <= menos upscale
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.99 }}
//                 transition={{ duration: 0.7, ease: "easeInOut" }}
//               >
//                 <Image
//                   src={slides[currentSlide].image}
//                   alt={slides[currentSlide].title}
//                   fill
//                   priority
//                   quality={90} // <= más nitidez
//                   sizes="100vw" // <= describe el ancho real ocupado
//                   className="absolute inset-0 object-cover object-[70%_center] pointer-events-none transform-gpu will-change-transform"
//                 />

//                 {/* Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />
//                 <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none" />
//               </motion.div>
//             </AnimatePresence>
//             {/* <Image
//               src="/assets/logos/unsza_logo (1).webp"
//               alt="logo"
//               width={300}
//               height={300}
//             /> */}
//             {/* <svg
//               width="400"
//               height="500"
//               viewBox="0 0 400 500"
//               className="drop-shadow-2xl"
//             >
//               <defs>
//                 <linearGradient
//                   id="redGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="0%"
//                   y2="100%"
//                 >
//                   <stop offset="0%" stopColor="#dc2626" stopOpacity="0.95" />
//                   <stop offset="100%" stopColor="#991b1b" stopOpacity="0.95" />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M 200 10 L 380 80 L 380 280 Q 380 400 200 490 Q 20 400 20 280 L 20 80 Z"
//                 fill="url(#redGradient)"
//                 stroke="#dc2626"
//                 strokeWidth="4"
//               />
//             </svg> */}

//             {/* Text Content */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-center"
//               >
//                 {/* <h1 className="text-7xl font-black tracking-tighter leading-none mb-2">
//                   MORE
//                   <br />
//                   THAN
//                   <br />
//                   READY
//                 </h1>
//                 <p className="text-red-200 text-lg tracking-widest font-semibold mt-8">
//                   SINCE 1852
//                 </p> */}
//               </motion.div>
//             </div>
//           </div>
//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//             className="flex justify-center mt-[50px]"
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* News Section */}
//       <section className="relative z-20 -mt-32">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* News Card 1 */}
// <motion.div
//   initial={{ y: 50, opacity: 0 }}
//   whileInView={{ y: 0, opacity: 1 }}
//   transition={{ duration: 0.5 }}
//   viewport={{ once: true }}
//   whileHover={{ y: -8 }}
//   className="bg-white text-black p-8 rounded-sm shadow-2xl"
// >
//   <div className="text-red-600 text-xs font-bold tracking-widest mb-4">
//     NEWS
//   </div>
//   <h3 className="text-xl font-bold leading-tight">
//     Loyola ranked No. 19 in Wall Street Journal/College Pulse "Best
//     Colleges" list
//   </h3>
// </motion.div>

//             {/* News Card 2 */}
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="bg-white text-black p-8 rounded-sm shadow-2xl"
//             >
//               <div className="text-red-600 text-xs font-bold tracking-widest mb-4">
//                 NEWS
//               </div>
//               <h3 className="text-xl font-bold leading-tight">
//                 Loyola moves up 51 spots on Forbes' list of top colleges
//               </h3>
//             </motion.div>

//             {/* News Card 3 */}
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="bg-white text-black p-8 rounded-sm shadow-2xl relative overflow-hidden group"
//             >
//               <div className="text-red-600 text-xs font-bold tracking-widest mb-4">
//                 NEWS
//               </div>
//               <h3 className="text-xl font-bold leading-tight">
//                 Loyola welcomes the Class of 2029, including first nursing
//                 students
//               </h3>

//               {/* Play Button Overlay */}
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="absolute bottom-4 right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
//               >
//                 <svg
//                   className="w-6 h-6 text-white ml-1"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//     // <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
//     //   <AnimatePresence mode="wait">
//     //     {slides.map(
//     //       (slide, index) =>
//     //         currentSlide === index && (
//     //           <motion.div
//     //             key={index}
//     //             className="absolute inset-0"
//     //             initial={{ opacity: 0, scale: 1.1 }}
//     //             animate={{ opacity: 1, scale: 1 }}
//     //             exit={{ opacity: 0, scale: 0.95 }}
//     //             transition={{ duration: 1, ease: "easeInOut" }}
//     //           >
//     //             {/* Background Image */}
//     //             <div className="relative w-full h-full">
//     //               <Image
//     //                 src={slide.image || "/placeholder.svg"}
//     //                 alt={slide.title}
//     //                 fill
//     //                 className="object-cover"
//     //                 priority={index === 0}
//     //                 quality={90}
//     //               />

//     //               {/* Gradient Overlay */}
//     //               <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

//     //               {/* Content Container */}
//     //               <div className="absolute inset-0 flex items-center justify-center">
//     //                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     //                   <div className="max-w-4xl mx-auto text-center lg:text-left">
//     //                     {/* Subtitle */}
//     //                     <motion.h5
//     //                       className="text-white/90 text-sm md:text-base lg:text-lg uppercase tracking-widest font-medium mb-4"
//     //                       initial={{ opacity: 0, y: 30 }}
//     //                       animate={{ opacity: 1, y: 0 }}
//     //                       transition={{ duration: 0.8, delay: 0.2 }}
//     //                     >
//     //                       {slide.subtitle}
//     //                     </motion.h5>

//     //                     {/* Main Title */}
//     //                     <motion.h1
//     //                       className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
//     //                       initial={{ opacity: 0, y: 50 }}
//     //                       animate={{ opacity: 1, y: 0 }}
//     //                       transition={{ duration: 1, delay: 0.4 }}
//     //                     >
//     //                       {slide.title}
//     //                     </motion.h1>

//     //                     {/* Description */}
//     //                     <motion.p
//     //                       className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto lg:mx-0"
//     //                       initial={{ opacity: 0, y: 30 }}
//     //                       animate={{ opacity: 1, y: 0 }}
//     //                       transition={{ duration: 0.8, delay: 0.6 }}
//     //                     >
//     //                       {slide.description}
//     //                     </motion.p>

//     //                     {/* Action Buttons */}
//     //                     <motion.div
//     //                       className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//     //                       initial={{ opacity: 0, y: 30 }}
//     //                       animate={{ opacity: 1, y: 0 }}
//     //                       transition={{ duration: 0.8, delay: 0.8 }}
//     //                     >
//     //                       <motion.div
//     //                         whileHover={{
//     //                           scale: 1.05,
//     //                           boxShadow: "0 20px 40px rgba(18, 27, 106, 0.4)",
//     //                         }}
//     //                         whileTap={{ scale: 0.95 }}
//     //                         transition={{ type: "spring", stiffness: 300 }}
//     //                       >
//     //                         <Link
//     //                           href={slide.primaryButton.href}
//     //                           className="inline-block px-8 py-4 bg-[#121b6a] text-white font-semibold text-lg rounded-lg hover:bg-[#0f1654] transition-all duration-300 shadow-lg"
//     //                           role="button"
//     //                           aria-label={slide.primaryButton.text}
//     //                         >
//     //                           {slide.primaryButton.text}
//     //                         </Link>
//     //                       </motion.div>

//     //                       {/* <motion.div
//     //                         whileHover={{
//     //                           scale: 1.05,
//     //                           boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
//     //                         }}
//     //                         whileTap={{ scale: 0.95 }}
//     //                         transition={{ type: "spring", stiffness: 300 }}
//     //                       >
//     //                         <Link
//     //                           href={slide.secondaryButton.href}
//     //                           className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
//     //                           role="button"
//     //                           aria-label={slide.secondaryButton.text}
//     //                         >
//     //                           {slide.secondaryButton.text}
//     //                         </Link>
//     //                       </motion.div> */}
//     //                     </motion.div>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </motion.div>
//     //         )
//     //     )}
//     //   </AnimatePresence>

//     //   {/* Navigation Arrows */}
//     //   <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center pointer-events-none z-20 hidden md:flex">
//     //     <motion.button
//     //       onClick={goToPrevSlide}
//     //       className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 pointer-events-auto"
//     //       whileHover={{ scale: 1.1, x: -5 }}
//     //       whileTap={{ scale: 0.9 }}
//     //       aria-label="Slide anterior"
//     //     >
//     //       <svg
//     //         className="w-6 h-6"
//     //         fill="none"
//     //         stroke="currentColor"
//     //         viewBox="0 0 24 24"
//     //       >
//     //         <path
//     //           strokeLinecap="round"
//     //           strokeLinejoin="round"
//     //           strokeWidth={2}
//     //           d="M15 19l-7-7 7-7"
//     //         />
//     //       </svg>
//     //     </motion.button>

//     //     <motion.button
//     //       onClick={goToNextSlide}
//     //       className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 pointer-events-auto"
//     //       whileHover={{ scale: 1.1, x: 5 }}
//     //       whileTap={{ scale: 0.9 }}
//     //       aria-label="Siguiente slide"
//     //     >
//     //       <svg
//     //         className="w-6 h-6"
//     //         fill="none"
//     //         stroke="currentColor"
//     //         viewBox="0 0 24 24"
//     //       >
//     //         <path
//     //           strokeLinecap="round"
//     //           strokeLinejoin="round"
//     //           strokeWidth={2}
//     //           d="M9 5l7 7-7 7"
//     //         />
//     //       </svg>
//     //     </motion.button>
//     //   </div>

//     //   {/* Slide Indicators */}
//     //   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//     //     <div className="flex gap-3">
//     //       {slides.map((_, index) => (
//     //         <motion.button
//     //           key={index}
//     //           onClick={() => goToSlide(index)}
//     //           className={`w-3 h-3 rounded-full transition-all duration-300 ${
//     //             currentSlide === index
//     //               ? "bg-white scale-125"
//     //               : "bg-white/50 hover:bg-white/70"
//     //           }`}
//     //           whileHover={{ scale: currentSlide === index ? 1.25 : 1.1 }}
//     //           whileTap={{ scale: 0.9 }}
//     //           aria-label={`Ir al slide ${index + 1}`}
//     //         />
//     //       ))}
//     //     </div>
//     //   </div>

//     //   {/* Progress Bar */}
//     //   <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
//     //     <motion.div
//     //       className="h-full bg-white"
//     //       initial={{ width: "0%" }}
//     //       animate={{ width: "100%" }}
//     //       transition={{
//     //         duration: 10,
//     //         ease: "linear",
//     //         repeat: Number.POSITIVE_INFINITY,
//     //       }}
//     //       key={currentSlide}
//     //     />
//     //   </div>

//     //   {/* Scroll Indicator */}
//     //   <motion.div
//     //     className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
//     //     initial={{ opacity: 0, y: 20 }}
//     //     animate={{ opacity: 1, y: 0 }}
//     //     transition={{ duration: 1, delay: 1.5 }}
//     //   >
//     //     <motion.div
//     //       animate={{ y: [0, 10, 0] }}
//     //       transition={{
//     //         duration: 2,
//     //         repeat: Number.POSITIVE_INFINITY,
//     //         ease: "easeInOut",
//     //       }}
//     //       className="flex flex-col items-center text-white/70"
//     //     >
//     //       <span className="text-sm uppercase tracking-wider mb-2">Desliza</span>
//     //       <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//     //         <motion.div
//     //           animate={{ y: [0, 12, 0] }}
//     //           transition={{
//     //             duration: 2,
//     //             repeat: Number.POSITIVE_INFINITY,
//     //             ease: "easeInOut",
//     //           }}
//     //           className="w-1 h-3 bg-white/70 rounded-full mt-2"
//     //         />
//     //       </div>
//     //     </motion.div>
//     //   </motion.div>
//     // </section>
//   );
// }
