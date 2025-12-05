// import React from "react";

// export const SeriesCards = (props) => {
//   const { title, rating, image_url, description, genre, watch_url } = props.curElem;

//   const isSuperHit = rating >= 8.5;

//   const ratingBadgeStyle = isSuperHit
//     ? "border-green-500 text-green-600 bg-green-50"
//     : "border-yellow-500 text-yellow-600 bg-yellow-50";

//   const buttonGradient = isSuperHit
//     ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-green-500/40"
//     : "bg-gradient-to-r from-yellow-500 to-orange-600 hover:shadow-orange-500/40";

//   return (
//     <li className="list-none w-full h-full">
//       <div className="group h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
        
//         <div className="relative overflow-hidden h-72 w-full">
//             <img
//             src={image_url}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
//             {/* --- GENRE FIX HERE --- */}
//             {/* We use genre.join(" • ") to add space and a dot between items */}
//             <span className="absolute top-4 right-4 
//               bg-black/60 backdrop-blur-md border border-white/20 text-white 
//               text-[10px] font-bold px-3 py-2 rounded-lg shadow-lg 
//               tracking-wider uppercase"
//             >
//                 {genre.join(" • ")} 
//             </span>
//         </div>

//         <div className="p-6 flex flex-col flex-grow gap-4">
//           <div className="flex justify-between items-start">
//             <h2 className="text-2xl font-extrabold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-300 line-clamp-1">
//               {title}
//             </h2>
//             <div className={`flex items-center gap-1 px-3 py-1 rounded-full border ${ratingBadgeStyle} text-xs font-bold shadow-sm`}>
//                <span>★</span>
//                <span>{rating}</span>
//             </div>
//           </div>

//           <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3 flex-grow">
//             {description}
//           </p>

//           <div className="mt-2 pt-4 border-t border-gray-100">
//             <a href={watch_url} target="_blank" rel="noreferrer" className="block w-full">
//               <button
//                 className={`relative w-full py-3.5 px-6 text-white text-sm font-bold uppercase tracking-widest rounded-xl shadow-lg transform transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn ${buttonGradient}`}
//               >
//                 <span>Watch Now</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
//                 </svg>
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// }; 

export const SeriesCards = (props) => {
  // 1. Grab onWatch from props
  const { curElem, onWatch } = props;
  const { title, rating, image_url, description, genre } = curElem;

  const isSuperHit = rating >= 8.5;

  const ratingBadgeStyle = isSuperHit
    ? "border-green-500 text-green-600 bg-green-50"
    : "border-yellow-500 text-yellow-600 bg-yellow-50";

  const buttonGradient = isSuperHit
    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-green-500/40"
    : "bg-gradient-to-r from-yellow-500 to-orange-600 hover:shadow-orange-500/40";

  return (
    <li className="list-none w-full h-full">
      <div className="group h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
        
        {/* Image Container */}
        <div className="relative overflow-hidden h-72 w-full">
          <img 
            src={image_url} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-2 rounded-lg shadow-lg tracking-wider uppercase">
            {genre.join(" • ")}
          </span>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow gap-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-extrabold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-300 line-clamp-1">
              {title}
            </h2>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full border ${ratingBadgeStyle} text-xs font-bold shadow-sm`}>
               <span>★</span>
               <span>{rating}</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3 flex-grow">
            {description}
          </p>

          <div className="mt-2 pt-4 border-t border-gray-100">
            <button
              onClick={onWatch}
              className={`relative w-full py-3.5 px-6 text-white text-sm font-bold uppercase tracking-widest rounded-xl shadow-lg transform transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn ${buttonGradient}`}
            >
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};