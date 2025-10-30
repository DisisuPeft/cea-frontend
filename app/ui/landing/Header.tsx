"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Header() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Sobre nosotros", href: "/about-us" },
    { name: "Oferta educativa", href: "/oferta-educativa" },
    // { name: "Eventos", href: "#eventos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <Link
              href={`/`}
              aria-label="Ir al inicio"
              className="inline-flex items-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-sm flex items-center justify-center ml-6 md:ml-12 mb-2">
                <div className="font-bold text-3xl sm:text-4xl leading-none cursor-pointer whitespace-nowrap select-none">
                  <span className="text-primary">U</span>
                  <span className="text-[#121b6a]">NSZ</span>
                  <span className="text-primary">A</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-[#121b6a] focus:outline-none"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-[#121b6a] text-sm font-semibold tracking-wide hover:text-red-600 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}

            <div className="w-px h-8 bg-gray-300" />

            {/* Botón Iniciar sesión */}
            <Link
              href="https://app.unsza.com/auth/login"
              className="px-5 py-2 bg-[#121b6a] text-white rounded-full text-sm font-semibold hover:bg-[#0d1450] transition"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>

        {/* Menu móvil desplegable */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[#121b6a] text-base font-medium hover:text-red-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="https://app.unsza.com/auth/login"
                className="mt-2 px-5 py-2 bg-[#121b6a] text-white rounded-full text-sm font-semibold hover:bg-[#0d1450] transition"
                onClick={() => setOpen(false)}
              >
                Iniciar sesión
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
