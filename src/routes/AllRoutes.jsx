import { Routes,Route } from "react-router-dom"
import {MovieDetail,MovieList,PageNotFound,Search} from "../pages"





const AllRoutes = () => {
  return (
		<main className="dark:bg-slate-80">
			<Routes>
				<Route
					path=""
					element={<MovieList apiPath="movie/now_playing"/>}
				/>
				<Route
					path="/movie/:id"
					element={<MovieDetail />}
				/>
				<Route
					path="/movies/popular"
					element={<MovieList apiPath="movie/popular"/>}
				/>
				<Route
					path="/movies/upcoming"
					element={<MovieList apiPath="movie/upcoming"/>}
				/>
				<Route
					path="/movies/top"
					element={<MovieList  apiPath="movie/top_rated"/>}
				/>
				<Route
					path="/search"
					element={<Search apiPath="search/movie"/>}
				/>
				<Route
					path="*"
					element={<PageNotFound />}
				/>
			</Routes>
		</main>
	);
}

export default AllRoutes