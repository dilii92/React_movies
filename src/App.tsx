import './App.css';
import MoviesList from './movies/MoviesList'
import { landingPaeDTO, movieDTO } from './movies/movies.model';
import { useEffect, useState } from 'react';

function App() {
  const [movies,setMovies] = useState<landingPaeDTO>({});
  useEffect(()=>{
    const timerId =setTimeout(()=>{
      setMovies({
        inTheaters:[{
          id:1,
          title:"Spider-Man: Far From Home",
          poster:"https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
        },{
         id:2,
         title:"Luca",
         poster:"https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810"
       }],
       upComing:[{
        id:3,
        title:"The Kissing Booth 3",
        poster:"https://www.themoviedb.org/t/p/w500/c7xcqnMDVQ5v1hJBm3AZ5YikNe6.jpg"
      },{
       id:4,
       title:"Vivo",
       poster:"https://upload.wikimedia.org/wikipedia/en/d/dd/Vivo_poster.jpg"
      }]
      })
    },1000);
    return ()=>clearTimeout(timerId);
  });
 
return (
  <>
    <h3>In Theaters</h3>
    <MoviesList movies={movies.inTheaters}/>

    <h3>Upcoming releases</h3>
    <MoviesList movies={movies.upComing}/>
  </>
  )
}

export default App;
