import { useContext, useState, createContext, useEffect } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [classes, setClasses] = useState([]);
	// useEffect(() => {
	// 	console.log("UseEffect");
	// 	console.log(classes);
	// 	// console.log(student);
	// }, [classes]);
	return <AppContext.Provider value={{ classes, setClasses }}>{children}</AppContext.Provider>;
};
const GlobalContext = () => {
	return useContext(AppContext);
};
export { AppProvider, GlobalContext };
