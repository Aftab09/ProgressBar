import './App.css';
import Progressbar from './ProgressBar';

function App() {
  return (

    <div style={{ width: "500px", position: "absolute" }} className="App">
      <h3 className="heading">Progress Bar</h3>
      <Progressbar bgcolor="orange" progress='90' height={30} />

    </div>

  );
}

export default App;
