import { connection } from "../connection";

const altStudent = async(id:string, turma_id:string):Promise<void> =>{
  await connection.raw(`UPDATE Estudante SET turma_id = ${turma_id} WHERE id = ${id}`)
}

export default altStudent