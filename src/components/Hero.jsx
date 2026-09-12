import heroImg from '../assets/banner-stack.png'
function Hero() {
    return (
        <section className="px-6 py-16">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">

                <div>

                    <h1 className="text-5xl font-bold leading-tight">
                        Build Your Ideal <br></br>
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            {" "} Devlopment Stack
                        </span>
                    </h1>

                    <p className="mt-5 text-gray-600 max-w-xl">
                        Explore frontend, backend, database and tooling operations. Compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 text-white font-medium">
                            Explore Technologies
                        </button>

                        <button className="rounded-full border border-gray-300 px-6 py-3 font-medium">
                            Learn More
                        </button>
                    </div>
                </div>

                <div>
                    <img
                        src={heroImg} alt="Developer stack illustration" className="w-105"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero