import { useState } from "react";
import { ThemeContext } from "../services/providers/ThemeContext";
import NavLink from "./ui/NavLink";
import { MenuBars, MoonSvg, SunSvg } from "./ui/svgs/Svgs";

export default function Navbar({ toggleTheme }) {
   const [sideBarOpen, setSideBarOpen] = useState(false);
	return (
		<ThemeContext.Consumer>
			{(theme) => (
				<div className={theme}>
					<div className="hidden md:flex h-[70px] fixed w-full bg-[whitesmoke] dark:bg-[#242424] dark:text-[whitesmoke] items-center">
						<div className="w-full flex justify-between mx-20">
							<div className="md:flex md:items-center md:gap-5">
								<NavLink />
							</div>
							<div className="">
								<button
									onClick={toggleTheme}
									className="mt-2 px-2 py-2 text-[#000] dark:text-white"
								>
									{theme == "light" ? <MoonSvg /> : <SunSvg />}
								</button>
							</div>
						</div>
					</div>
					<div className="flex md:hidden fixed z-10 w-full h-[70px] bg-[whitesmoke] dark:bg-[#242424] dark:text-[whitesmoke] items-center">
						<div className="w-full flex justify-between mx-5">
							<div className="">
                     <button
									onClick={() => setSideBarOpen(!sideBarOpen)}
									className="mt-2 px-2 py-2 text-[#000] dark:text-white"
								>
								<MenuBars />
                        </button>
							</div>
							<div className="">
								<button
									onClick={toggleTheme}
									className="mt-2 px-2 py-2 text-[#000] dark:text-white"
								>
									{theme == "light" ? <MoonSvg /> : <SunSvg />}
								</button>
							</div>
						</div>
					</div>
               {sideBarOpen && (
                  <div className="fixed top-[70px] z-10 w-full bg-[whitesmoke] dark:bg-[#242424] dark:text-[whitesmoke] items-center">
                     <div className="flex flex-col items-start justify-center">
                        <NavLink />
                     </div>
                  </div>

               )}
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
