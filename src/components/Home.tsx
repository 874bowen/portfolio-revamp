import Bowen from "../assets/bowen.jpg";
import BowenSm from "../assets/bowen-sm.jpg";

import { ThemeContext } from "../services/providers/ThemeContext";

export default function Home() {
	return (
		<ThemeContext.Consumer>
			{(theme) => (
				<div className={theme}>
					<div className="flex flex-col" id="home">
						<div
							className="md:px-20 w-full h-[50vh] md:h-[77vh] md:flex items-center"
							style={
								theme == "light"
									?  {
											background:
												"linear-gradient(90deg, whitesmoke 70%, #0747E7 30%)",
                                 }
									:  {
											background:
												"linear-gradient(90deg, #242424 70%, #363D42 30%)",
											color: "whitesmoke",
                              }
							}
						>
							<div className="w-full h-full md:w-7/12 flex md:flex-col justify-center items-center gap-2 ">
								<div className="md:px-[3rem]">
									<span className="text-xl font-semibold dark:text-white">
										Hello
									</span>
									<h2 className="text-5xl font-bold py-4 dark:text-[whitesmoke]">
										I'm Ivan{" "}
										<span
											className={
												theme == "light"
													? "text-[#0747E7]  drop-shadow-lg shadow-whitesmoke"
													: "text-[#CBEEF3] shadow-dark"
											}
										>
											Bowen
										</span>{" "}
									</h2>
									<h3 className="text-2xl pt-2 pb-4">
										Software Developer <br /> & Designer
									</h3>
									<button className="mt-4 px-4 py-1 bg-transparent outline outline-3 rounded-sm outline-offset-2 outline-[#0747E7] dark:outline-[#CBEEF3] text-sm uppercase text-[#0747E7] dark:text-[#CBEEF3]">
										Hire me
									</button>
								</div>
							</div>
							<div className="w-full md:w-5/12">
								<div className="hidden md:block">
									<img
										src={Bowen}
										alt=""
										className="rounded-full h-[70vh]"
										style={theme == "dark" ? {filter: "grayscale(100%)"} : {}}
									/>
								</div>
							</div>
						</div>
						<div className="md:hidden flex justify-center mt-4">
							<img
								src={BowenSm}
								alt=""
								width="60%"
								className="w-[10/12] rounded-full border-4 border-[#0747E7] dark:border-[#CBEEF3]"
								style={theme == "dark" ? {filter: "grayscale(100%)"} : {}}
							/>
						</div>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
