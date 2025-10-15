import useFormRequest from "@/hooks/forms-request/use-form-request";
import { CheckCircle } from "lucide-react";
export default function FormRequest() {
  const { register, onSubmit, errors, isSubmitting, reset, diplomados, data } =
    useFormRequest();
  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto">
      <div className="rounded-3xl border border-rose-100 bg-white p-6 sm:p-8 shadow-xl">
        <h3 className="font-lora text-2xl font-semibold text-[#1F2B39]">
          Solicitud de información
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Respuesta rápida. Sin compromiso. Privacidad respetada.
        </p>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Nombre (required) */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-800">
              Nombre completo <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Ej. Daniela López"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 100, message: "Máximo 100 caracteres" },
              })}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-[#a20519] focus:ring-4 focus:ring-[#a20519]/20"
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-rose-600">
                {errors.nombre.message}
              </p>
            )}
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              {...register("correo", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo no válido",
                },
              })}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-[#a20519] focus:ring-4 focus:ring-[#a20519]/20"
            />
            {errors.correo && (
              <p className="mt-1 text-sm text-rose-600">
                {errors.correo.message}
              </p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="10 dígitos"
              {...register("telefono", {
                pattern: {
                  // Acepta 7–15 dígitos (permite prefijos internacionales)
                  value: /^\+?[0-9\s-]{7,15}$/,
                  message: "Teléfono no válido",
                },
              })}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-[#a20519] focus:ring-4 focus:ring-[#a20519]/20"
            />
            {errors.telefono && (
              <p className="mt-1 text-sm text-rose-600">
                {errors.telefono.message}
              </p>
            )}
          </div>

          {/* Fuente (required) */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-800">
              ¿Cómo te enteraste? <span className="text-rose-600">*</span>
            </label>
            <select
              {...register("fuente", {
                required: "Selecciona una fuente",
              })}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-[#B38A4F] focus:ring-4 focus:ring-[#B38A4F]/20"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
            </select>
            {errors.fuente && (
              <p className="mt-1 text-sm text-rose-600">
                {errors.fuente.message}
              </p>
            )}
          </div> */}

          {/* Interesado en (ProgramaEducativo) */}

          {/* Empresa
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Empresa
            </label>
            <select
              {...register("empresa")}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-[#B38A4F] focus:ring-4 focus:ring-[#B38A4F]/20"
            >
              <option value="">— Opcional —</option>

            </select>
          </div> */}

          {/* City */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-800">
              Ciudad
            </label>
            <select
              {...register("city")}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none focus:border-[#B38A4F] focus:ring-4 focus:ring-[#B38A4F]/20"
            >
              <option value="">— Opcional —</option>

            </select>
          </div> */}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800">
            Diplomado de interes
          </label>
          <select
            {...register("interesado_en")}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-black shadow-sm outline-none focus:border-[#a20519] focus:ring-4 focus:ring-[#a20519]/20"
          >
            <option value="">Seleccionar</option>
            {diplomados?.map((value) => {
              // console.log(value);
              return (
                <option key={value.id} value={value.id}>
                  {value.nombre}
                </option>
              );
            })}
          </select>
        </div>
        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-2xl bg-[#a20519] px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 transition disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="mr-2 h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Guardando...
              </>
            ) : (
              <div>Guardar</div>
            )}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-[#1F2B39] font-semibold border border-gray-200 hover:bg-gray-50 transition"
          >
            Limpiar
          </button>
        </div>
        <div className={`mt-4 ${data ? "md:flex justify-center" : "hidden"}`}>
          <div className="fixed top-4 inset-x-4 md:static md:inset-auto lg:mx-auto max-w-4xl mx-auto p-4 bg-green-50 border border-green-200 rounded-2xl shadow-lg flex items-center gap-4 text-green-800 font-medium">
            <CheckCircle className="h-6 w-6 flex-shrink-0" />
            <div>
              <p className="text-lg">¡Solicitud recibida!</p>
              <p className="text-sm opacity-90">{data}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
