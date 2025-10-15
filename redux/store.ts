import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
// import { DataApiSlice } from "./services/MapapiSlice";
import authReducer from "@/redux/features/authSlice";
import SistemaReducer from "@/redux/sistema/SistemaSlice";
import CatReducer from "@/redux/catalogos/catSlice";
import programReducer from "@/redux/control-escolar/programas-educativos/programSlice";
import calendarioReducer from "@/redux/control-escolar/calendario/calendarioSlice";
import alertReducer from "@/redux/features/alerts/alert";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    sistema: SistemaReducer,
    catalogos: CatReducer,
    programas: programReducer,
    calendario: calendarioReducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];
