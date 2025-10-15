import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AlertType = "success" | "error" | "info" | "warning";

interface AlertState {
  type: AlertType;
  message: string;
}

const initialState = null as AlertState | null;

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (_state, action: PayloadAction<AlertState>) => action.payload,
    clearAlert: () => null,
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
