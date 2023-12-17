import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard"
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const {data:movies} = useFetch(apiPath,query)


  useEffect(()=>{
    document.title=`${query}/ Cinemate` 
  })


  return (
    <main>
<section className='max-w-7xl mx-auto py-7'>
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No Result Found '${query}'` : `Results for '${query}'`}</p>
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
