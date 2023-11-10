import Link from "./classed-ui/Link";
import { AboutSvg, ContactSvg, OpenSourceSvg, ProjectsSvg, WorkExperienceSvg } from "./svgs/Svgs";

export default function NavLink() {
	return (
		<>
			<Link className="flex gap-2">
				<AboutSvg />
				<span>About me</span>
			</Link>

         <Link className="flex gap-2">
            <ProjectsSvg />
            <span>Projects</span>
         </Link>

         <Link className="flex gap-2">
            <OpenSourceSvg />
            <span>Open source</span>
         </Link>

         <Link className="flex gap-2">
            <WorkExperienceSvg />
            <span>Work Experience</span>
         </Link>

         <Link className="flex gap-2">
            <ContactSvg />
            <span>Contact</span>
         </Link>
		</>
	);
}
