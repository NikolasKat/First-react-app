import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AddForm from "../employees-add-form/employees-add-form";
import EmplList from "../employees-list/employees-list";

import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {
               name: "Alex Garsia",
               salary: 850,
               increase: false,
               rise: false,
               id: 1,
            },
            {
               name: "Nikolas Emmet",
               salary: 2300,
               increase: false,
               rise: false,
               id: 2,
            },
            {
               name: "Roberto Petrucho",
               salary: 1500,
               increase: false,
               rise: false,
               id: 3,
            },
         ],
         term: "",
         filt: 0,
      };
      this.maxId = 4;
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {
         return {
            data: data.filter((item) => item.id !== id),
         };
      });
   };

   addItem = (name, salary) => {
      const item = {
         name,
         salary,
         increase: false,
         rise: false,
         id: this.maxId++,
      };
      this.setState(({ data }) => {
         const newData = [...data, item];
         return {
            data: newData,
         };
      });
   };

   // new
   onToggleIncrease = (id) => {
      this.setState(({ data }) => {
         const index = data.findIndex((elem) => elem.id === id);

         const old = data[index];
         const newItem = { ...old, increase: !old.increase };
         const newArr = [
            ...data.slice(0, index),
            newItem,
            ...data.slice(index + 1),
         ];

         return {
            data: newArr,
         };
      });
   };

   // new
   onToggleRise = (id) => {
      this.setState(({ data }) => {
         const index = data.findIndex((elem) => elem.id === id);

         const old = data[index];
         const newItem = { ...old, rise: !old.rise };
         const newArr = [
            ...data.slice(0, index),
            newItem,
            ...data.slice(index + 1),
         ];

         return {
            data: newArr,
         };
      });
   };

   onSearch = (items, term) => {
      if (term.length === 0) {
         return items;
      } else {
         return items.filter((item) => item.name.indexOf(term) > -1);
      }
   };

   onUpdateSearch = (term) => {
      this.setState({ term: term });
   };

   onFilt = (items, filt) => {
      switch (filt) {
         case "rice":
            return items.filter((item) => item.rise);
         case "1000More":
            return items.filter((item) => item.salary > 1000);
         default:
            return items;
      }
   };

   onUpdateFilt = (filt) => {
      this.setState({ filt: filt });
   };

   render() {
      const { data, term, filt } = this.state,
         employees = data.length,
         emplWBonus = data.filter((item) => item.increase === true).length,
         newData = this.onFilt(this.onSearch(data, term), filt);

      return (
         <div className="App">
            <AppInfo countOfEmpl={employees} countOfPremiya={emplWBonus} />
            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter onUpdateFilt={this.onUpdateFilt} />
            </div>
            <EmplList
               onDelete={this.deleteItem}
               onToggleIncrease={this.onToggleIncrease}
               onToggleRise={this.onToggleRise}
               data={newData}
            />
            <AddForm onAdd={this.addItem} />
         </div>
      );
   }
}

export default App;
