import { useState, useEffect, use } from 'react'
  import s from './App.module.css'
  import {api} from './api/api'

  function App() {
    const [data, setData] = useState([])

    useEffect(() => {
      api.get('/character').then((response) => {
        setData(response.data.results)
        console.log(response.data.results)
      }).catch((error) => {
        console.error("Error fetching data: ", error)
      })
    }, [])

    return (
      <>
        <h1>Rick and Morty Characters</h1>

        <main>
      <input type="text"value={''} onChange={''}   placeholder='1/42' />
        <input type="text"value={''} onChange={''}   placeholder='procure um personagem ' />

        </main>
      </>
    )
  }

  export default App