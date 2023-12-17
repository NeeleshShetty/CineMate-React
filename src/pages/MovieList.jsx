import { useEffect, useState } from "react"
import { MovieCard } from "../components/MovieCard"
import { useFetch } from "../hooks/useFetch";
export const MovieList = ({apiPath}) => {
  const {data:movies} = useFetch(apiPath)
  

  return (
    <main className="py-7 ">
      <section className='max-w-7xl mx-auto py-7'>
        <div className="flex justify-start flex-wrap other:justify-evenly">
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
