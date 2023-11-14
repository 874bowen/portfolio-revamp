import Link from "./classed-ui/Link";
import { AboutSvg, ContactSvg, OpenSourceSvg, ProjectsSvg, WorkExperienceSvg } from "./svgs/Svgs";

export default function NavLink() {
	return (
		<>
			<Link className="flex gap-2 justify-center" href="#about">
				<span className="bg-[#0747E7] dark:bg-[#363D42] text-[whitesmoke] p-1 rounded-lg"><AboutSvg /></span>
				<span className="p-1">About me</span>
			</Link>

         <Link className="flex gap-2" href="#projects">
            <span className="bg-[#0747E7] dark:bg-[#363D42] text-[whitesmoke] p-1 rounded-lg"><ProjectsSvg /></span>
            <span className="p-1">Projects</span>
         </Link>

         <Link className="flex gap-2" href="#projects">
            <span className="bg-[#0747E7] dark:bg-[#363D42] text-[whitesmoke] p-1 rounded-lg"><OpenSourceSvg /></span>
            <span className="p-1">Open source</span>
         </Link>

         <Link className="flex gap-2">
            <span className="bg-[#0747E7] dark:bg-[#363D42] text-[whitesmoke] p-1 rounded-lg"><WorkExperienceSvg /></span>
            <span className="p-1">Work Experience</span>
         </Link>

         <Link className="flex gap-2">
            <span className="bg-[#0747E7] dark:bg-[#363D42] text-[whitesmoke] p-1 rounded-lg"><ContactSvg /></span>
            <span className="p-1">Contact</span>
         </Link>
		</>
	);
}
