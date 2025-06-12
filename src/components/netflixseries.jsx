import SeriesData from "../api/SeriesData.json";
import { SeriesCards } from "./seriescards";

const NetflixSeries=()=>{
    return(
      <ul className="grid grid-three--cols">
        {
          SeriesData.map((curElem)=>{
            return(
            <SeriesCards key={curElem.id} curElem={curElem}/>)
          })
        }
        {/* <li>
          <div>
            <div>
              <img src={curElem.image_url} 
              alt="" width="15%" height="30%"/>
            </div>
            <h1>Name:{curElem.title}</h1>
            <h3>Rating:{curElem.rating}</h3>
            <p><b>Gener:</b>{curElem.genre}</p>
            <p><b>Description:</b>{curElem.description}</p>
            <a href={curElem.watch_url} target="_blank">
            <button>Watch now</button> 
            </a>                      
          </div>
        </li> */}
      </ul>
    );
  }

export const Footer=()=>{
    return<p> CopyRight @Bhanu Ahlawat</p>
}

   export default NetflixSeries;                                                               {/* Default baas 1 he rahega */}
//   export default Footer;
