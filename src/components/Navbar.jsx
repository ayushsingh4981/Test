import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-pink-600">
        StyleSense AI
      </Link>
      <div className="flex-grow mx-4">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="🔍 Search outfits..."
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white transition">
          Sign In
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition">
          Register
        </button>
        <Link to="/fitcheck">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
            FIT CHECK
          </button>
        </Link>
        <Link to="/profile">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            MY PROFILE
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar