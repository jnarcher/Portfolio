import { useState } from "react";
import projects from "../projectData";
import { FaCode } from "react-icons/fa";
import Spinner from "../components/Spinner";

const Projects = () => {
    return (
        <div>
            <h1 className="mb-10 font-bold text-6xl">Projects</h1>
            <div className="flex flex-col gap-5">
                {projects.map((prj, key) => (
                    <ProjectCard key={key} data={prj} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ data }: { data: Project }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="bg-neutral-800 shadow-md p-5 rounded-md">
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-bold text-3xl">{data.title}</h2>
                {data.tags && <Tags data={data.tags} />}
            </div>
            <p className="text-neutral-400 italic">{data.description}</p>

            {data.imgs?.map((path, key) => (
                <div className="my-2">
                    <img
                        key={key}
                        src={path}
                        onLoad={() => setLoading(false)}
                        hidden={loading}
                    />
                    {loading && <Spinner />}
                </div>
            ))}

            {data.src && (
                <div className="flex justify-center items-center">
                    <a
                        className="flex justify-center items-center gap-2 hover:bg-neutral-700 px-3 py-1 rounded-md w-auto hover:text-white transition-colors"
                        href={data.src}
                        target="_blank"
                    >
                        <FaCode />
                        <span>Source</span>
                    </a>
                </div>
            )}
        </div>
    );
};

const Tags = ({ data }: { data: string[] }) => {
    return (
        <div className="flex gap-2">
            {data.map((tag, key) => (
                <div key={key} className="bg-neutral-700 shadow-md px-2 py-1 rounded-lg">
                    {tag}
                </div>
            ))}
        </div>
    );
};
export default Projects;
