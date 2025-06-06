import { apiSlice } from "../services/apiSlice";
import { User } from "./types";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<User, void>({
      query: () => "/auth/user/",
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login/",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register/",
        method: "POST",
        body: data,
      }),
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/auth/verify/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRetrieveUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
} = authApiSlice;
