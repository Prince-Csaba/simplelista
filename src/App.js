import { AppComponent } from './App.Component';
import './App.css';

function App() {

  const data = [
    {
      id: "apple",
      content: "Alma"
    },
    {
      id: "pear",
      content: "Körte"
    },
    {
      id: "pineapple",
      content: "Ananász"
    },
    {
      id: "grape",
      content: "Szőlő"
    }
  ];

  return (
    <div className="App">
      {data.map((d, index) => {
        return (
        <AppComponent 
          key = {index}
          data={d.content} />
        )
      })}
    </div>
  );
}

export default App;
