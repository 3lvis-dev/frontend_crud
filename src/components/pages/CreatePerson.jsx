import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getPersons } from '../../store/slices/getPerson.slice'
import './style/createPerson.css'

const defaultValues = {
  nombre: '',
  apellido: '', 
  tipo_documento: '',
  documento: '',
  hobbie: ''
}

const CreatePerson = ({createNewPerson, updatePerson, setUpdatePerson}) => {
  const dispatch = useDispatch()

  const {register, reset, handleSubmit} = useForm()


  useEffect(() => {
    if (updatePerson) {
      reset(updatePerson)
    }
  }, [updatePerson])
  

  const submit = (data) => {
    if (updatePerson) {
      //Update
      // const URL = `http://127.0.0.1:8000/api/personas/${updatePerson.id}`
      const URL = `https://backend-crud.onrender.com/api/personas/${updatePerson.id}`

      axios.put(URL, data)
        .then(res => {
          console.log(res.data)
          dispatch(getPersons())
        })
        .catch(err => console.log(err))
        reset(defaultValues)
        setUpdatePerson()
    } else {
      //Create 
      createNewPerson(data)
      reset(defaultValues)
    }
  }
  
  return (
    <div className='form__container'>
      <form onSubmit={handleSubmit(submit)} >
        <div className='form'>
          <div className='form__grupo'>
            <i className='bx bxs-user'></i>
            <input {...register("nombre")} type="text" id='name' required /><span className='barra'></span>
            <label htmlFor="name">first name</label>
          </div>
            
          <div className='form__grupo'>
            <i className='bx bxs-user'></i>
            <input {...register("apellido")} type="text" id='lastname' required /><span className='barra'></span>
            <label htmlFor="lastname">last name</label>
          </div>

          <div className='form__grupo'>
            <i className='bx bxs-id-card'></i>
            <input {...register("tipo_documento")} type="text" id='tipo' required /><span className='barra'></span>
            <label htmlFor="tipo">document type</label>
          </div>

          <div className='form__grupo'>
            <i className='bx bxs-id-card'></i>
            <input {...register("documento")} type="text" id='documento' required /><span className='barra'></span>
            <label htmlFor="documento">personal document</label>
          </div>

          <div className='form__grupo'>
            <i className='bx bx-joystick'></i>
            <input {...register("hobbie")} type="text" id='hobbie' required /><span className='barra'></span>
            <label htmlFor="hobbie">hobbies</label>
          </div>
          
          <button className='form__create__btn' onClick={createNewPerson} >
            {updatePerson ? 'Update' : 'Create' }
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePerson