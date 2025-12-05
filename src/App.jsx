import React from "react";
import NetflixSeries,{Footer} from "./components/netflixseries";import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
{/* Default always out without curly bracket */}
// import {Footer} from "./components/netflixseries";
// import {EventPropagation} from "./components/EventPropagation";
import {State} from "./components/hooks/State";
import { TopHeading } from "./components/top";

export const App=()=>{
  return(
    <>    
    <div className="w-full flex items-center justify-center bg-red-800 text-white font-extrabold text-4xl sm:text-6xl md:text-8xl px-4 py-2">NET
      <span className="text-black">FLIX</span>
    </div>
    <section className="container">
      <NetflixSeries/>
      {/* <Footer /> */}
      {/* <EventHandling/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <EventProps/> */}
    </section>
    </>

  );
}


