"use client";
import { useFormRequest } from "@/hooks";
import { CheckCircle } from "lucide-react";

export default function FormConversion() {
  const { register, onSubmit, errors, isSubmitting, data } = useFormRequest();
  return (
    <section className="bg-gradient-to-r from-[#0D1B48] to-[#9B1C31] py-16 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Da el siguiente paso en tu formación
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Déjanos tus datos y un asesor educativo te ayudará a elegir el
          diplomado ideal para ti.
        </p>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          {/* NOMBRE */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Nombre completo"
              className={`p-3 rounded-md text-[#0D1B48] border ${
                errors.nombre ? "border-red-500" : "border-transparent"
              }`}
              {...register("nombre", {
                required: "Por favor, escribe tu nombre completo.",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres.",
                },
              })}
            />
            {errors.nombre && (
              <span className="text-red-500 text-sm mt-1">
                {errors.nombre.message}
              </span>
            )}
          </div>

          {/* CORREO */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Correo electrónico"
              className={`p-3 rounded-md text-[#0D1B48] border ${
                errors.correo ? "border-red-500" : "border-transparent"
              }`}
              {...register("correo", {
                required: "Ingresa un correo electrónico válido.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El formato del correo no es válido.",
                },
              })}
            />
            {errors.correo && (
              <span className="text-red-500 text-sm mt-1">
                {errors.correo.message}
              </span>
            )}
          </div>

          {/* TELÉFONO */}
          <div className="flex flex-col md:col-span-2">
            <input
              type="tel"
              placeholder="Teléfono"
              className={`p-3 rounded-md text-[#0D1B48] border ${
                errors.telefono ? "border-red-500" : "border-transparent"
              }`}
              {...register("telefono", {
                required: "El teléfono es obligatorio.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Ingresa un teléfono válido (10 dígitos).",
                },
              })}
            />
            {errors.telefono && (
              <span className="text-red-500 text-sm mt-1">
                {errors.telefono.message}
              </span>
            )}
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-[#0D1B48] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition md:col-span-2"
          >
            {isSubmitting ? "Enviando..." : "Enviar solicitud →"}
          </button>
          <div className={`mt-4 ${data ? "flex justify-center" : "hidden"}`}>
            <div className="w-full md:w-auto max-w-xl mx-auto p-4 bg-green-50 border border-green-200 rounded-2xl shadow-lg flex items-center gap-4 text-green-800 font-medium">
              <CheckCircle className="h-6 w-6 flex-shrink-0" />
              <div>
                <p className="text-lg">¡Solicitud recibida!</p>
                <p className="text-sm opacity-90">{data}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
