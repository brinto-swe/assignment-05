const Nav = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <img src="/logo-text.png" alt="Dev Stack" className="h-8" />
                    </div>
                    <nav>
                        <ul className="flex items-center gap-6 text-black">
                            <li className="text-[#DB2777]">Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <div className="flex gap-4 items-center">
                        <button className="text-black" type="button">Sign In</button>
                        <button className="bg-[#D91B7E] text-white py-2 px-4 rounded-full" type="button">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;