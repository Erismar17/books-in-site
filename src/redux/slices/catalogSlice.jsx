import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalog: [
    {
      id: "1",
      status: "Prestados",
    },
    {
      id: "2",
      status: "Disponibles",
    },
  ],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    createCatalog: (state, action) => {
      state.catalog = [
        { favorite: false, ...action.payload },
        ...state.catalog,
      ].sort((a, b) => a.first_name.localeCompare(b.first_name));
    },
    updateCatalog: (state, action) => {
      const newState = state.catalog.map((catalog) =>
        catalog.id === action.payload.id
          ? { ...catalog, ...action.payload }
          : catalog
      );

      state.catalog = newState;
    },
    deleteCatalog: (state, action) => {
      state.catalog = state.catalog.filter(
        (catalog) => catalog.id !== action.payload.id
      );
    },
  },
});

export const { createCatalog, updateCatalog, deleteCatalog } =
  catalogSlice.actions;
export default catalogSlice.reducer;
