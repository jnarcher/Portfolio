import { AiOutlineLoading } from "react-icons/ai"

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-20 animate-spin">
            <AiOutlineLoading />
        </div>
    )
}

export default Spinner;