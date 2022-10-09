import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Personas from '../pages/Personas'
import './style/home.css'

const Home = ({ setUpdatePerson, setWatchPerson }) => {
  const persons = useSelector(state => state.getAllPersonSlice)

  return (
    <div>
      <div className='app__create--btn'>
        <Link to='/create_person' >
          <button>Create new person</button>
        </Link>
      </div>

      <section className="conteiner">
        {
          persons?.map(person => (
            <Personas 
              key={person.id}
              person={person}
              setUpdatePerson={setUpdatePerson}
              setWatchPerson={setWatchPerson}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Home