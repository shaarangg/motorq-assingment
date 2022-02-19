import { useContext, useState, createContext, useEffect } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [classes, setClasses] = useState([]);
	// useEffect(() => {
	// 	console.log(classes);
	// 	// console.log(student);
	// }, [classes, student]);
	return <AppContext.Provider value={{ setClasses }}>{children}</AppContext.Provider>;
};
const GlobalContext = () => {
	return useContext(AppContext);
};
export { AppProvider, GlobalContext };
