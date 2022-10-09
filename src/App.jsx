import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CreatePerson from './components/pages/CreatePerson'
import ReadPerson from './components/pages/ReadPerson'
import Home from './components/home/Home'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import { getPersons } from './store/slices/getPerson.slice'

function App() {
  const [updatePerson, setUpdatePerson] = useState()
  const [watchPerson, setWatchPerson] = useState()

  // GLOBAL STATE
  const dispatch = useDispatch();
  const persons = useSelector(state => state.getAllPersonSlice)

  useEffect(() => {
    dispatch(getPersons())
  }, [])


  // CREATE Method
  const createNewPerson = (data) => {
    const URL = 'http://127.0.0.1:8000/api/personas/'
  
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        dispatch(getPersons())
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path='/' 
          element={
            <Home 
              setUpdatePerson={setUpdatePerson} 
              setWatchPerson={setWatchPerson} 
            />
          } 
        />
        <Route 
          path='/create_person/' 
          element={
            <CreatePerson 
              createNewPerson={createNewPerson} 
              updatePerson={updatePerson} 
              setUpdatePerson={setUpdatePerson}  
            />
          } 
        />
        <Route path='/read/:id' element={<ReadPerson watchPerson={watchPerson} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
