import { useState } from "react";
import { ThemeContext } from "./services/providers/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<div className={theme == "light" ? "bg-[whitesmoke]" : "bg-[#242424]"}>
			<ThemeContext.Provider value={theme}>
				<Navbar toggleTheme={toggleTheme} />
				<div className="pt-[70px]"></div>
				<Home />
				<About />
				<Projects />
				<Experience />
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
