import Bowens from "../assets/bowens.jpg";
import BowenSm from "../assets/bowen-sm.jpg";

import { ThemeContext } from "../services/providers/ThemeContext";

export default function About() {
	return (
		<ThemeContext.Consumer>
			{(theme) => (
				<div className={theme}>
					<div className="py-5 w-full flex flex-col md:flex-row px-4 md:px-[150px] items-center gap-5 bg-[whitesmoke] dark:bg-[#242424]">
						<div className="hidden md:block md:w-1/3 bg-[#0747E7] dark:bg-[#CBEEF3] p-2 rounded-full">
							<img src={theme == "light" ? BowenSm : Bowens} alt="" width="400" className="rounded-full" />
						</div>
						<div className="md:w-2/3 dark:text-[whitesmoke]">
							<h1 className="text-3xl font-semibold pb-3">
								<span className="border-b-4 border-b-[#0747E7] dark:border-b-[#CBEEF3]">About</span> Me
							</h1>
							<p className="text-lg py-3">
								Ivan Bowen is a senior year Computer Science student at Kabarak
								University with a deep passion for software development,
								particularly in the realm of frontend technologies. Ivan's
								journey in the world of computer science has been marked by a
								relentless pursuit of knowledge and a commitment to crafting
								elegant and user-friendly web applications. When he's not
								immersed in lines of code, Ivan enjoys the exhilaration of
								biking through scenic routes and winding down with a good movie.
								With an unquenchable thirst for learning and a knack for turning
								ideas into functional, visually appealing software, Ivan Bowen
								is on a mission to shape the digital landscape, one project at a
								time.
							</p>
							<div className="flex gap-5 mt-4">
								<button className="px-4 py-1 rounded-sm bg-[#0747E7] dark:bg-[#CBEEF3] outline outline-3 outline-[#0747E7] dark:outline-[#CBEEF3] text-md uppercase text-white dark:text-[#242424]">
									Hire me
								</button>
								<button className="px-4 py-1 bg-transparent outline outline-2 rounded-sm outline-[#0747E7] dark:outline-[#CBEEF3] text-sm uppercase text-[#0747E7] dark:text-[#CBEEF3]">
									Download CV
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
