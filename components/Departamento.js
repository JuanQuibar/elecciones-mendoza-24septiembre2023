import Image from "next/image"

const Departamento = ({departamento}) => {

    const candidatos = departamento.candidatos.sort((a, b) => b.porcentaje - a.porcentaje)
    
    
  return (
    
    <div className="bg-slate-100" >
        <h2 className="text-center text-lg text-red-100 bg-slate-800">{departamento.nombre}</h2>
        <p className="text-xs">Mesas: {departamento.mesas} - Escrutadas: {departamento.escrutadas} </p>
        <Image width={150} height={150} src={`/assets/${candidatos[0].foto}.png`} alt="Foto candidato" />
        <div className="text-xs bg-red-300">
            <p>{candidatos[0].nombre} <span className="text-base font-bold">{candidatos[0].porcentaje}% </span></p>
            <p>{candidatos[0].fuerza} </p> 
        </div>

        <div >

            {candidatos?.map((perdedor, i) => (
                i>0?
                <div key={perdedor.id} className="text-xs py-2 border border-black">
                    <p>{perdedor.nombre} - {perdedor.porcentaje }%</p>
                    <p>{perdedor.fuerza}</p>
                </div>
                : null
        
            ))}

        </div>
        
    </div>
  )
}

export default Departamento