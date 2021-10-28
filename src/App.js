import "./App.css";
import Developer from "./components/Developer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="FatherCont">
          <h1 className="Title">Lista de desenvolvedores</h1>
          <Developer
            name="Samuel Manga Rodrigues"
            age="21"
            country="Cássia-Mg"
          />
          <Developer name="João Kenzie" age="20" country="São Paulo-Sp" />
          <Developer name="Maicon Test" age="21" country="Capitólio-Mg" />
        </div>
      </header>
    </div>
  );
}

export default App;
