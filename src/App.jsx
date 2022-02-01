
import { useState } from 'react';
import './App.scss';
import Axios from "axios";


const App= ()=> {
  const [nba, setNba] = useState("");
  
  const [nbaName, setNbaName] = useState("");
  


  const searchNba =()=>{

    Axios.get(`https://www.balldontlie.io/api/v1/players/${nba}`).then(
      (res) =>{ console.log(res.data);
         setNbaName({
           id:res.data.id,
           first_name:res.data.first_name,
           last_name:res.data.last_name,
           position:res.data.position,
           team: res.data.team.name,
      
       });
       
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
      <div className='displaySection'>

            <h1>Name:</h1><h2>{nbaName.first_name}</h2>
            <h1>Last Name:</h1> <h2>{nbaName.last_name}</h2>
            <h1>Position:</h1> <h2>{nbaName.position}</h2>
            <h1>Team:</h1> <h2>{nbaName.team}</h2>

      </div>
    </div>
  );
      };


export default App;
