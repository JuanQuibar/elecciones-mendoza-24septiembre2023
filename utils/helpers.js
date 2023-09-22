export const convertir = (porcentaje) =>{
    if(typeof porcentaje === "string" && porcentaje.includes(",")){
        const numero = parseFloat(porcentaje.replace("," , "."))
        const parseado = Math.round(numero)
    return parseado

    }else{
        return porcentaje
    }
    
}