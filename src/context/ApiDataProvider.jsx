import { createContext } from "react";
import { useState } from "react";

export const ApiDataContext = createContext([]);

const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const data = { apiData, setApiData };
  return (
    <ApiDataContext.Provider value={data}>
        {children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataProvider;
