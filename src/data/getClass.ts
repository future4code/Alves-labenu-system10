import { Turma } from "../types"
import { connection } from "../connection"

const getClass = async () =>{
  const response:Turma[] = await connection.raw(`SELECT name FROM Turmas WHERE modulo != 0`)

  return response[0]
}

export default getClass