import { createContext } from "react";

import type { LoginContextType } from "./types";

export const AuthContext = createContext<LoginContextType>(
  {} as LoginContextType
);
