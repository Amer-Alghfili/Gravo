import { createContext, useMemo, useState } from "react";

export const categoryContext = createContext({
  categoryId: "",
  setCategoryId: () => {},
});
