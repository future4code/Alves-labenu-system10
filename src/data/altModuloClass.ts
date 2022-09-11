import { connection } from "../connection"
import { Turma } from "../types"

const altModuloClass = async(id:string, modulo:string): Promise <void> =>{
  await connection.raw(`UPDATE Turmas SET modulo = ${modulo} WHERE id = ${id} `)
}

export default altModuloClass