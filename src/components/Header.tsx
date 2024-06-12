import logo from "../../public/placeholder-logo.svg";

const Header = () => {
    return <div className="flex items-center gap-5 p-5">
        <img src={logo} alt="logo" />
        <h1 className="font-bold text-3xl">Jalen Archer</h1>
    </div>;
};

export default Header;
