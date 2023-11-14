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
                    <img src={MedImg} alt="" height="600" className="absolute w-full min-h-[500px] max-h-[500px] project-img object-cover pb-1 rounded-lg group-hover:opacity-30" style={theme == "dark" ? {filter: "grayscale(100%)"} : {}} />
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
                                        Welcome to
                                        GeeksforGeeks.
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
                  <div className="">
                  <div className="relative block group">
                    <img src={Rick} alt="" height="600" className="w-full min-h-[300px] max-h-[300px] project-img object-cover pt-1 rounded-lg" style={theme == "dark" ? {filter: "grayscale(100%)"} : {}} />
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
          <div className="flex items-center justify-center h-screen">
      <a className="relative block w-1/4 bg-gray-900 group" href="#">
        <img className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
          src="https://cdn.pixabay.com/photo/2021/10/30/08/07/desert-6753729__340.jpg" alt="" />
        <div className="relative p-2">
          <div className="mt-40">
            <div
              className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="p-2">
                <p className="text-sm text-white">
                  image hover in text using tailwind css
                </p>
                <button className="px-4 py-2 text-sm text-white bg-indigo-600">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
          <div className="flex items-center justify-center h-screen">
      <a className="relative block w-1/4 bg-gray-900 group" href="#">
        <img className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
          src="https://cdn.pixabay.com/photo/2021/10/30/08/07/desert-6753729__340.jpg" alt="" />
        <div className="relative p-2">
          <div className="mt-40">
            <div
              className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="p-2">
                <p className="text-sm text-white">
                  image hover in text using tailwind css
                </p>
                <button className="px-4 py-2 text-sm text-white bg-indigo-600">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
