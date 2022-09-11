import { connection } from "../connection";
import { Estudante } from "../types";

const AddStudent = async(nome:string, email:string, data_nasc:string, turma_id:string): Promise<void> =>{
  let id = Date.now() / 5 * 7 + 82
  let newId = id.toString()

  const response:Estudante = {
    id: newId,
    nome: nome,
    email: email,
    data_nasc: data_nasc,
    turma_id: turma_id
  }
  await connection("Estudante").insert(response)
}
export default AddStudent