import "./search-panel.css";

export default function SearchPanel() {
   return (
      <div>
         <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
         />
      </div>
   );
}
