import './App.css'
import {useEffect, useState} from "react";
import  axios from "axios";

const [data, setData] = useState([])

function App() {
useEffect(() => {
  axios.get('https://localhost:8080/todos')
      .then(response => {setData(response.data)})
      .catch(error => console.log(error))
})
  return (
    <>{JSON.stringify(data)}</>
  )
}

export default App
