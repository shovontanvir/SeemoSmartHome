import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Utilities.css';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
