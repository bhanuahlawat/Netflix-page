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
    <div className="w-100%  flex items-center justify-center bg-red-800 text-white font-extrabold text-8xl">NET
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


