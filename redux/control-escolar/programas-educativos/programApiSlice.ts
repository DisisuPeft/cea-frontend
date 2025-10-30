import { apiSlice } from "../../services/apiSlice";
import {
  Catalog,
  Oferta,
  DiplomadoResponse,
} from "@/redux/interface/request/type";

const programApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalogoPrograma: builder.query<Catalog[], void>({
      query: () => "/control-escolar/cat/programas/",
    }),
    getOferta: builder.query<Oferta[], void>({
      query: () => "/control-escolar/oferta-educativa/",
    }),
    getDiplomado: builder.query<DiplomadoResponse, string>({
      query: (id) => `/control-escolar/programa/${id}/`,
    }),
  }),
});

export const {
  useGetCatalogoProgramaQuery,
  useGetOfertaQuery,
  useGetDiplomadoQuery,
} = programApiSlice;
