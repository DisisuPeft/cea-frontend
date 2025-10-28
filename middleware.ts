// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default function middleware(request: NextRequest) {
//   // console.log(request)
//   if (request.nextUrl.pathname === "/auth/login" && "/auth/register") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/auth/login", "/auth/register"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ⚙️ bandera global de mantenimiento (puede venir de process.env)
const MAINTENANCE_MODE = true; // o false si quieres desactivarlo

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si estamos en mantenimiento y NO está en la página de mantenimiento → redirige
  if (MAINTENANCE_MODE && pathname !== "/maitenance") {
    const mantenimientoUrl = new URL("/maitenance", request.url);
    return NextResponse.redirect(mantenimientoUrl);
  }

  // Si no está en mantenimiento, sigue normalmente
  return NextResponse.next();
}

// Se aplica a TODAS las rutas del proyecto
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
