import { ThemeContext } from "../services/providers/ThemeContext";
import MedImg from "../assets/projects/med.jpg";
import Rick from "../assets/projects/rick.jpg";
import Beauty from "../assets/projects/beauty.jpg";
import Blog from "../assets/projects/blog.jpg";
import MedTech from "../assets/projects/medtech.jpg";
import Vote from "../assets/projects/vote.jpg";

export default function Projects() {
	return (
		<ThemeContext.Consumer>
			{(theme) => (
				<div className={theme} id="projects">
					<div className="mt-5 dark:text-[whitesmoke] px-2 md:px-[150px]">
						<h1 className="text-3xl text-center font-semibold pb-3">
							<span className="border-b-4 border-b-[#0747E7] dark:border-b-[#CBEEF3]">
								Projects
							</span>{" "}
							/ Open Source
						</h1>
            <div className="mt-5">
              <div className="md:flex dark:bg-[#363D42] p-2 rounded-lg">
                <div className="flex-col md:w-4/12 md:pr-1">
                  <div className="relative">
                  <div className="relative block min-w-full group bg-gray-900 h-[500px] rounded-lg">
                    <img src={MedImg} alt="" height="600" className="absolute w-full min-h-[500px] max-h-[500px] project-img object-cover pb-1 rounded-lg group-hover:opacity-30" style={theme == "dark" ? {filter: "grayscale(100%)"} : {background: "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(7,71,231,0.5) 35%, rgba(255,255,255,0.5) 100%)"}} />
                    <div className="relative h-full flex justify-center items-center p-5">
                        <div className="">
                            {/* Hidden content */}
                            <div
                                className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                            >
                                <div className="p-2">
                                    <p className="text-lg text-white font-semibold">
                                        The Child Protection Management Information System 
                                    </p>
                                    <small className="text-white py-4">
                                    Served as a team lead in a hackathon, where the challenge was to upgrade the Child Protection Information Management System (CPIMS) from Python 2.17 to 3.10 and Django 1.18 to Django 4.0, as well as generate unit tests. 
                                    </small>
                                    <button
                                        className="px-4 py-2 mt-2 text-sm 
                                            text-white bg-[#0747E7] flex items-center gap-2 rounded-sm"
                                    >
                                        View on Github 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                  </div>
                  </div>
                  <div className="">
                  <div className="relative block group min-w-full group bg-gray-900 h-[300px] rounded-lg my-1">
                    <img src={Rick} alt="" height="600" className="absolute w-full min-h-[300px] max-h-[300px] project-img object-cover pb-1 rounded-lg group-hover:opacity-30" style={theme == "dark" ? {filter: "grayscale(100%)"} : {}} />
                    <div className="relative h-full flex justify-center items-center p-5">
                        <div className="">
                            {/* Hidden content */}
                            <div
                                className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                            >
                                <div className="p-2">
                                    <p className="text-lg text-white">
                                        
                                    </p>
                                    <button
                                        className="px-4 py-2 text-sm 
                                            text-white bg-green-600"
                                    >
                                        Visit site
                                    </button>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="flex-col md:w-4/12 pt-2 md:pt-0 md:px-1">
                  <div className="">
                    <img src={Blog} alt="" height="600" className="w-full min-h-[300px] max-h-[300px] project-img object-cover pb-1 rounded-lg" style={theme == "dark" ? {filter: "grayscale(100%)"} : {}} />
                  </div>
                  <div className="">
                    <img src={Vote} alt="" height="600" className="w-full min-h-[500px] max-h-[500px] project-img object-cover pt-1 rounded-lg" style={theme == "dark" ? {filter: "grayscale(100%)"} : {}} />
                  </div>
                </div>
                <div className="flex-col md:w-4/12 pt-2 md:pt-0 md:pl-1">
                  <div className="">
                    <img src={MedTech} alt="" height="600" className="w-full min-h-[500px] max-h-[500px] project-img object-cover pb-1 rounded-lg" style={theme == "dark" ? {filter: "grayscale(100%)"} : {}} />

                  </div>
                  <div className="">
                    <img src={Beauty} alt="" height="600" className="w-full min-h-[300px] max-h-[300px] project-img object-cover pt-1 rounded-lg" style={theme == "dark" ? {filter: "grayscale(100%)"} : {}} />
                  </div>
                </div>
              </div>
            </div>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
