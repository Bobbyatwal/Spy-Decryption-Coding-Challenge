import "./App.css";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
       
      {<HeaderComponent />}
      {<MainComponent />}
    </div>
  );
}

export default App;
