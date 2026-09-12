const Nav = () => {
    return (
        <div className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div>
                    <img src="/public/logo-text.png" alt="" />
                </div>
                <ul className="flex items-center gap-4 text-black">
                    <li className="active text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-4 items-center">
                    <button className="text-black" type="submit">Sign In</button>
                    <button className="bg-[#D91B7E] text-white py-2 px-4 rounded-full" type="submit">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;