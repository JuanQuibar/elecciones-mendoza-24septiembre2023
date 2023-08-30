import Image from "next/image"

const Departamento = ({departamento}) => {

    const candidatos = departamento.candidatos.sort((a, b) => b.porcentaje - a.porcentaje)
    
    
  return (
    
    <div className="bg-[#F5F4F4]" >

        <div className="h-5 bg-[#656565] flex justify-center items-center ">
            <p className="text-[10px] text-white font-bold ">Mesas: <span className="font-light">{departamento.mesas}</span> - Escrutadas: <span className="font-light">{departamento.escrutadas}</span> </p>
        </div>

        <div className="h-7 w-full bg-white flex justify-center items-center">
            <h2 className="text-[15px] text-[#0096FF] uppercase font-black">{departamento.nombre}</h2>
        </div>

        <div className="flex justify-center">
            <Image width={200} height={200} src={`/assets/${candidatos[0].foto}.png`} alt="Foto candidato" />
        </div>


        <div className="bg-white h-7 flex justify-center items-center">
            <p className="text-[#0096FF] text-sm font-normal">{candidatos[0].nombre} <span className="font-black">{candidatos[0].porcentaje}% </span></p>     
        </div>
        <div className="bg-[#00549E] h-3.5 flex justify-center items-center">
            <p className="text-white text-[8px] font-bold">{candidatos[0].fuerza} </p>     
        </div>

        <div >

            {candidatos?.map((perdedor, i) => (
                i>0?
                <div key={perdedor.id}>
                    <div className="flex flex-col">
                        <div className="flex justify-center items-center bg-white h-6 pt-1">
                            <p className="text-[10px] text-[#656565] ">{perdedor.nombre} <span className="font-black">{perdedor.porcentaje}%</span></p>
                        </div>
                        <div className="h-3 bg-[#656565] flex justify-center items-center">
                            <p className="text-white text-[6px] ">{perdedor.fuerza}</p>
                        </div>
                    </div>
                </div>
                : null
        
            ))}

        </div>
        
    </div>
  )
}

export default Departamento