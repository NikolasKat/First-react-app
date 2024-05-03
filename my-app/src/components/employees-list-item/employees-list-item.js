import { useState } from "react";
import "./employees-list-item.css";

export default function EmplListItem({ name, salary }) {
   const [incr, setIncr] = useState(false);
   const [like, setLike] = useState(false);

   const makeYellow = () => {
      setIncr(!incr);
   };

   const makeFavorite = () => {
      setLike(!like);
   };

   const addLikeName = () => {
      if (like) {
         return " like";
      } else {
         return "";
      }
   };

   const addIncreaseName = () => {
      if (incr) {
         return " increase";
      } else {
         return "";
      }
   };

   return (
      <li
         className={
            "list-group-item d-flex justify-content-between" +
            addIncreaseName() +
            addLikeName()
         }
      >
         <span className="list-group-item-label" onClick={makeFavorite}>
            {name}
         </span>
         <input
            type="text"
            className="list-group-item-input"
            defaultValue={salary + "$"}
         />
         <div className="d-flex justify-content-center align-items-center">
            <button
               type="button"
               className="btn-cookie btn-sm "
               onClick={makeYellow}
            >
               <i className="fas fa-cookie"></i>
            </button>

            <button type="button" className="btn-trash btn-sm ">
               <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
         </div>
      </li>
   );
}
