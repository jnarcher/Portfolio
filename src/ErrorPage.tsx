import { FiLink } from "react-icons/fi";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const nav = useNavigate();
    console.error(error);

    return (
        <div className="flex justify-center mt-56">
            <div className="flex flex-col justify-center gap-10">
                <h1 className="text-5xl">Page Not Found</h1>
                <div className="flex justify-center items-center">
                    <button onClick={() => nav("/")} className="flex justify-center items-center gap-3 hover:bg-neutral-800 px-3 py-1 rounded-md hover:text-white transition-colors">
                        <FiLink />
                        <span className="text-lg">Home</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;