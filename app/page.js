"use client"
import {useState, useEffect} from 'react'
import useSWR from "swr"
import axios from 'axios'
import Gobernador from "../components/Gobernador"

export default function Home (){

    const [widthCards, setWidthCards] = useState(0)
    const [widthSlider, setWidthSlider] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [elementsToShow, setElementsToShow] = useState(0)

    const fetcher = () => axios('https://bluedigital.com.ar/gobernador.json').then(datos => datos.data)

    const { data, error, isLoading } = useSWR('https://bluedigital.com.ar/gobernador.json', fetcher, { refreshInterval: 1000 })
   
    useEffect(() => { 

    
    
    let widthContainer = document.getElementById('sliderContainer').clientWidth;
    
    let toShow =    widthContainer > 1280 ? 5 :  
                    widthContainer >= 1025 ? 4:
                    widthContainer >= 768 ? 3: 
                    widthContainer >= 500 ? 2: 
                    widthContainer < 500 ? 1:
                            '';

    setElementsToShow(toShow)
                        
    setWidthCards((widthContainer)/(elementsToShow))
    setWidthSlider(5*widthCards + "px")

  }, [widthCards, elementsToShow]);

  
  return (
      <section className='mt-4 mb-4 '>
        <div className=" bg-[#ffff] flex flex-col justify-between h-[570px] sm:h-[560px] border-r">
            
            <div id="sliderContainer" className="w-full lg:w-full overflow-hidden">

                <p className='px-3 font-[900] md:text-right text-slate-500 text-[20px] md:mb-8 uppercase'>mesas escrutadas <span className='text-[#00549e]'>{data ?  data[0].escrutadas : ''}%</span>  </p> 
            
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

                    {data && data.length ? data.slice(1).sort((a, b) => b.porcentaje - a.porcentaje).map((gobernador, i) => (
    
                        <li id="lista" className=" ancho py-3" key={gobernador.id}>
                            <Gobernador
                                gobernador={gobernador} 
                                widthCards={widthCards}
                            />
                        </li> 

                    )) : null
                    }

                </ul>

            </div>

            {/* CODIGO DE BOTONES DE DESPLAZAMIENTO LATERAL */}
            <div className="flex items-center justify-center px-3 xl:hidden pt-1 ">

                <button 
                    onClick={() => marginLeft >1 || marginLeft <-1 ? setMarginLeft((marginLeft)+widthCards) : ''} 

                    className={marginLeft <6 && marginLeft >-6  ? 'text-slate-400' : 'text-black'} 
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                    </svg>
                </button>

                <button 
                    onClick={() => marginLeft !== -widthCards*(5-elementsToShow) ? setMarginLeft((marginLeft)-widthCards) : ''} 

                    className={marginLeft !== -widthCards*(5-elementsToShow) ? 'text-black' : 'text-slate-400'}
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