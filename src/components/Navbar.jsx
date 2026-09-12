import logo from '../assets/logo-text.png'
function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <div>
                    <img
                        src={logo}alt="Dev Stack"className="w-36"
                    />
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-pink-500 font-medium">
                        Home
                    </a>
                    <a href="#">Technologies</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button>Sign In</button>

                    <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-white">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar