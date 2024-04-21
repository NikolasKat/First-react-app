import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AddForm from "../employees-add-form/employees-add-form";
import EmplList from "../employees-list/employees-list";

import "./App.css";

function App() {
   const data = [
      { name: "Alex Garsia", salary: 850, increase: false, id: 1 },
      { name: "Nikolas Emmet", salary: 2300, increase: false, id: 2 },
      { name: "Robertto Petrucho", salary: 1500, increase: false, id: 3 },
   ];

   return (
      <div className="App">
         <AppInfo countOfEmpl={7} countOfPremiya={4} />
         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>
         <EmplList data={data} />
         <AddForm />
      </div>
   );
}

export default App;
