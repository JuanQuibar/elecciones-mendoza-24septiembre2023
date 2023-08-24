
import {prisma} from '../../lib/prisma'
import { NextResponse } from "next/server";

//lib/prisma.ts se usa para no tener que importar {PrismaClien} en cada componente a  declarar const prisma = new PrismaClient() para tener acceso a los métodos de prisma

//Uso de prisma con Next13: https://codevoweb.com/how-to-setup-prisma-orm-in-nextjs-13-app-directory/

export async function GET(request: Request) {
  const departamentos = await prisma.departamento.findMany({
    include: {
      candidatos: true
    },
   
  })
  ;
  return NextResponse.json(departamentos);
}

/* import { PrismaClient } from "@prisma/client"

export async function GET() {  

  const prisma = new PrismaClient()

  const res= await prisma.departamento.findMany({
    include: {
      candidatos: true
    },
   
  })
  return res
  
  }  */
