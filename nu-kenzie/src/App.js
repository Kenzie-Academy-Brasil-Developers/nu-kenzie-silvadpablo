import './App.css';
import { IndexPage } from "./pages/indexPage"
import { useState } from "react";
import { HomePage } from './pages/home';


function App() {
  const [isIndexPage, setIsIndexPage] = useState(true)
  function login() {
    setIsIndexPage(!isIndexPage)
  }
  return (
    <div className='App'>
      {
        isIndexPage ?
        <IndexPage onClick={login}/>
        : <HomePage onClick={login}/>
      }
    </div>
  )
}

export default App;