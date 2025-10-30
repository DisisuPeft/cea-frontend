export function encodePayload(obj: { id: string }) {
  const json = JSON.stringify(obj);
  // En Node.js o Edge Runtime usa Buffer
  if (typeof Buffer !== "undefined") {
    return Buffer.from(json, "utf8").toString("base64url");
  }
  // En el navegador
  return btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function decodePayload(d: string) {
  try {
    // Si es numérico crudo, simplemente retorna
    if (/^\d+$/.test(d)) return { id: d };

    let base64 = d.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) base64 += "=";

    const json =
      typeof Buffer !== "undefined"
        ? Buffer.from(base64, "base64").toString("utf8")
        : decodeURIComponent(escape(atob(base64)));

    return JSON.parse(json);
  } catch {
    return { id: "0" };
  }
}
