import "./tableItem.scss"
import { MovieItem } from "../../types"
import { useState } from "react"
interface MovieResult extends MovieItem { 
   }
   
   interface FoundElemsProps {
     movie: {
      results: MovieResult[];
    
     };
     setIsClicked: (value: boolean) => void;
     setElement: (value:any) => void;
   }

const TableItem =({movie, setIsClicked, setElement}: FoundElemsProps)=> {
   // const [isClicked, setIsClicked]=useState<boolean>(false)
    return (
        <>
        {movie.results.map((item,index)=>(
         <tr className="tableItem" onClick={()=> {
            setIsClicked(true)
           setElement(item)
         }}>
             <td>{index}</td>
         <td>{item.title}</td>
         <td>{item.vote_average}</td>
         <td>{item.release_date}</td>
       </tr>   
        ))}
        </>
        )
    }
    export default TableItem
