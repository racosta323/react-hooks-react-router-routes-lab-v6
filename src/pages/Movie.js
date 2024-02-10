import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom"

function Movie() {

  const [movie, setMovies] = useState({})
  
  const params = useParams()
  const userId = params.id

  useEffect(()=>{
    fetch (`http://localhost:4000/movies/${userId}`)
    .then (resp=>resp.json())
    .then(data => setMovies(data))
    .catch(error=>console.log(error))
  }, [userId])


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <p>
          {movie.genres}
          <span>
            {movie.genres}
          </span>
        </p>
      </main>
    </>
  );
};

export default Movie;
