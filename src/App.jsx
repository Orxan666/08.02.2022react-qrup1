import { useState } from "react";
import "./App.css";

function App() {
const [name,setName]=useState("Orxan")
const [age,setAge]=useState(25)
const[friends,setFriends]=useState(["Orxan","Eli","Senan"])
const [adress,setAdress] = useState({
  title:'istanbul',
  zip:542662,

})
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>

    <button onClick={()=>setName("Eli")}>Name deyis</button>
    <button onClick={()=>setAge(26)}>Age deyis  </button>
  <hr />
  {
    friends.map((friend,index)=>
    <div key={index}>
      {friend}
    </div> )

  }
    <button onClick={()=>setFriends([...friends,"Murad"])}>dost elave et </button>
<h2>{adress.title} {adress.zip}</h2>
<button onClick={()=>setAdress({...adress,zip:"444"})}>change adress </button>

    </>
  );
}

export default App;
