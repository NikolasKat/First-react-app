import { Component } from "react";
import "./employees-add-form.css";

class AddForm extends Component {
   constructor({ props }) {
      super(props);
      this.state = {
         name: "",
         salary: "",
      };
   }

   onValue = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   onSubmit = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
         name: "",
         salary: "",
      });
   };

   render() {
      const { name, salary } = this.state;

      return (
         <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form" onSubmit={this.onSubmit}>
               <input
                  type="text"
                  className="add-form"
                  placeholder="Как его зовут?"
                  name="name"
                  value={name}
                  onChange={this.onValue}
                  required={true}
               />
               <input
                  type="number"
                  className="add-form"
                  placeholder="З/П в $?"
                  name="salary"
                  value={salary}
                  onChange={this.onValue}
                  required={true}
               />
               <button type="submit" className="btn btn-outline-light">
                  Добавить
               </button>
            </form>
         </div>
      );
   }
}

export default AddForm;
