import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AddForm from "../employees-add-form/employees-add-form";
import EmplList from "../employees-list/employees-list";

import "./App.css";

function App() {
   return (
      <div className="App">
         <AppInfo countOfEmpl={7} countOfPremiya={4} />
         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>
         <EmplList />
         <AddForm />
      </div>
   );
}

export default App;
