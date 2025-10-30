// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default function middleware(request: NextRequest) {
//   // console.log(request)
//   const pathname = request.nextUrl.pathname;
//   if (
//     pathname === "/auth/login" ||
//     pathname === "/auth/register" ||
//     pathname === "/maitenance"
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/auth/login", "/auth/register", "/maitenance"],
// };

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // ⚙️ bandera global de mantenimiento (puede venir de process.env)
// const MAINTENANCE_MODE = true; // o false si quieres desactivarlo

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Si estamos en mantenimiento y NO está en la página de mantenimiento → redirige
//   if (MAINTENANCE_MODE && pathname !== "/maitenance") {
//     const mantenimientoUrl = new URL("/maitenance", request.url);
//     return NextResponse.redirect(mantenimientoUrl);
//   }

//   // Si no está en mantenimiento, sigue normalmente
//   return NextResponse.next();
// }

// // Se aplica a TODAS las rutas del proyecto
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { encodePayload } from "./lib/blob";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (pathname === "/auth/register" || pathname === "/auth/login") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  const diplomadosmatch = pathname.match(/^\/programa\/(\d+)$/);
  if (diplomadosmatch) {
    const rawId = diplomadosmatch[1];
    if (!/^\d+$/.test(rawId)) {
      return NextResponse.next();
    }
    const encoded = encodePayload({ id: rawId });
    url.pathname = `/programa/${encoded}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/register", "/auth/login", "/programa/:id(\\d+)"],
};
