const Banner = () => {
    return (
        <div className="container mx-auto flex items-center gap-10">
            <div className="flex flex-col gap-6">
                <h2 className="text-[60px] text-[#0F172A] font-extrabold">Build Your Ideal <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">Development Stack</span></h2>
                <p className="text-[18px]">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="flex items-center gap-4">
                    <button className="text-white px-4 py-3 rounded-xl bg-linear-to-r from-[#F97316] to-[#EC4899] " type="submit">Explore Technologies</button>
                    <button className="px-10 py-3 rounded-xl border border-[#374151]" type="submit">Learn More</button>
                </div>
            </div>
            <div>
                <img src="/public/banner-stack.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;