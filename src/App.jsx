import React from "react";
import NetflixSeries, { Footer } from "./components/netflixseries"; // Ensure filename casing matches

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      {/* Header */}
      <header className="w-full bg-red-800 shadow-lg mb-10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-center sm:justify-start">
          <div className="font-extrabold text-4xl sm:text-5xl text-white tracking-tighter cursor-pointer">
            NET<span className="text-black">FLIX</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <NetflixSeries />
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center py-6 text-gray-500 font-medium">
        <Footer />
      </footer>
    </div>
  );
};