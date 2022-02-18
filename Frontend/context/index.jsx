import { useContext, useState, createContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [user, setUser] = useState("Shaarang");
	return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
const GlobalContext = () => {
	return useContext(AppContext);
};
export { AppProvider, GlobalContext };
