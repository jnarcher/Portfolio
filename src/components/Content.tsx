import { Outlet } from "react-router-dom";

const Content = () => {
    return (
        <div className="border-neutral-700 px-3 pl-10 border-l w-[700px]">
            <Outlet />
        </div>
    )
}

export default Content;