"use client"
import useSWR from "swr"
import axios from 'axios'
import Spinner from '../components/spinner'
import Departamento from "../components/Departamento"

/* async function getData() {

  const res = await fetch('http://localhost:3000/api');

  if (!res.ok) {
    throw new Error('Error en el fetch')
  }
 
  return res.json()
} */

// Lisado index más  ID de departamentos
// 0 Maipú 1
// 1 San Rafael 2
// 2 Tunuyán 3
// 3 Lavalle 4
// 4 La Paz 5
// 5 San Carlos 6
// 6 Santa Rosa 7

export default function Home() {
  
  const fetcher = () => axios('/api').then(datos => datos.data)
  
  const { data, error, isLoading } = useSWR('/api', fetcher, { refreshInterval: 1000 })
 
  if (error) console.log(error)
  if (isLoading) return <div className='flex justify-center pt-7 w-screen px-4 gap-3'> <Spinner /> </div>
  
  return (
  
    <div className='flex w-screen px-4 gap-3'>
    
      {data && data.length ? data.map(departamento => (
        <div className="w-[300px] " key={departamento.id}>
          <Departamento
            departamento={departamento} 
          />
        </div>  
      )) : null
      }

    </div>
  )
}
