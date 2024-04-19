import EmplListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

export default function EmplList() {
   return (
      <ul className="app-list list-group">
         <EmplListItem />
         <EmplListItem />
         <EmplListItem />
      </ul>
   );
}
