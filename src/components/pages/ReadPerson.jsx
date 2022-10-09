import React from 'react'
import './style/readPersons.css'

const ReadPerson = ({watchPerson}) => {

  return (
    <div className='container__watch'>
      <h2 className='container__watch__title'>ID Person: {watchPerson.id}</h2>
      <article className='card'>
        <div className='card__user--icon'>
          <i className='bx bxs-user'></i>
        </div>
        <div className="card__info">
          <ul className='card__item'>
            <li> {watchPerson.nombre} {watchPerson.apellido} </li>
            <li> {watchPerson.tipo_documento}: {watchPerson.documento} </li>
          </ul>
          <div className='card__hobbie'>
            <hr />
            <p className='card__hobbie__info'>Hobbies: </p> 
            <p className='card__hobbie__info'>
              {watchPerson.hobbie}
            </p> 
          </div>
        </div>
      </article>
    </div>
  )
}

export default ReadPerson