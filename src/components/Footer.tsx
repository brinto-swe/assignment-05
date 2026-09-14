const Footer = () => {
    return (
        <footer className="mt-16 border-t pt-10 text-sm text-gray-500">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
                    <div>
                        <img src="/logo-text.png" alt="" />
                        <p className="mt-4 text-gray-400">Curated tools, technologies, and resources for developers building modern software.</p>
                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                            <a className="hover:underline">GitHub</a>
                            <a className="hover:underline">Twitter</a>
                            <a className="hover:underline">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h6 className="text-xs font-semibold text-gray-700 uppercase mb-3">Product</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-xs font-semibold text-gray-700 uppercase mb-3">Company</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-xs font-semibold text-gray-700 uppercase mb-3">Legal</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-6 text-xs text-gray-400">
                    <div>© 2026 Dev Stack. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a className="hover:underline">Privacy</a>
                        <a className="hover:underline">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
