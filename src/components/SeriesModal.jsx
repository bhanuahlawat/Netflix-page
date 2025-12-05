export const SeriesModal = ({ curElem, onClose }) => {
  if (!curElem) return null; // Don't render if no movie selected

  const { title, image_url, description, genre, rating, watch_url } = curElem;

  return (
    // 1. Backdrop (Dark transparent background)
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={onClose}>
      
      {/* 2. Modal Card (Stop propagation prevents closing when clicking inside the card) */}
      <div 
        className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all z-10"
        >
            ✕
        </button>

        {/* Left: Image (Cover Art) */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
            <img src={image_url} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-3/5 p-8 flex flex-col gap-4 text-gray-800 dark:text-gray-100">
            <h2 className="text-4xl font-extrabold">{title}</h2>
            
            <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-yellow-400 text-black font-bold rounded-lg">IMDb {rating}</span>
                <span className="text-gray-500 dark:text-gray-400 font-semibold">{genre.join(", ")}</span>
            </div>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {description}
            </p>

            {/* Mock Extra Details */}
            <div className="grid grid-cols-2 gap-4 my-2 text-sm">
                <div>
                    <p className="text-gray-400">Cast</p>
                    <p className="font-semibold">Tom Holland, Zendaya</p>
                </div>
                <div>
                    <p className="text-gray-400">Director</p>
                    <p className="font-semibold">Christopher Nolan</p>
                </div>
            </div>

            <a href={watch_url} target="_blank" rel="noreferrer" className="mt-auto">
                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl text-xl transition-all shadow-lg shadow-red-700/30">
                    Play Movie Now
                </button>
            </a>
        </div>
      </div>
    </div>
  );
};