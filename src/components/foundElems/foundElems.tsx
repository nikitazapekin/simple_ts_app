import TableItem from "../tableItem/tableItem"
import { Movie } from "../../types"
import "./foundElems.scss"
import { useState } from "react"

/*interface FoundElemsProps {
movie: Object
  }
*/
  interface MovieResult {
   /* title: string;
    vote: number;
    release: string; */

    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
     vote_count: number
    // Add other properties if needed
  }
  
  interface FoundElemsProps {
    movie: {
      results: MovieResult[];
   
    };
  }
const FoundElems=({movie}: FoundElemsProps)=> {
    const [isClicked, setIsClicked]=useState<boolean>(false)
   const [element, setElement]=useState<any>()
for(let i=0; i<movie.results.length; i++){
    console.log(movie.results[i])
}

    return (
        <>
         <table className="centered responsive-table striped tableEl">
        <thead>
          <tr>
          <th>№</th>
              <th>Title</th>
              <th>Vote</th>
              <th>Release</th>
          </tr>
        </thead>

        <tbody>
            <TableItem setElement={setElement} setIsClicked={setIsClicked} movie={movie} />
    
        </tbody>
      </table>
        {isClicked? (
            <div className="wind">
              {element?.title}
              <br />
           {element?.release_date}
          
           <br />
           {element?.vote_average}
           <br />
           {element?.vote_count}
           <button className="windBtn" onClick={()=> {
            setIsClicked(false)}}>ok</button>
            </div>
        ):
        (
            <></>
        )
        }
        </>
    )
}
export default FoundElems