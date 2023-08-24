import { candidatos } from "./data/candidatos";
import { departamentos } from "./data/departamentos";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main =async () : Promise<void> => {
    try {
        await prisma.departamento.createMany({
            data: departamentos
        })
        await prisma.candidato.createMany({
            data: candidatos
        })
    } catch (error) {
        console.log(error)
    }
    
}

main()