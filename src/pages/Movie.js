import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom"

function Movie() {

  const [movies, setMovies] = useState(null)
  
  const params = useParams()
  const userId = params.id

  useEffect(()=>{
    fetch (`http://localhost:4000/movies/${userId}`)
    .then (resp=>resp.json())
    .then(data => {
      setMovies(data)
      }
    )
    .catch(error=>console.log(error))
  }, [userId])


const renderTitle = (movies===null) ? null : movies.title
const renderTime = (movies===null) ? null : movies.time
const renderGenres = (movies===null) ? null : movies.genres.map((genre)=><span key ={genre}>{genre}</span>)


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{ renderTitle }</h1>
        <p>{ renderTime }</p>
        <p>
          { renderGenres }
        </p>
      </main>
    </>
  );
};

export default Movie;
