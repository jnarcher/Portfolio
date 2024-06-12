import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const Root = () => {
    return (
        <div className="flex justify-center h-screen">
            <main className="flex my-20">
              <Sidebar />
              <div className="bg-neutral-600 mr-10 w-px" />
              <Content />
            </main>
        </div>
    );
}

export default Root;