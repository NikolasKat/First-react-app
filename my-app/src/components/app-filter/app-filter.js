import { useState } from "react";
import "./app-filter.css";

export default function AppFilter(props) {
   const [filt, setFilt] = useState(0);

   const onUpdateFilt = (e) => {
      const temp = e.target.name;

      setFilt(temp);
      props.onUpdateFilt(filt);
   };

   return (
      <div className="btn-group">
         <button type="button" className="btn btn-light" onClick={onUpdateFilt}>
            Все сотрудники
         </button>
         <button
            type="button"
            className="btn btn-outline-light"
            name="rice"
            onClick={onUpdateFilt}
         >
            На повышение
         </button>
         <button
            type="button"
            className="btn btn-outline-light"
            name="1000More"
            onClick={onUpdateFilt}
         >
            З/П больше 1000$
         </button>
      </div>
   );
}
