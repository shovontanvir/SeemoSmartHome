import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Utilities.css';
import Navbar from './Components/Navbar';
import NavInfo from './Components/NavInfo';
import BlogPage from './Components/BlogPage';
import Download from './Components/Download';
import Footer from './Components/Footer';
// import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <NavInfo />
      <Navbar />
      <BlogPage />
      {/* <MainPage /> */}
      <Download />
      <Footer />
    </div>
  );
}

export default App;
