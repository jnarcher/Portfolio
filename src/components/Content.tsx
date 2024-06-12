import { Outlet } from "react-router-dom";

const Content = () => {
    return (
        <div className="px-3 w-[700px]">
            <Outlet />
        </div>
    )
}

export default Content;