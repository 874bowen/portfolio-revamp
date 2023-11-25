import { ThemeContext } from "../services/providers/ThemeContext";

function Experience() {
	return (
      <ThemeContext.Consumer>
			{(theme) => (
				<div className={theme} id="projects">
					<div className="mt-5 dark:text-[whitesmoke] px-2 md:px-[150px]">
						<h1 className="text-3xl text-center font-semibold pb-3">
							<span className="text-3xl text-[#0747E7] dark:text-[#CBEEF3]">
								Experience
							</span>
						</h1>
               </div>               
            </div>
         )}
      </ThemeContext.Consumer>

	);
}

export default Experience;
