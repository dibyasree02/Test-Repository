import './App.css';
import Navbar from './Components/HomePage/Navbar'
import VegList from './Components/HomePage/VegList'


import {useState, useEffect} from 'react' 
function App() {
  const [veggies,setVeggies] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:8000/veg")
      .then(res=>{
        if(!res.ok){
          throw new Error('Server error. Refresh the page');
        }
        return res.json();
      })
      .then(data=>{
        setVeggies(data);
      })
      .catch((e)=>{
        alert(e.message);
      })
  } , [])
  // Adding a new varaible 
  var a = new varaible(null);
  
  return (
    <div className="App">
      <Navbar id = "color"></Navbar> //nav-colour
      id = 1;
      {veggies && <VegList veggies = {veggies} title = "Vegitables for you"></VegList>}
      {veggies && <VegList veggies = {veggies.id==id} title = "Vegitables for you"></VegList>}  //Something messy
    </div>
    
  );
}

export default App;
