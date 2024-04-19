import "./employees-add-form.css";

export default function AddForm() {
   return (
      <div className="app-add-form">
         <h3>Добавьте нового сотрудника</h3>
         <form action="#" className="add-form">
            <input
               type="text"
               className="add-form"
               placeholder="Как его зовут?"
            />
            <input type="number" className="add-form" placeholder="З/П в $?" />
            <button type="submit" className="btn btn-outline-light">
               Добавить
            </button>
         </form>
      </div>
   );
}
