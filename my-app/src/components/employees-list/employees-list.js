import EmplListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

export default function EmplList({ data }) {
   const elements = data.map((item) => {
      const { id, ...itemProps } = item;
      return <EmplListItem key={id} {...itemProps} />;
   });

   return <ul className="app-list list-group">{elements}</ul>;
}
