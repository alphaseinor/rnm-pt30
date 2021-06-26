import axios from 'axios';
import React, {useEffect, useState} from 'react'
import CharactersList from './components/CharactersList';
import Navigation from './components/Navigation';

function App() {
  const [baseURL] = useState("https://rickandmortyapi.com/api/character/?name=")
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    axios.get(baseURL + search)
      .then((res) => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(error => {
        setCharacters([{
          name: "Error Rick Sanchez!",
          status: "it's worse than that he's dead Jim!",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        }])
        console.log(error)
      })
  },[search])

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }
    
  console.log(characters)

  return (
    <div className="App">
      <header>
        <Navigation search={search} searchHandler={searchHandler} />
      </header>
      <main>
        <CharactersList myName="Brian" myAge="42" mySaying="answer to life and everything" characters={characters} />
      </main>
      <footer>
        &copy; 2021 what is the heck is this industries llc
      </footer>
    </div>
  );
}

export default App;
