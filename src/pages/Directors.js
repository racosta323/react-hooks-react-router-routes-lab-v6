import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { render } from "@testing-library/react";

function Directors() {
  
  const [allDirectors, setDirectors] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/directors')
    .then (resp=>resp.json())
    .then(data => {
      setDirectors(data)
    })
  },[])

const renderDirectors = allDirectors.map(director=>{
  
  const directorMovies = director.movies
  const renderMovies = directorMovies.map((movie)=>{
      return (
        <li>{movie}</li>
      )
    }
  )

   return (
      <article>
        <h2>{director.name}</h2>
        <ul>
          <li>{renderMovies}</li>
        </ul>
      </article>
    )
  } 
)

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Director's Page</h1>
        { renderDirectors }

      </main>
    </>
  );
};

export default Directors;
