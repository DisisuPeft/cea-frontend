import { AlertTriangle } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Icono grande de mantenimiento */}
        <div className="flex justify-center">
          <div className="bg-red-500 rounded-full p-12 shadow-2xl">
            <AlertTriangle className="w-32 h-32 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Título principal */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-red-500">
            En Mantenimiento
          </h1>
          <div className="h-2 w-32 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Descripción */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Estamos trabajando para mejorar tu experiencia
          </p>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Nuestro sitio web está temporalmente fuera de servicio mientras
            realizamos actualizaciones importantes. Volveremos pronto con
            mejoras increíbles.
          </p>
        </div>

        {/* Información adicional */}
        <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 space-y-3">
          <p className="text-red-700 font-semibold text-lg">
            ⏰ Tiempo estimado de regreso
          </p>
          <p className="text-red-600 text-base">
            Estaremos de vuelta en las próximas horas
          </p>
        </div>

        {/* Footer */}
        <div className="pt-8">
          <p className="text-gray-500 text-sm">
            Gracias por tu paciencia y comprensión
          </p>
        </div>
      </div>
    </div>
  );
}
