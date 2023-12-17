import "./App.css"
import AllRoutes from "./routes/AllRoutes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
const App = () => {
  return (
    <div className="App dark:bg-slate-800">
      <ScrollToTop />
      <Header />
      <AllRoutes />
      <Footer />
    </div>

  )
}

export default App