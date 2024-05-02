/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import axios from 'axios'

function App() {
  const [listOfPosts, setListOfPosts] = React.useState([])
  React.useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:5000/api/posts')
      setListOfPosts(res.data)
    }
    getData()
  }, [])

  return (
    <div className='App'>
      <ul>
        {listOfPosts.map((item) => {
          return <li key={item._id}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
