import { FiLink } from "react-icons/fi";
import { routes } from "../routes";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

const Sidebar = () => {
    const nav = useNavigate();
    return (
        <div className="flex flex-col justify-between px-5 w-72">
            <div>
                <button
                    onClick={() => nav("/")}
                    className="mb-1 font-bold text-4xl"
                >
                    Jalen Archer
                </button>
                <h4 className="opacity-50 mb-5 italic">Full Stack Developer</h4>
                <h4 className="flex items-center gap-3 mb-5">
                    <IoLocationSharp />
                    <span>San Francisco, CA</span>
                </h4>
                <div className="flex flex-col gap-1">
                    {routes.map((r, key) =>
                        r.visible ? (
                            <NavLink key={key} title={r.title} path={r.path} />
                        ) : null
                    )}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-around">
                    <div>
                        <a
                            href="https://github.com/jnarcher"
                            target="_blank"
                            className="flex items-center gap-3 hover:bg-neutral-800 px-3 py-1 rounded-md hover:text-white transition-colors"
                        >
                            <FaGithub />
                            <span className="text-lg">Github</span>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/jalennarcher/"
                            target="_blank"
                            className="flex items-center gap-3 hover:bg-neutral-800 px-3 py-1 rounded-md hover:text-white transition-colors"
                        >
                            <FaLinkedin />
                            <span className="text-lg">LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div>
                        <a
                            href="mailto:jalennarcher@gmail.com"
                            target="_blank"
                            className="flex items-center gap-3 hover:bg-neutral-800 px-3 py-1 rounded-md hover:text-white transition-colors"
                        >
                            <MdEmail />
                            <span className="text-lg">Email</span>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://drive.google.com/file/d/17jjyml-QcwUhuWiRRm86OVwWU9G1eVAS/view?usp=sharing"
                            target="_blank"
                            className="flex items-center gap-3 hover:bg-neutral-800 px-3 py-1 rounded-md hover:text-white transition-colors"
                        >
                            <HiDocumentText />
                            <span className="text-lg">Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavLink = ({ title, path }: { title: string; path: string }) => {
    const nav = useNavigate();
    const location = useLocation();

    return (
        <button
            onClick={() => nav(path)}
            className="relative flex justify-between items-center hover:bg-neutral-800 px-3 py-1 rounded-md hover:text-white transition-colors"
        >
            <div className="flex items-center gap-3">
                <FiLink />
                <span className="text-lg">{title}</span>
            </div>
            {location.pathname === path && <BsDot />}
        </button>
    );
};

export default Sidebar;
