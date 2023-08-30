"use client"
import {useState, useEffect} from 'react'
import useSWR from "swr"
import axios from 'axios'
import Spinner from '../components/spinner'
import Departamento from "../components/Departamento"



export default function Home (){

  const [widthCards, setWidthCards] = useState(0)
  const [widthSlider, setWidthSlider] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [elementsToShow, setElementsToShow] = useState(0)
  const [prueba, setPrueba] = useState(true)

  const fetcher = () => axios('/api').then(datos => datos.data)

  const { data, error, isLoading } = useSWR('/api', fetcher, { refreshInterval: 1000 })

  error ? console.log(error) : ''
  isLoading ?   <Spinner />  : ''

  useEffect(() => {
      let widthContainer = document.getElementById('sliderContainer').clientWidth;
      
      let slider = document.getElementById('slider')
      
      let toShow =    widthContainer > 1280 ? 7 :  
                      widthContainer >= 1025 ? 5:
                      widthContainer >= 768 ? 3: 
                      widthContainer < 768 ? 2: 
                              '' 
      setElementsToShow(toShow)
                          
      setWidthCards((widthContainer)/(elementsToShow))
      setWidthSlider(7*widthCards + "px")

  }, [widthCards]);


  return (
      <section>
          <div className="">

              {/* CODIGO DE BOTONES DE DESPLAZAMIENTO LATERAL */}
              <div className="flex justify-end pr-3 -mb-2 xl:hidden">

                  <button 
                      onClick={() => marginLeft !== 0 ? setMarginLeft((marginLeft)+widthCards) : ''} 

                      className={marginLeft == 0 ? 'text-slate-100' : 'text-[#0096FF]'} 
                  >

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 lg:w-10 lg:h-10">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                      </svg>
                  </button>
                 
                  <button 
                      onClick={() => marginLeft !== -widthCards*(7-elementsToShow) ? setMarginLeft((marginLeft)-widthCards) : ''} 

                      className={marginLeft !== -widthCards*(7-elementsToShow) ? 'text-[#0096FF]' : 'text-slate-100'}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 lg:w-10 lg:h-10">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                      </svg>

                  </button>
                     
              </div>

              <div id="sliderContainer" className="w-full overflow-hidden ">
                  
                  <ul id="slider" className="slider flex w-full transition-margin duration-[900ms]">

                      <style jsx>{`
                          .slider{
                          width: ${widthSlider};
                          margin-left: ${marginLeft+'px'};
                          }
                          .ancho{
                              width: ${widthCards+'px'};
                              }
                      `}</style>

                      {data && data.length ? data.map(departamento => (
                          <li id="lista" className=" ancho p-3" key={departamento.id}>
                          <Departamento
                              departamento={departamento} 
                          />
                          </li>  
                      )) : null
                      }

                  </ul>

              </div>

          </div>
      </section>
  )
}