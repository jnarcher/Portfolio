import { FiLink } from "react-icons/fi";
import routes from "../routes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between px-5 w-72">
            <div>
                <h1 className="font-bold text-4xl">Jalen Archer</h1>
                <h4 className="opacity-50 italic">Full Stack Developer</h4>
                <div className="flex flex-col gap-2 mt-10">
                    {routes.map((r, key) => (
                        <NavLink key={key} title={r.title} />
                    ))}
                </div>
            </div>
            <div className="flex justify-around">
                <div>
                    <a href="https://github.com/jnarcher" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors">
                        <FaGithub />
                        <span className="text-lg">Github</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/jalennarcher/" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors">
                        <FaLinkedin />
                        <span className="text-lg">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

const NavLink = ({ title } : { title: string }) => {
    return (
        <button className="flex items-center gap-3 hover:text-white transition-colors">
            <FiLink />
            <span className="text-lg">{title}</span>
        </button>
    )
}

export default Sidebar;