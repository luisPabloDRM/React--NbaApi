
import { useState } from 'react';
import './App.scss';
import Axios from "axios";


const App= ()=> {
  const [nba, setNba] = useState("");
  const [nbaChosen, setNbaChosen] = useState(false);
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
      <div className='displaySection'>
     {!nbaChosen ? (
          <h1> Please choose a player </h1>
        ) : (
          <>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGIkHQBPeVd4bWy77S75ONxGFajsDElUvmw&usqp=CAU" alt=""  />
            <h2>Name:{nbaName.first_name}</h2>
            <h2>Last Name:{nbaName.last_name}</h2>
            <h2>Position:{nbaName.position}</h2>
            <h2>Team:{nbaName.team}</h2>

          </>
         )}
      </div>
    </div>
  );
      };


export default App;
