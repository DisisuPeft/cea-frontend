import { apiSlice } from "../../services/apiSlice";
import { Catalog } from "@/redux/interface/request/type";

const programApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalogoPrograma: builder.query<Catalog[], void>({
      query: () => "/control-escolar/cat/programas/",
    }),
  }),
});

export const { useGetCatalogoProgramaQuery } = programApiSlice;
