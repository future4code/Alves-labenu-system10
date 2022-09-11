import { connection } from "../connection";
import { Docente } from "../types";

const createDocente = async(name:string, email:string, data_nasc:string, turma_id:string): Promise<void> => {
  let id = Date.now() / 5 * 12 + 82
  let newId = id.toString()

  const response:Docente = {
    id: newId,
    name: name,
    email: email,
    data_nasc: data_nasc,
    turma_id: turma_id
  }
  await connection("Docente").insert(response)
}

export default createDocente