const Nav = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between py-4 w-full">
                    <div className="flex items-center">
                        <img src="/logo-text.png" alt="Dev Stack" className="h-8" />
                    </div>

                    <nav aria-label="Main navigation" className="flex-1">
                        <ul className="flex items-center justify-center space-x-8 whitespace-nowrap text-black">
                            <li className="text-[#DB2777]">Home</li>
                            <li className="px-2">Technologies</li>
                            <li className="px-2">Projects</li>
                            <li className="px-2">About</li>
                            <li className="px-2">Contact</li>
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