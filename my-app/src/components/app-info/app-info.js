import "./app-info.css";

export default function AppInfo({ countOfEmpl, countOfPremiya }) {
   return (
      <div className="app-info">
         <h1>Учёт сотрудников компании:</h1>
         <h2>Общее число сотрудников: {countOfEmpl}</h2>
         <h2>Премию получают: {countOfPremiya}</h2>
      </div>
   );
}
