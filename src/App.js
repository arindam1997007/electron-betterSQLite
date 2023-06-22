import "./App.css"
import { Display } from "./Components/Display"
import { InputPerson } from "./Components/InputPerson"

function App() {
  return (
    <>
      <div className="background">
        <div className="App">
          <Display />
          <InputPerson />
        </div>
        <span>The background is provided by loading.io </span>
      </div>
    </>
  )
}

export default App
