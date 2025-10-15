export type Option = { id: number | string; name: string };

export type Catalog = { id: number | string; nombre: string };

export type RequestFormValues = {
  nombre: string;
  correo?: string | null;
  telefono?: string | null;
  fuente: string | number;
  interesado_en?: string | number | null;
  empresa?: string | null;
};
