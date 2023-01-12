import Book from './Book'
import './App.css';
function App() {
  let arrayNames = ["bookOne","bookTwo","bookThree"]
  return (
    <div className="App">
      {arrayNames.map((name,i)=>(
        <Book key={i} name={name}/> 
      ))}

    </div>
  );
}

export default App;
