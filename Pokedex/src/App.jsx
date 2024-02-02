import Podex from "./components/Pokedex"
import NavScrollExample from "./components/SearchForm"
import PokeRotes from "./routes/PokeRotes"

function App() {

  return (
    <>
    <NavScrollExample/>
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
          <div className="mt-5">
          </div>
        </div>
        <PokeRotes/>
      </div>
    </div>
    </>
  )
}

export default App
