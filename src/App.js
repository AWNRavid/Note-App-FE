import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import NoteContainer from './Components/NoteContainer';


function App() {
  return (
    <div>
       <NavbarComp />
       <NoteContainer />
    </div>
  );
}

export default App;
