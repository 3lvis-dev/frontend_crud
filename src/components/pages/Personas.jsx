import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPersons } from '../../store/slices/getPerson.slice';
import './style/personas.css'

const Personas = ({person, setUpdatePerson, setWatchPerson}) => {
  const dispatch = useDispatch();

  //GET Method by ID
  const getPersonbyID = () => {
    setWatchPerson(person)
  }

  //UPDATE Method
  const getInfoUpdate = () => {
    setUpdatePerson(person)
  }

  // DELETE Method
  const deletePersonById = (id) => {
    // const URL = `http://127.0.0.1:8000/api/personas/${person.id}`
    const URL = `https://backend-crud.onrender.com/api/personas/${person.id}`


    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        dispatch(getPersons())
      })
      .catch(err => console.log(err))
  }

  return (
    <article className='card'>
      <div className='card__user--icon'>
        <i className='bx bxs-user'></i>
      </div>
      <div className="card__info">
        <ul className='card__item'>
          <li> {person.nombre} {person.apellido} </li>
          <li> {person.tipo_documento}: {person.documento} </li>
        </ul>
      </div>
      <div className="card__btn-method"> 
        <button className="card__btn card__btn--watch" onClick={getPersonbyID}>
          <Link to={`/read/${person.id}`} >
            <i className='bx bx-show'></i>
          </Link>
        </button>
        <button className="card__btn card__btn--edit" onClick={getInfoUpdate} >
          <Link to='/create_person/' >
            <i className='bx bxs-edit'></i>
          </Link>
        </button>
        <button className="card__btn card__btn--del" onClick={deletePersonById} >
          <i className='bx bxs-trash-alt'></i>
        </button>
      </div>
    </article>
  )
}

export default Personas