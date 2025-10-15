import { apiSlice } from "../services/apiSlice";
import { Option } from "../interface/request/type";
//   id: number | null | undefined;
// nombre: string | null | undefined;
const crmApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveTipoProducto: builder.query<Option[], void>({
      query: () => "/tipo-producto/all/",
    }),
    addRequestCustomer: builder.mutation({
      query: (body) => ({
        url: `/registration/lead-landing/`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useRetrieveTipoProductoQuery, useAddRequestCustomerMutation } =
  crmApiSlice;
