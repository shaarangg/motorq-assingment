import { useContext, useState, createContext, useEffect } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [user, setUser] = useState({});
	return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
};
const GlobalContext = () => {
	return useContext(AppContext);
};
export { AppProvider, GlobalContext };
