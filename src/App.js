
import './App.css';
import Navbar from './Components/Sheared/Navbar';
import { Routes,Route } from "react-router-dom";
import CompletedTask from './Components/Pages/CompletedTask';
import ToDo from './Components/Pages/ToDo';
import Calander from './Components/Pages/Calander';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<CompletedTask />} />
        <Route path="toDo" element={<ToDo />} />
        <Route path="calender" element={<Calander />} />
      </Routes>
    </div>
  )
}

export default App;
