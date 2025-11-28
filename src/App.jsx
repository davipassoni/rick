import { useState, useEffect,  } from 'react'
  import s from './App.module.css'
  import {api} from './api/api'
  import { Card } from './assets/componets/card'

  function App() {
    const [data, setData] = useState([])

  const [searchName, setSearchName] = useState("")
  const [searchPage, setSearchPage] = useState("")

useEffect(() => {
  api.get(`/character/?name=${searchName}&page=${searchPage}`)
    .then((response) => {
      setData(response.data.results)
    })
    .catch((error) => {
      console.error("NÃO FOI POSSÍVEL ACESSAR API", error)
    })
}, [searchName, searchPage])

    return (
      <>
        <h1 className={s.title}>Rick and Morty Characters</h1>

        <main>
      <input type="text"value={searchPage} onChange={''}   placeholder='1/42' />
        <input type="text"value={searchName} onChange={''}   placeholder='procure um personagem ' />
<div className={s.wrapCards}>
  {data.map((item, index) => { 
    return(  
    <div key={index}>

    </div>)
  })}
</div>

        </main>
      </>
    )
  }

  export default App