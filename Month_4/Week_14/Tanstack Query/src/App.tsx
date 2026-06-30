import { useEffect, useState } from "react"
import axios from "axios"

//ToDo: Finish the project

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/todos')
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error))
  }, [])
  return (
      <>{JSON.stringify(data)}</>
  )
}
export default App