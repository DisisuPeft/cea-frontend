import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { User, Role } from "@/redux/interface/authentication/Users";
import {
  Lead,
  Pipeline,
  Data,
  LeadPaginationResponse,
} from "../interface/crm/crm";

const crmApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // createMenu: builder.mutation({
    //   query: (payload) => ({
    //     url: "url/to/define",
    //     method: "POST",
    //     body: payload,
    //   }),
    // }),
    getLeads: builder.query<LeadPaginationResponse, number | void>({
      query: (page) => `/leads/all/?page=${page}`,
    }),
    retrieveRecentLeads: builder.query<Lead[], void>({
      query: () => "/recent/leads/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    retrieveLead: builder.query<Data, number>({
      query: (id) => `/lead/${id}/`,
    }),
    createLead: builder.mutation({
      query: (payload) => ({
        url: "/registration/lead-landing/",
        method: "POST",
        body: payload,
      }),
    }),
    EstadisticsLeads: builder.query<Data, void>({
      query: () => "/leads/estadistics/",
    }),
    // getTabs: builder.query<TabsModulos[], void>({
    //   query: () => "/tabs/all/",
    //   transformResponse: (response) => {
    //     return Array.isArray(response) ? response : [];
    //   },
    // }),
    // getUsers: builder.query<User[], void>({
    //   query: () => "/cea/usuarios/",
    //   transformResponse: (response) => {
    //     return Array.isArray(response) ? response : [];
    //   },
    // }),
    // getUserEdit: builder.query<User, number>({
    //   query: (id) => `/cea/usuario/${id}`,
    //   // transformResponse: (response) => {
    //   //   return Array.isArray(response) ? response : [];
    //   // },
    // }),
    // editUsers: builder.mutation({
    //   query: (payload) => ({
    //     url: "/cea/usuarios/update/",
    //     method: "PATCH",
    //     body: payload,
    //   }),
    // }),
  }),
});

export const {
  useGetLeadsQuery,
  useRetrieveLeadQuery,
  useCreateLeadMutation,
  useRetrieveRecentLeadsQuery,
  useEstadisticsLeadsQuery,
} = crmApiSlice;
