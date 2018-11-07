import { createContext } from 'react';

export const UserContext = createContext({
  email: "",
  mobile: null,
  name: "",
  role: [],
  status: false
})
