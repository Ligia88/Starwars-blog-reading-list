import  React, {useContext, useEffect, useState} from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'; 

const Detail =()=>{
    const params = useParams()
    const [search , setSearch] = useState({})

    const { store } = useContext(Context)

    const details = () => {

      
        if (params.nature == "characters") { 
          const searchFind = store.Characters.find((item) => item._id == params.id); 
          setSearch(searchFind);
        } else {
          const searchFind = store.Planets.find((item) => item._id == params.id); 
          setSearch(searchFind);
        }
      };
      
    
      
useEffect(()=>{
    details() // revisar
},[])

  return(
    <>
    <h1/> {search?.properties?.name} <h1/>
    <h1/> {search?.properties?.gender} <h1/>
    <h1/> {search?.properties?.hair_color} <h1/>
    <h1/> {search?.properties?.eye_color} <h1/>
    <h1/> {search?.properties?.climate} <h1/>
    <h1/> {search?.properties?.terraine} <h1/>
    <h1/> {search?.properties?.population} <h1/>
    <img src={`https://starwars-visualguide.com/assets/img/characters/${search?.properties?.uid}.jpg`} alt="Personajes" />
    <img src={`https://starwars-visualguide.com/assets/img/planets/${search?.properties?.uid}.jpg`} alt="Planets" />
    </>


    )
}
export default Detail;