
import { useState } from 'react';
import './App.scss';
import Axios from "axios";


const App= ()=> {
  const [nba, setNba] = useState("");
  const [nbaChosen, setNbaChosen] = useState(false);
  const [nbaName, setNbaName] = useState([{
    id:"",
    first_name:"",
    last_name:"",
    position: "",
    team: {},

  }]);

  const searchNba =()=>{

    Axios.get(`https://www.balldontlie.io/api/v1/players/${nba}`).then(
      (res) =>{ console.log(res.data);
         setNbaName([{
           id:res.data.id,
           first_name:res.data.first_name,
           last_name:res.data.last_name,
           position:res.data.position,
           team:{ name:res.data.name},
      
       }]);
      setNbaChosen(true);
    }
    )
  };


  return (
    <div className="App">
      <div className='titleSection' >
        <h1>NBA App</h1>
        <input
        type= "text"
        onChange={(event) =>{
          setNba(event.target.value);
        }}
        ></input>
        <button  onClick={searchNba} >Search Nba</button>

      </div>
      <div className='DisplaySection'>
     {!nbaChosen ? (
          <h1> Please choose a player </h1>
        ) : (
          <>
            <h1>Name:{nbaName.first_name}</h1>
            {/* <img src={nbaName.image} alt={nbaName.name} /> */}
            <h1>:Last Name {nbaName.last_name}</h1>
            <h3>Position: {nbaName.position}</h3>
            <h3>Team: {nbaName.team}</h3>
            
          </>
        )}
      </div> 
    </div>
  );
      };


export default App;
