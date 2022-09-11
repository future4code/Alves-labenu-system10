import { connection } from "../connection";
import { Docente } from "../types";

const altDocente = async(id:string, turma_id:string):Promise<void> =>{
  await connection.raw(`UPDATE Docente SET turma_id = ${turma_id} WHERE id = ${id}`)
}

export default altDocente