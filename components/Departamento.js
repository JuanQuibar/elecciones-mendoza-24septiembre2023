import Image from "next/image"

const Departamento3 = ({departamento, widthCards}) => {
const candidatos = departamento.candidatos.sort((a, b) => b.porcentaje - a.porcentaje)

function formatearNumero(numero) {
    const numeroRedondeado = numero.toFixed(1);
    const cambiarPunto = numeroRedondeado.replace('.', ',');
    const numeroFormateado = cambiarPunto.replace(',0', '');
    return numeroFormateado;
  }
  
  return ( 

    <div className="ancho ">

        {/* ganador */}
        <div className="ancho bg-gradient-custom flex flex-col justify-end relative border-x-8 border-x-[#ffff] lg:mb-1 ">
            <style jsx>{`
                .ancho{
                    width: ${widthCards+'px'};
                    }
            `}</style>
                {/* caja municipio y mesas escrutadas */}
                <div className="bg-[#e6e6e6] sombra absolute top-[0%] md:top-[5%] lg:top-[3%] right-0 p-1  flex flex-col mr-[2px] px-2">
                    <p className="text-[#00549e] uppercase leading-tight font-[700] text-right  ">{departamento.nombre} </p>
                    <div className="flex uppercase items-center text-[#606060  ">
                        <p className="text-[12px] md:text-xs leading-tight font-[500] text-right mr-1 ">escrutadas</p>
                        <p className="leading-tight text-[20px] md:text-xs font-[700] ">| {Math.round(departamento.escrutadas)} </p>

                    </div>
                </div>
            

            {/* Nombre, porcentaje y foto */}
            {/* <div className="h-4 "></div> */}
            <div className="flex  items-end">
                <div className="w-1/2 flex flex-col justify-end  ">
                    <img className="object-cover " src={`/intendentes/${candidatos[0].foto}.webp`} alt="Foto candidato" />
                </div>
                <div className=" flex flex-col items-start justify-end z-10 ml-2 h-full  pb-1">
                    <h2 className="text-[40px] xl:text-[60px]   -mb-1 mr-2 text-white font-[900] md:leading-normal">{formatearNumero(candidatos[0].porcentaje)}<span className="font-[500]" >%</span></h2>
                    <h3 className="uppercase md:text-sm lg:text-[16px] md:leading-tight font-[700] text-white leading-none mr-1">{candidatos[0].nombre} </h3>
                </div>

            </div>

            {/* Partido */}
            <div className="pl-3 py-1 lg:py-0  h-full border-t-2 border-white">
                <p className="uppercase text-white font-[500] md:text-sm  ">{candidatos[0].fuerza} </p>
            </div>
        </div>
        
        {/* perdedores */}

        <div className="w-full border-x-8 border-x-[#ffff] mt-3">
            {candidatos?.map((perdedor, i) => (
                i>0?
                <div key={perdedor.id} className="mt-3 " >
                    <style jsx>{`
                            .barra{
                            width: ${formatearNumero(perdedor.porcentaje)+'%'};
                            
                            }
                            .resto-barra{
                                width: ${100 - formatearNumero(perdedor.porcentaje) + '%'};
                            }
                            
                    `}</style>

                    <div className="flex items-center">
                        <div className="bg-gradient-to-r from-[#00549e] to-[#5bb3ea] barra h-6  "></div>
                        <div className="bg-[#e6e6e6] resto-barra h-6 ">
                            <p className=" lg:leading-normal font-[900] ml-1 md:text-[16px] ">{formatearNumero(perdedor.porcentaje)}% </p>
                        </div>
                    </div>

                    <p className="uppercase text-sm  font-[700]  "> {perdedor.nombre} <span className="font-[400] "> |{perdedor.fuerza} </span></p>
                </div>
                : null

            ))}

        </div>

    </div>
  )
}

export default Departamento3