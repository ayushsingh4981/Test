import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <UserContext.Provider value={{ suggestions, setSuggestions }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default function useSuggestion() {
  return useContext(UserContext);
}
