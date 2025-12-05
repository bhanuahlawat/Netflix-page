export const SeriesSearch = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  genres 
}) => {
  return (
    <div className="flex flex-col gap-6 items-center mt-8 mb-12">
      
      {/* Search Bar */}
      <div className="relative w-full max-w-md group">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 border-2 border-gray-300 rounded-full text-lg shadow-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder-gray-400 pl-12"
        />
        {/* Search Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 absolute left-4 top-3.5 text-gray-400 group-focus-within:text-red-600 transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedCategory(genre)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border 
              ${
                selectedCategory === genre
                  ? "bg-red-700 text-white border-red-700 shadow-lg scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-red-400 hover:text-red-600"
              }
            `}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};