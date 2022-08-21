import './App.css';
import { useEffect,useState } from 'react';
import Movie from './Movie';

function App() {
  const [popular,setPopular]=useState([]);
  useEffect(()=>{
    fetchPopular();
  },[]);
  // جبنا الداتا
const fetchPopular = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=d3d534a5f12a1c545e4906ff8e35bd6d&language=en-US&page=1')

 //بتحول الداتا بل جايسون
  const movies = await data.json();
  setPopular(movies.results);
}
  return (
    <div className="App">

      <div className='popular-movie'>
        {popular.map((movie)=>{
          return <Movie key={movie.id} movie={movie}/>
        })}
        
      </div>
    </div>
  );
}

export default App;
