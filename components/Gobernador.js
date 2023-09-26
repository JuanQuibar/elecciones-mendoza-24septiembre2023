import Image from "next/image"

const Gobernador = ({gobernador, widthCards}) => {
  
function formatearNumero(numero) {
    const numeroRedondeado = numero.toFixed(1);
    const cambiarPunto = numeroRedondeado.replace('.', ',');
    const numeroFormateado = cambiarPunto.replace(',0', '');
    return numeroFormateado;
  }
  
  return ( 

    <div className="ancho bg-gradient-gober flex flex-col border-x-[10px] border-x-white ">
      <style jsx>{`
                .ancho{
                    width: ${widthCards+'px'};
                    }
            `}</style>

        <div className="w-10/12">
          <Image width={300} height={300} src={`/gobernadores/${gobernador.foto}.webp`} alt="Foto candidato" />
            {/* <img className="object-cover w-10/12 " src={`/gobernadores/${gobernador.foto}.webp`} alt="Foto candidato" /> */}
        </div>

        <div className="px-2 border-t-2 border-t-white pt-3 pb-5 ">
            <h2 className="text-white font-[900] text-7xl ">{formatearNumero(gobernador.porcentaje)}% </h2>
            <h2 className="text-white uppercase font-[900] text-[26px]  ">{gobernador.nombre} </h2>
            <p className=" text-white uppercase font-[500] leading-none ">{gobernador.fuerza} </p>
        </div>

    </div>
  )
} 

export default Gobernador