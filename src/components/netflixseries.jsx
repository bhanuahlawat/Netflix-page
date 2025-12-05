// import { useState } from "react";
// import SeriesData from "../api/SeriesData.json";
// import { SeriesCards } from "./SeriesCards";
// import { SeriesSearch } from "./SeriesSearch";

// const NetflixSeries = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const genres = ["All", "Action", "Sci-Fi", "Mystery", "Drama", "Crime", "Fantasy"];

//   // 1. Direct Filter (No multiplication, just using SeriesData directly)
//   const filteredSeries = SeriesData.filter((curElem) => {
//     const matchesSearch = curElem.title.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // Check if genre array includes the category
//     const matchesCategory = 
//       selectedCategory === "All" || curElem.genre.includes(selectedCategory);

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="flex flex-col">
      
//       {/* Search Component */}
//       <SeriesSearch 
//         searchTerm={searchTerm} 
//         setSearchTerm={setSearchTerm} 
//         selectedCategory={selectedCategory} 
//         setSelectedCategory={setSelectedCategory} 
//         genres={genres}
//       />

//       {/* Grid Display */}
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center sm:place-items-stretch">
//         {filteredSeries.map((curElem) => {
//           // 2. Clean Key: We can use the original unique ID again
//           return <SeriesCards key={curElem.id} curElem={curElem} />;
//         })}

//         {filteredSeries.length === 0 && (
//           <div className="col-span-full flex flex-col items-center gap-4 mt-10">
//              <h2 className="text-2xl font-bold text-gray-400">No movies found 🍿</h2>
//              <p className="text-gray-500">Try adjusting your search or category.</p>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// };

// export const Footer = () => {
//   return (
//     <p className="text-sm">
//       Copyright &copy; {new Date().getFullYear()} Bhanu Ahlawat
//     </p>
//   );
// };

// export default NetflixSeries;

import { useState } from "react";
import SeriesData from "../api/SeriesData.json";
import { SeriesCards } from "./SeriesCards";
import { SeriesSearch } from "./SeriesSearch";
import { SeriesModal } from "./SeriesModal"; // Import Modal

const NetflixSeries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // 1. New State for Modal
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const genres = ["All", "Action", "Sci-Fi", "Mystery", "Drama", "Crime", "Fantasy"];

  const filteredSeries = SeriesData.filter((curElem) => {
    const matchesSearch = curElem.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || curElem.genre.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col">
      <SeriesSearch 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        genres={genres}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center sm:place-items-stretch">
        {filteredSeries.map((curElem) => {
          return (
            <SeriesCards 
                key={curElem.id} 
                curElem={curElem} 
                // 2. Pass the function to open the modal
                onWatch={() => setSelectedMovie(curElem)} 
            />
          );
        })}
      </ul>
      
      {/* 3. Render Modal if a movie is selected */}
      {selectedMovie && (
        <SeriesModal 
            curElem={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export const Footer = () => {
  return <p>Copyright &copy; {new Date().getFullYear()} Bhanu Ahlawat</p>;
};

export default NetflixSeries;