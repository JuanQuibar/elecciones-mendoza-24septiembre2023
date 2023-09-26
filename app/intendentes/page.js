"use client"
import {useState, useEffect} from 'react'
import useSWR from "swr"
import axios from 'axios'
import Departamento from "../../components/Departamento"


/* onClick={() => marginLeft !== -widthCards*(11-elementsToShow) ? setMarginLeft((marginLeft)-widthCards) : ''}  */

/* className={marginLeft !== -widthCards*(11-elementsToShow) ? 'text-black' : 'text-slate-400'} */

export default function Home (){

    const [widthCards, setWidthCards] = useState(0)
    const [widthSlider, setWidthSlider] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [elementsToShow, setElementsToShow] = useState(0)

    const fetcher = () => axios('https://bluedigital.com.ar/municipios.json').then(datos => datos.data)

    const { data, error, isLoading } = useSWR('https://bluedigital.com.ar/municipios.json', fetcher, { refreshInterval: 1000 })


  error ? console.log(error) : ''

  useEffect(() => { 

    
    let widthContainer = document.getElementById('sliderContainer').clientWidth;
    
    let toShow =    widthContainer > 1600 ? 5 :  
                    widthContainer >= 1025 ? 4:
                    widthContainer >= 768 ? 3: 
                    widthContainer >= 640 ? 2:  
                    widthContainer < 640 ? 1:
                            '';

    setElementsToShow(toShow)
                        
    setWidthCards((widthContainer)/(elementsToShow))
    setWidthSlider(5*widthCards + "px")

  }, [widthCards, elementsToShow]);

  return (
      <section className='mt-4 mb-4'>
        <div className=" bg-[#ffff]  flex flex-col justify-between h-[570px] sm:h-[560px]">
        
            <div id="sliderContainer" className="w-full lg:w-full overflow-hidden">
                
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
                        <li id="lista" className=" ancho py-3" key={departamento.id}>
                            <Departamento
                                departamento={departamento} 
                                widthCards={widthCards}
                            />
                        </li>  
                    )) : null
                    }

                </ul>

            </div>

            {/* CODIGO DE BOTONES DE DESPLAZAMIENTO LATERAL */}
            <div className="flex items-center justify-center px-3  ">

                <button 
                    onClick={() => marginLeft >1 || marginLeft <-1 ? setMarginLeft((marginLeft)+widthCards) : ''} 

                    className={marginLeft <6 && marginLeft >-6  ? 'text-slate-400' : 'text-black'} 
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                    </svg>
                </button>

                <button 
                    onClick={ ()=> marginLeft > (-widthCards*(11-elementsToShow) -10) && marginLeft < (-widthCards*(11-elementsToShow) +10)  ? '' : setMarginLeft((marginLeft)-widthCards) }
                    
                    className={ marginLeft > (-widthCards*(11-elementsToShow) -10) && marginLeft < (-widthCards*(11-elementsToShow) +10) ? 'text-slate-400' : 'text-black' }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                    </svg>

                </button>
                    
            </div>

        </div>

      </section>
  )
}