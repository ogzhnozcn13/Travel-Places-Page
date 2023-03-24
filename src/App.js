import './App.css';
import "./App.scss"
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
