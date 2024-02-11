import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then (resp=>resp.json())
    .then(data=>setActors(data))
    },[])  


const renderActors = actors.map((actor)=>{
    const movies = actor.movies.map(movie=>{
      return <li key={movie}>{movie}</li>
      } 
    ) 

    return (
      <article  key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          { movies }
        </ul>
      </article>
    )
  }
)


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        { renderActors }
      </main>
    </>
  );
};

export default Actors;
