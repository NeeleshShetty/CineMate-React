import { useEffect, useState } from "react"
import { MovieCard } from "../components/MovieCard"
export const MovieList = () => {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c7dcbcc160c6e3bb01101110d10b987a");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
    }, [])
  

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>{
            return(
              <MovieCard key={movie.id} movie={movie}/>
            )
          })}
      
      
                  

                  

                  
                  

        </div>

      </section>

    </main>
  )
}
