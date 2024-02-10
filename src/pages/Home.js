import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"

function Home() {
  
  const [allMovies, setMovies] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
      .then(resp => resp.json())
      .then(data=>setMovies(data))
  }, [])


const renderMovies = allMovies.map((movie)=>{
  return <MovieCard title={movie.title} key={movie.id} id={movie.id}/>
})
  
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {renderMovies}
      </main>
    </>
  );
};

export default Home;
