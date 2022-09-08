import { Turma } from "../types";
import { connection } from "../connection";

const createClass = async (name:string, modulo:string): Promise<void> =>{
  let  id = Date.now().toString()
  

  const response: Turma = {
    id: id,
    name: name,
    modulo:modulo
  }
  await connection("Turma").insert(response)
}

export default createClass