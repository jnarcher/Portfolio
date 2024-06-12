import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const Root = () => {
    return (
        <div className="flex justify-center">
            <main className="relative flex my-20 min-h-[1000px]">
                <Sidebar />
                <div className="bg-neutral-600 mr-10 w-px h-full" />
                <Content />
            </main>
        </div>
    );
};

export default Root;
