import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPersonSlice = createSlice({
  name: 'getAllPersons',
  initialState: null,
  reducers: {
    setGetAllPersons: (state, action) => (action.payload)
  }
})

export const { setGetAllPersons } = getAllPersonSlice.actions

export default getAllPersonSlice.reducer

// GET Method, Called API Persons
export const getPersons = () => (dispatch) => {

  const URL = 'http://127.0.0.1:8000/api/personas/'
    axios.get(URL)
    .then(res => dispatch(setGetAllPersons(res.data.personas)))
    .catch(err => console.log(err))
 
}
